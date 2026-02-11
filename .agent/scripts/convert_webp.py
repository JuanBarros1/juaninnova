
from PIL import Image
import sys
import os

def convert_to_webp(source_path, dest_path):
    try:
        img = Image.open(source_path)
        img.save(dest_path, 'WEBP', quality=85)
        print(f"Successfully converted {source_path} to {dest_path}")
    except Exception as e:
        print(f"Error converting: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert_webp.py <source> <dest>")
        sys.exit(1)
    
    convert_to_webp(sys.argv[1], sys.argv[2])
