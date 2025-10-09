import os
import shutil

# Root folder
root_dir = r'F:\wikidhamma.com\suttapitaka'

# Track how many files were moved
moved_count = 0

# Walk through all subdirectories
for dirpath, dirnames, filenames in os.walk(root_dir):
    # Skip the root folder itself to avoid reprocessing moved files
    if dirpath == root_dir:
        continue

    for filename in filenames:
        if filename.lower().endswith('.htm'):
            original_path = os.path.join(dirpath, filename)
            parent_folder = os.path.basename(dirpath)
            new_filename = parent_folder + '.htm'
            target_path = os.path.join(root_dir, new_filename)

            # If target file already exists, add a number to avoid overwrite
            counter = 1
            while os.path.exists(target_path):
                new_filename = "{}_{}.htm".format(parent_folder, counter)
                target_path = os.path.join(root_dir, new_filename)
                counter += 1

            try:
                shutil.move(original_path, target_path)
                moved_count += 1
                print("[{}] Moved: {} → {}".format(moved_count, original_path, target_path))
            except Exception as e:
                print("Error moving {} → {}".format(original_path, str(e)))

print("\n✅ Done! Total files moved:", moved_count)
