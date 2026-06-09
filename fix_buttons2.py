import os
import re

def fix_buttons_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    # Look for leftover dark classes that shouldn't be there because we are always dark
    # e.g., hover:bg-gray-900 dark:hover:bg-white hover:text-black -> hover:bg-white hover:text-black
    new_content = re.sub(r'hover:bg-gray-\d+\s+dark:hover:bg-white\s+hover:text-black', 'hover:bg-white hover:text-black', new_content)
    
    # Also fix anything that is like `bg-gray-900 dark:bg-white text-black` just in case
    new_content = re.sub(r'bg-gray-\d+\s+dark:bg-white\s+text-black', 'bg-white text-black', new_content)
    
    # Any hover:text-gray-900 dark:text-white
    new_content = re.sub(r'hover:text-gray-\d+\s+dark:text-white', 'hover:text-white', new_content)

    # Any text-gray-900 dark:text-white -> text-white
    # WAIT, what if we have text-gray-900 dark:text-white in a non-button? That's actually fine, but the user complained about buttons.
    # Let's specifically look for button classes.
    
    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.tsx', '.ts')):
            fix_buttons_in_file(os.path.join(root, file))
