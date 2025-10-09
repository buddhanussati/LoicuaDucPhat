import pyautogui
import pyperclip
import time
import os

# Number of tabs to process
n_tabs = 22  # Adjust this to match your actual number

# Folder to save files
target_folder = "F:/My_sutta/"
os.makedirs(target_folder, exist_ok=True)

print("⏳ You have 5 seconds to focus Chrome...")
time.sleep(5)

for i in range(n_tabs):
    print(f"🔄 Processing tab {i+1}/{n_tabs}")

    pyautogui.hotkey('ctrl', 'tab')
    time.sleep(1)

    pyautogui.hotkey('ctrl', 'a')
    time.sleep(0.5)
    pyautogui.hotkey('ctrl', 'c')
    time.sleep(1)

    content = pyperclip.paste()

    # Clean up extra line breaks
    lines = content.splitlines()
    cleaned = []
    for i, line in enumerate(lines):
        if line.strip() == "":
            if i > 0 and lines[i - 1].strip() != "":
                cleaned.append("")
        else:
            cleaned.append(line)
    content = "\n".join(cleaned)

    pyautogui.hotkey('ctrl', 'l')
    time.sleep(0.5)
    pyautogui.hotkey('ctrl', 'c')
    time.sleep(0.5)
    url = pyperclip.paste()

    filename = url.split('/')[-1].split('#')[0]
    if not filename.endswith('.htm') and not filename.endswith('.html'):
        filename += '.txt'
    else:
        filename = filename.rsplit('.', 1)[0] + '.txt'

    filepath = os.path.join(target_folder, filename)
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Saved: {filepath}")
    except Exception as e:
        print(f"❌ Error saving {filename}: {e}")

    time.sleep(1)

print("🎉 All tabs processed and saved with clean formatting!")
