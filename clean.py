import re

def clean_props(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to remove common framer-motion props
    # We match the prop name, an equals sign, and then either a string "..." or a brace expression {...}
    # Brace expressions can be nested, but usually in motion props they are simple { { ... } } or { "..." }
    # Let's use a simpler approach: just remove initial="xxx" or initial={{...}}
    # Warning: this might be imperfect for deeply nested braces, but let's try a regex that balances braces up to 2 levels
    
    props_to_remove = ['initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap', 'whileInView', 'viewport', 'variants', 'custom', 'layout', 'layoutId']
    
    for prop in props_to_remove:
        # Match prop="string"
        content = re.sub(rf'\b{prop}="[^"]*"\s*', '', content)
        # Match prop={...} handling up to 3 levels of nested braces
        content = re.sub(rf'\b{prop}=\{{(?:[^{{}}]*|\{{(?:[^{{}}]*|\{{[^{{}}]*\}})*\}})*\}}\s*', '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

clean_props('src/app/page.tsx')
clean_props('src/app/services/page.tsx')
print("Cleaned motion props")
