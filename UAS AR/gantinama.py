import os

# Ganti ke folder kamu
folder_path = r"C:\Users\modern\Downloads\aam\UAS AR\assets\images"  # ← Ubah ini

# Format nama baru
nama_baru = "hal"

# Ambil semua file gambar yang diizinkan
files = sorted([f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))])

# Proses rename dan ubah ekstensi ke .jpg
for i, filename in enumerate(files, start=1):
    new_name = f"{nama_baru}{i}.jpg"  # pakai ekstensi .jpg
    src = os.path.join(folder_path, filename)
    dst = os.path.join(folder_path, new_name)

    os.rename(src, dst)
    print(f"Renamed: {filename} → {new_name}")
