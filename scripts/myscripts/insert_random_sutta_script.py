import os

# Folder to scan
target_folder = "D:/bw2_20250319"

# Code to insert
declaration = '<script src="../js/suttaFiles.js"></script>'
function_script = '''<script>
 // Script to open random Sutta
 function openRandomSutta() {
  const randomIndex = Math.floor(Math.random() * suttaFiles.length);
  const selectedFile = suttaFiles[randomIndex];

  // Get root path of your site 
  const currentPath = location.pathname;
  const rootPath = currentPath.split("/").slice(0, -2).join("/") + "/";

  // Redirect to the correct file
  window.location.href = rootPath + selectedFile;
}
</script>'''

# Insert point: before closing </head> or </body>
def insert_script(content):
    if declaration in content or "function openRandomSutta()" in content:
        return None  # Already inserted

    insert_point = "</head>" if "</head>" in content else "</body>"
    if insert_point not in content:
        return None

    insertion = f"{declaration}\n{function_script}\n"
    return content.replace(insert_point, insertion + insert_point)

# Walk through all HTML files
count = 0
for root, _, files in os.walk(target_folder):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            updated = insert_script(content)
            if updated:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(updated)
                count += 1

print(f"✅ Inserted script into {count} HTML files.")
