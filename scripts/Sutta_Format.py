# -*- coding: utf-8 -*-
import re
from Npp import editor, notepad

# Get full document text (do not strip so we can preserve original blank lines)
full_text = editor.getText()
if not full_text.strip():
    notepad.messageBox("The document is empty.", "No Content")
    exit()

# Define Vietnamese and Pali markers
vietnamese_markers = [
    # Lowercase diacritics
    'đ', 'ư', 'ơ', 'â', 'ê', 'ô', 'ă',
    'á', 'à', 'ả', 'ã', 'ạ',
    'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ',
    'é', 'è', 'ẻ', 'ẽ', 'ẹ',
    'ế', 'ề', 'ể', 'ễ', 'ệ',
    'í', 'ì', 'ỉ', 'ĩ', 'ị',
    'ó', 'ò', 'ỏ', 'õ', 'ọ',
    'ố', 'ồ', 'ổ', 'ỗ', 'ộ',
    'ú', 'ù', 'ủ', 'ũ', 'ụ',
    'ứ', 'ừ', 'ử', 'ữ', 'ự',
    'ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ',
    'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ',

    # Uppercase diacritics
    'Đ', 'Ư', 'Ơ', 'Â', 'Ê', 'Ô', 'Ă',
    'Á', 'À', 'Ả', 'Ã', 'Ạ',
    'Ấ', 'Ầ', 'Ẩ', 'Ẫ', 'Ậ',
    'É', 'È', 'Ẻ', 'Ẽ', 'Ẹ',
    'Ế', 'Ề', 'Ể', 'Ễ', 'Ệ',
    'Í', 'Ì', 'Ỉ', 'Ĩ', 'Ị',
    'Ó', 'Ò', 'Ỏ', 'Õ', 'Ọ',
    'Ố', 'Ồ', 'Ổ', 'Ỗ', 'Ộ',
    'Ú', 'Ù', 'Ủ', 'Ũ', 'Ụ',
    'Ứ', 'Ừ', 'Ử', 'Ữ', 'Ự',
    'Ý', 'Ỳ', 'Ỷ', 'Ỹ', 'Ỵ',
    'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ',

]

# Whole-word Vietnamese terms
vietnamese_words = ['con', 'trai', 'vua', 'xong', 'Con', 'kinh', 'Kinh', 'trong', 'hay', 'cho', 'tham', 'nay', 'khi', 'sanh', 'thanh', 'cao', 'mai', 'sinh', 'ai', 'chung', 'chia', 'trung', 'sau', 'thay', 'minh', 'danh', 'oai', 'nghi', 'hai', 'ngang', 'qua', 'sai', 'xin']

def is_vietnamese(line):
    # Check for any diacritic character
    if any(char in line for char in vietnamese_markers):
        return True

    # Check for whole-word matches using regex (Python 2.7 compatible)
    for word in vietnamese_words:
        pattern = r'\b{}\b'.format(re.escape(word))
        if re.search(pattern, line):
            return True

    return False



def is_pali(line):
    return not is_vietnamese(line)


lines = full_text.splitlines()
output_lines = []
in_paragraph = False
in_pali_span = False

def open_paragraph():
    return '<p lang="vi" class="vi">'

def close_paragraph():
    return '</p>'

# Process each original line, preserving blank lines
for i, raw_line in enumerate(lines):
    # Keep the original spacing of blank lines
    if raw_line.strip() == '':
        # Close any open spans/paragraphs before emitting a blank line
        if in_pali_span:
            output_lines.append('</span>')
            in_pali_span = False
        if in_paragraph:
            output_lines.append(close_paragraph())
            in_paragraph = False
        output_lines.append('')  # preserve blank line
        continue

    line = raw_line.rstrip()

    # Start paragraph if not open
    if not in_paragraph:
        output_lines.append(open_paragraph())
        in_paragraph = True

    # Determine language for this line
    if is_pali(line) and not is_vietnamese(line):
        if not in_pali_span:
            output_lines.append('<span lang="pi" class="pali">')
            in_pali_span = True
        output_lines.append(line + '<br>')
    else:
        if in_pali_span:
            output_lines.append('</span>')
            in_pali_span = False
        output_lines.append(line + '<br>')

# Close any remaining open spans/paragraphs at end of document
if in_pali_span:
    output_lines.append('</span>')
    in_pali_span = False
if in_paragraph:
    output_lines.append(close_paragraph())
    in_paragraph = False

# Reconstruct text with original newline structure preserved
# join with '\n' because splitlines removed trailing newline characters
result = '\n'.join(output_lines)

# If original text ended with a newline, preserve that final newline
if full_text.endswith('\n'):
    result += '\n'

editor.setText(result)
