from PIL import Image
import os

# مسار حفظ الصور
output_dir = "C:/Users/DELL/Documents/VAIBO_Project/production/automatique/images"
os.makedirs(output_dir, exist_ok=True)

# قائمة الألوان
colors = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white"]

# توليد الصور
for color in colors:
    image = Image.new("RGB", (200, 200), color=color)
    image_path = os.path.join(output_dir, f"{color}_image.png")
    image.save(image_path)

print("✅ تم إنشاء جميع الصور بنجاح في مجلد automatique/images.")
