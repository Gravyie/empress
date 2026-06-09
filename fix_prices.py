import re

def convert_prices(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    def replacer(match):
        price = int(match.group(1))
        if price > 500: # only convert large INR prices
            new_price = round(price / 83)
            return f"price: {new_price}"
        return match.group(0)

    new_content = re.sub(r'price:\s*(\d+)', replacer, content)
    
    with open(filename, 'w') as f:
        f.write(new_content)

convert_prices('src/pages/PCBuilder.jsx')
convert_prices('src/pages/BuildPC.jsx')

