# -*- coding: utf-8 -*-
from Npp import editor, notepad, console
import traceback

console.show()
console.clear()

def format_bilingual_blocks(text):
    # Normalize endings and split into blocks by blank lines
    text = text.replace('\r\n', '\n').replace('\r', '\n')
    raw_lines = text.split('\n')
    blocks = []
    cur = []
    for L in raw_lines:
        if L.strip() == '':
            if cur:
                blocks.append(cur)
                cur = []
        else:
            cur.append(L.rstrip())
    if cur:
        blocks.append(cur)

    out = []
    for block in blocks:
        # If only one line in block, just output <p>line</p>
        if len(block) == 1:
            out.append('<p lang="vi" class="vi">{}</p>'.format(block[0]))
            continue
        # Otherwise treat last line as Pali, rest as VN
        vn_lines = block[:-1]
        pali = block[-1]
        vn = ' '.join([ln.strip() for ln in vn_lines if ln.strip()])
        out.append('<p lang="vi" class="vi">{}<br>\n<span lang="pi" class="pali">{}</span></p>'.format(vn, pali))
    return '\n\n'.join(out) + '\n'

def main():
    # get selection or whole doc
    sel_start = editor.getSelectionStart()
    sel_end = editor.getSelectionEnd()
    if sel_start != sel_end:
        raw = editor.getTextRange(sel_start, sel_end)
    else:
        raw = editor.getText()

    result = format_bilingual_blocks(raw)

    editor.beginUndoAction()
    try:
        if sel_start != sel_end:
            editor.setTargetRange(sel_start, sel_end)
            editor.replaceTarget(result)
            editor.setTargetRange(sel_start, sel_start + len(result))
        else:
            editor.selectAll()
            editor.replaceSel(result)
            editor.setEmptySelection(0)
    finally:
        editor.endUndoAction()

    notepad.messageBox("Formatting complete. See console for details.", "Done", 0)
    console.write("Formatted {} characters into {} characters\n".format(len(raw), len(result)))
    console.write("Output preview:\n")
    console.write(result[:1000] + ('\n... (truncated)\n' if len(result) > 1000 else '\n'))

try:
    main()
except Exception:
    console.writeError("An error occurred:\n")
    console.writeError(traceback.format_exc())
    notepad.messageBox("An error occurred. Open the PythonScript console for details.", "Error", 0)
