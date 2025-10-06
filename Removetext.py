import re
from Npp import *

editor.beginUndoAction()

# Get the full text from the current document
text = editor.getText()

# Remove only patterns like (Ud 1), (Ud 2), etc.
cleaned_text = re.sub(r'\(Theri. \d+\)', '', text)

# Replace the document content
editor.setText(cleaned_text)

editor.endUndoAction()
