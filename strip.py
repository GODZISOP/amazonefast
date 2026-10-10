import re
import sys

def remove_framer_motion(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove imports
    content = re.sub(r'import\s+\{.*?motion.*?\}\s+from\s+[\'"]framer-motion[\'"];?\n?', '', content)
    
    # Replace motion.tag with tag
    content = re.sub(r'<motion\.([a-zA-Z0-9]+)', r'<\1', content)
    content = re.sub(r'</motion\.([a-zA-Z0-9]+)>', r'</\1>', content)
    
    # Very basic prop removal - this is risky, let's only do it for single-line ones or specific ones
    # It's better to just leave the props if they don't break standard HTML tags, but React complains about unknown props.
    # Actually, the lag is primarily from the staggering animation and huge number of elements.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

remove_framer_motion('src/app/page.tsx')
remove_framer_motion('src/app/services/page.tsx')
print("Stripped motion. prefix")
