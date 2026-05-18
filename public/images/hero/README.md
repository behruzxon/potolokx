# Hero rasm

**Hozircha Hero komponentida real rasm ishlatilmaydi.** Bosh sahifa hero qismi premium abstract visual (gradient + dot grid + glassmorphism cards) bilan chiqadi. Mijoz xizmatni rasm orqali emas, H1 + subtitle + CTA orqali tushunadi.

`main.jpg` yoki `main.png` papkada qolsa ham, komponent ularni o'qimaydi.

## Qachon real rasm ulash mumkin

Faqat **juda sifatli landscape xona + potolok rasmi** topilganda. Talablar:

- **Yo'nalish:** gorizontal landscape (16:9 yoki shunga yaqin)
- **O'lcham:** 1600×900 yoki 1920×1080 px
- **Format:** JPG yoki WEBP, ~200–400 KB
- **Mazmun:**
  - Xona ichi ko'rinsin (devor, mebel, deraza yorug'i)
  - Shiftda natijnoy potolok aniq ko'rinsin (matoviy, glyans, LED yoki dizayn)
  - Chandelier yoki LED kontur bo'lsa yanada yaxshi
  - Real, professional yoritilgan ish

## Nima qilmaslik kerak

- Gul yoki bezakning close-up rasmlari
- Portret (vertikal) telefon rasmlari
- AI generated, stock-ko'rinishli yoki past sifatli rasmlar

## Qayta yoqish

Rasm topilganda `src/components/Hero.tsx` ichidagi `HeroVisual` funksiyasiga `next/image` chaqiruvini qaytarish kifoya. Avvalgi versiya kommit tarixida bor.
