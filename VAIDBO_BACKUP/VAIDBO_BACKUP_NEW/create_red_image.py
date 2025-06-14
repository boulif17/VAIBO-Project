from PIL import Image
import os

# إنشاء مجلد images إذا لم يكن موجوداً
os.makedirs("images", exist_ok=True)

# إنشاء صورة باللون الأحمر 200x200
image = Image.new("RGB", (200, 200), color="red")

# حفظ الصورة داخل مجلد images
image.save("images/mon_image.png")

print("✅ تم إنشاء الصورة وحفظها بنجاح في مجلد images.")
