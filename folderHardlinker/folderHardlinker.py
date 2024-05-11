import os

def dir_copy(old_path: str, new_path: str, src_files=None, dst_files=None):
    if src_files is None:
        src_files = []
    if dst_files is None:
        dst_files = []
        
    for item in os.listdir(old_path):
        src_item = os.path.join(old_path, item)
        dst_item = os.path.join(new_path, item)
        
        if os.path.isfile(src_item):
            src_files.append(src_item)
            dst_files.append(dst_item)
        else:
            if not os.path.exists(dst_item):
                os.makedirs(dst_item)
            dir_copy(src_item, dst_item, src_files, dst_files)

    return src_files, dst_files

def main():
    dirs = [
        "srcPath", # <=== srcPath
        "dstPath"  # <=== dstPath
    ]
    old_path, new_path = dirs
    old_path = os.path.normpath(old_path)
    new_path = os.path.normpath(new_path)
    
    if old_path.split(":")[0] != new_path.split(":")[0]:
        print("Error: Hard linking across different drives is not allowed. Please ensure that the source file and the target directory are located on the same drive.")
        exit()

    
    if not os.path.exists(new_path):
        os.makedirs(new_path)
    
    src_files, dst_files = dir_copy(old_path, new_path)
    
    for src, dst in zip(src_files, dst_files):
        try:
            os.link(src, dst)
        except Exception as e:
            print(f"Error: Failed to link {src} to {dst}: {e}")

if __name__ == "__main__":
    main()
