# -*- coding: utf-8 -*-
from Npp import editor, notepad

# Lấy dòng hiện tại từ vị trí con trỏ
start_line = editor.lineFromPosition(editor.getCurrentPos())
end_line = start_line + 1222

# Lấy vị trí bắt đầu và kết thúc
start_pos = editor.positionFromLine(start_line)
end_pos = editor.getLineEndPosition(end_line)

# Lấy nội dung đoạn văn bản
selected_text = editor.getTextRange(start_pos, end_pos)
selected_text = unicode(selected_text, 'utf-8')

# Tiêu đề tiếng Việt
header = u"Đây là một từ điển Pali-Anh của kinh điển Nikaya của Phật Giáo Nguyên Thuỷ Theravada. Tôi muốn chuyển thành Pali-Việt. Dịch ra tiếng Việt (Nhớ đây là chuyên ngành Phật giáo Pali-Việt nhé) giúp tôi, giữ nguyên định dạng văn bản nhé </b> để nguyên nhé, không chuyển thành **, và nhớ gửi câu trả lời theo dạng JSON mà không cần {} đâu nhé,\n\n"

# Sao chép vào clipboard
editor.copyText((header + selected_text).encode('utf-8'))

# Chọn đoạn văn bản
editor.setSelectionStart(start_pos)
editor.setSelectionEnd(end_pos)
editor.scrollCaret()

# Thông báo đơn giản
notepad.messageBox("Copied text with header to clipboard.", "Done")
