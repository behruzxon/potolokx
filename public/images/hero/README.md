# Hero rasm

Hero komponentida `next/image` bilan `public/images/hero/main.jpg` ko'rsatiladi.

## Hozirgi rasm

- **Fayl:** `main.jpg` (optimallashtirilgan)
- **O'lcham:** 1800x1344 px
- **Hajm:** ~288 KB (JPG, quality 90)
- **Original:** `original-main.jpg` (~6.9 MB) — backup sifatida saqlanadi

## Yangi rasm qo'yish uchun talablar

- **Yo'nalish:** gorizontal landscape (16:9 yoki shunga yaqin)
- **O'lcham:** 1600x900 yoki 1800x1000 px
- **Format:** JPG yoki WebP
- **Hajm:** 200–500 KB
- **Mazmun:**
  - Xona ichi ko'rinsin (devor, mebel, deraza yorug'i)
  - Shiftda natijnoy potolok aniq ko'rinsin (matoviy, glyans, LED yoki dizayn)
  - Chandelier yoki LED kontur bo'lsa yanada yaxshi
  - Real, professional yoritilgan ish

## Optimallash script

```bash
node -e "
const sharp = require('sharp');
sharp('public/images/hero/original-main.jpg')
  .resize({ width: 1800, withoutEnlargement: true })
  .jpeg({ quality: 90 })
  .toFile('public/images/hero/main.jpg')
  .then(info => console.log(info));
"
```

## Nima qilmaslik kerak

- Gul yoki bezakning close-up rasmlari
- Portret (vertikal) telefon rasmlari
- AI generated, stock-ko'rinishli yoki past sifatli rasmlar
- 1 MB dan katta fayllarni commit qilish (avval optimallang)
