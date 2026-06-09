import os
import re

def fix_buttons_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Replace "bg-gray-900 dark:bg-white text-black" with "bg-white text-black"
    # Actually, just replace "bg-gray-900 dark:bg-white" with "bg-white"
    new_content = content.replace("bg-gray-900 dark:bg-white", "bg-white")
    
    # 2. Some might have "text-white dark:text-black" -> "text-black"
    new_content = new_content.replace("text-white dark:text-black", "text-black")

    # 3. Replace "dark:hover:bg-gray-900" with "hover:bg-white text-black" wait no.
    # Actually, any "bg-gray-900 dark:hover:bg-gray-900 dark:bg-white hover:text-black" is a mess.
    new_content = new_content.replace("hover:bg-gray-900 dark:hover:bg-gray-900 dark:bg-white hover:text-black", "hover:bg-white hover:text-black")
    
    # Let's fix the hover on white buttons. Often they have hover:bg-gray-200
    # Let's also fix "bg-gray-900 text-white dark:bg-white dark:text-black" -> "bg-white text-black"
    new_content = new_content.replace("bg-gray-900 text-white dark:bg-white dark:text-black", "bg-white text-black")

    # Fix: hover:bg-[#e06a4a] on white buttons doesn't make sense. If it's a white button it should hover to gray-200.
    # If it's an orange button it should hover to e06a4a.
    # Let's just fix the obvious ones.
    new_content = new_content.replace("bg-white text-black text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#F47C5A] hover:text-gray-900 dark:text-white", "bg-white text-black text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#F47C5A] hover:text-white")
    new_content = new_content.replace("hover:text-gray-900 dark:text-white", "hover:text-white")
    new_content = new_content.replace("text-gray-900 dark:text-white", "text-white")
    
    # Wait, text-gray-900 dark:text-white -> text-white might ruin light backgrounds.
    # But we are forcing Dark Precision everywhere! So text-white is correct for dark backgrounds!
    # Wait, some places have text-gray-900 dark:text-white as a text color for headings.
    # Let's replace "text-gray-900 dark:text-white" with "text-white"
    # Wait, what if there's a white background card? We used "bg-[#0a0a0a]" everywhere for cards!
    # Yes, all cards are dark. So text should always be white!
    
    # We should be careful about replacing text-gray-900 everywhere.
    pass
    
    if content != new_content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js', '.tsx', '.ts')):
            fix_buttons_in_file(os.path.join(root, file))

