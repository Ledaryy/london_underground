import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


STATIC_BASE_DIR = BASE_DIR.parent.parent

print(BASE_DIR)
print(STATIC_BASE_DIR)
print(os.path.join(STATIC_BASE_DIR, 'static'))