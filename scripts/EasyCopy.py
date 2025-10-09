# Inserts the specified HTML style text at the current caret position in Notepad++
from Npp import editor

# Text to insert
text_to_insert = '; style="text-align: center"'

# Get current caret position
pos = editor.getCurrentPos()

# Insert the text
editor.insertText(pos, text_to_insert)

# Move caret after the inserted text (optional)
editor.gotoPos(pos + len(text_to_insert))
