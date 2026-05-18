export type Location = {
  slug: string;
  name: string;
  nameRu: string;
  shortName: string;
  type: "shahar" | "tuman";
  href: string;
  intro: string;
  description: string;
  localTouches: string[];
  keywords: string[];
  faq: { q: string; a: string }[];
  serviceArea: string[];
};

export const qashqadaryoOverview: Location = {
  slug: "natijnoy-patolok-qashqadaryo",
  name: "Qashqadaryo",
  nameRu: "Кашкадарья",
  shortName: "Qashqadaryo",
  type: "shahar",
  href: "/natijnoy-patolok-qashqadaryo",
  intro:
    "PotolokX — Qashqadaryo viloyatining barcha shahar va tumanlarida natijnoy potolok o'rnatamiz. Qarshidan boshlab Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi va Muborakgacha.",
  description:
    "Qashqadaryo bo'ylab natijnoy potolok xizmati: o'lchov olishdan to montajgacha bir kunda. Ish boshlashdan oldin Telegram bot orqali narxni hisoblab beramiz, oxirida kafolat hujjati beriladi.",
  localTouches: [
    "Qashqadaryo bo'ylab chiqamiz, transport bizning hisobimizdan",
    "Viloyat ichidagi yetkazib berish bepul",
    "Yangi qurilgan uylar va eski binolarga ham mos montaj",
    "Mahalliy ustalar — o'zbek va rus tilida bemalol gaplashamiz",
  ],
  keywords: [
    "natijnoy patalok qashqadaryo",
    "natijnoy potolok qashqadaryo",
    "натяжной потолок кашкадарья",
    "qashqadaryo natijnoy potolok narxi",
  ],
  faq: [
    {
      q: "Qashqadaryoning qaysi shaharlariga chiqasizlar?",
      a: "Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi, Muborak va boshqa barcha tumanlarga chiqamiz. Viloyat ichida yetib borish bepul.",
    },
    {
      q: "Bir xona uchun necha kunda tayyor qilasizlar?",
      a: "O'rtacha xonadon 1 kunda tugaydi. Murakkab dizayn, LED yoki ko'p darajali potolok bo'lsa 1-2 kun ketadi.",
    },
    {
      q: "Narxni qanday hisoblaysiz?",
      a: "Xona o'lchamlari (uzunligi va eni), tanlangan material turi va qo'shimcha yoritgichlarga qarab hisoblanadi. Telegram botda dastlabki narxni o'zingiz ham olishingiz mumkin.",
    },
    {
      q: "Kafolat beriladi mi?",
      a: "Ha. Material va montaj uchun yozma kafolat beramiz. Tasodifiy nuqsonlar bo'lsa, bepul tuzatib beramiz.",
    },
  ],
  serviceArea: [
    "Qarshi",
    "Shahrisabz",
    "Kitob",
    "Chiroqchi",
    "Yakkabog'",
    "Koson",
    "G'uzor",
    "Qamashi",
    "Muborak",
  ],
};

export const locations: Location[] = [
  {
    slug: "natijnoy-patolok-qarshi",
    name: "Qarshi",
    nameRu: "Карши",
    shortName: "Qarshi",
    type: "shahar",
    href: "/natijnoy-patolok-qarshi",
    intro:
      "Qarshi shahridagi xonadon va ofislar uchun natijnoy potolok o'rnatamiz. O'lchov bepul, montaj bir kunda, kafolat yozma rasmiylashtiriladi.",
    description:
      "PotolokX Qarshi shahrida 7 yildan ortiq vaqtdan beri natijnoy potolok bilan shug'ullanadi. Yangi qurilgan binolarning ko'pchiligida bizning ishimiz bor. Matoviy, glyans, LED yoritgichli yoki print rasmli potolok — har qanday variantni tanlash mumkin.",
    localTouches: [
      "Qarshi ichida o'lchovga 1-2 soat ichida chiqamiz",
      "Markaziy shahar, Bahoriston, Mustaqillik MFY va boshqa mahallalarda tajriba",
      "Yangi binolar va ko'p qavatli uylarga moslashgan montaj texnikasi",
      "Telegram bot orqali Qarshi narxlari to'g'ridan-to'g'ri ko'rinadi",
    ],
    keywords: [
      "natijnoy patalok qarshi",
      "natijnoy potolok qarshi",
      "potolok ustasi qarshi",
      "натяжной потолок карши",
      "qarshi natijnoy potolok narxi",
    ],
    faq: [
      {
        q: "Qarshida o'lchovga chiqish bepulmi?",
        a: "Ha, Qarshi shahar ichida o'lchov xizmati mutlaqo bepul. Telefon yoki Telegram bot orqali murojaat qilsangiz, qulay vaqtda ustamiz yetib boradi.",
      },
      {
        q: "Bir xonali kvartiraga necha so'm tushadi?",
        a: "Bir xonali kvartira odatda 18-25 m². Matoviy oddiy potolok eng arzon variant. Aniq narx xona o'lchamiga qarab Telegram botda chiqadi.",
      },
      {
        q: "LED yoritgichli potolok Qarshida mavjudmi?",
        a: "Ha, LED lenta, nuqtali svetilniklar va parya chiroqlari uchun joy chiqarib beramiz. Elektrik ulanishlari toza ishlaydi.",
      },
      {
        q: "Ishni qachon boshlashingiz mumkin?",
        a: "Odatda o'lchov olingandan keyin 2-4 kun ichida montaj qilamiz. Shoshilinch holatlarda ertasi kunigayoq bajaramiz.",
      },
    ],
    serviceArea: ["Qarshi shahar", "Qarshi tuman"],
  },
  {
    slug: "natijnoy-patolok-shahrisabz",
    name: "Shahrisabz",
    nameRu: "Шахрисабз",
    shortName: "Shahrisabz",
    type: "shahar",
    href: "/natijnoy-patolok-shahrisabz",
    intro:
      "Shahrisabz shahrida natijnoy potolok ustasi kerakmi? PotolokX yetib boradi: o'lchov, material, montaj va kafolat — bir paketda.",
    description:
      "Shahrisabzning markaziy ko'chalari, yangi mikrorayonlari va shahar atrofidagi qishloqlarda ishlaymiz. Matoviy va glyans matolar, LED yoritgichli yechimlar, oshxona uchun namlikka chidamli variantlar bor.",
    localTouches: [
      "Shahrisabzga Qarshidan bir kunda yetib boramiz",
      "Eski uylar ham, yangi binolar ham — har ikkalasi bilan ishlash tajribasi bor",
      "Hudud bo'ylab transport bepul",
      "O'zbek va rus tilida bemalol muloqot",
    ],
    keywords: [
      "natijnoy patalok shahrisabz",
      "natijnoy potolok shahrisabz",
      "shahrisabz potolok ustasi",
      "натяжной потолок шахрисабз",
    ],
    faq: [
      {
        q: "Shahrisabzga chiqish narxi qo'shiladimi?",
        a: "Yo'q. Qashqadaryo bo'ylab transport va yetib borish narxi PotolokXning hisobida.",
      },
      {
        q: "Shahrisabzda qaysi material ko'proq tanlanadi?",
        a: "Ko'pchilik matoviy oq potolokni tanlaydi — sokin va zamonaviy ko'rinadi. Mehmonxona uchun glyans variantlar ham mashhur.",
      },
      {
        q: "Bir kunda tugatasizmi?",
        a: "Ha, oddiy bitta xona 4-6 soatda tayyor bo'ladi. Katta zal yoki ko'p darajali potolok 1-2 kun ketishi mumkin.",
      },
      {
        q: "Shahrisabz ichida zakazlar qabul qilasizmi?",
        a: "Albatta, telefon va Telegram bot orqali murojaat qilsangiz bo'ladi.",
      },
    ],
    serviceArea: ["Shahrisabz shahar", "Shahrisabz tuman"],
  },
  {
    slug: "natijnoy-patolok-kitob",
    name: "Kitob",
    nameRu: "Китаб",
    shortName: "Kitob",
    type: "tuman",
    href: "/natijnoy-patolok-kitob",
    intro:
      "Kitob tumanida natijnoy potolok o'rnatish xizmati. Toza ishlaydigan ustalar, sifatli material va yozma kafolat.",
    description:
      "Kitob tumani markazidan tortib qishloqlargacha — PotolokX butun tumanga chiqadi. Matoviy, glyans, satin, LED yoritgichli potolok variantlari mavjud.",
    localTouches: [
      "Kitob markaziga 1 kun ichida chiqamiz",
      "Qishloq joylarga ham boramiz",
      "Mahalliy mijozlar uchun maxsus mavsumiy chegirmalar bor",
      "Telegram bot orqali narx hisoblash 1 daqiqada",
    ],
    keywords: [
      "natijnoy patalok kitob",
      "kitob potolok ustasi",
      "натяжной потолок китаб",
    ],
    faq: [
      {
        q: "Kitob tumanida ham xizmat qilasizmi?",
        a: "Ha, Kitob shahar va tumanning barcha qishloqlariga chiqamiz.",
      },
      {
        q: "Narxi qancha?",
        a: "M² hisobida hisoblanadi. Telegram botda xona o'lchamlarini yuborsangiz, daqiqa ichida narx chiqadi.",
      },
      {
        q: "Material qayerdan?",
        a: "Asosan Yevropa va Turkiya brendlari — RuPo, MSD, LackFolie va boshqalar. Sertifikatli.",
      },
      {
        q: "Ish kafolatlanganmi?",
        a: "Ha, material va montaj uchun rasmiy kafolat beriladi.",
      },
    ],
    serviceArea: ["Kitob shahar", "Kitob tuman"],
  },
  {
    slug: "natijnoy-patolok-chiroqchi",
    name: "Chiroqchi",
    nameRu: "Чиракчи",
    shortName: "Chiroqchi",
    type: "tuman",
    href: "/natijnoy-patolok-chiroqchi",
    intro:
      "Chiroqchi tumanidagi xonadonlar va ob'ektlar uchun zamonaviy natijnoy potolok yechimi.",
    description:
      "Chiroqchi tumani bo'ylab ishlaymiz. Tabiiy yoritgichni saqlab qoladigan matoviy potoloklar, oshxona uchun namlikka chidamli variantlar, zal uchun LED yoritgichli dizaynlar.",
    localTouches: [
      "Chiroqchi markaziga va atrofdagi qishloqlarga chiqamiz",
      "Materiallarni o'zimiz olib boramiz",
      "Toza ish — keyin tozalash kerak emas",
      "Kafolat va xizmat ko'rsatish",
    ],
    keywords: [
      "natijnoy patalok chiroqchi",
      "chiroqchi potolok ustasi",
      "натяжной потолок чиракчи",
    ],
    faq: [
      {
        q: "Chiroqchi tumaniga necha kunda chiqasizlar?",
        a: "Murojaat qilingan kundan boshlab 1-3 kun ichida o'lchov olamiz.",
      },
      {
        q: "Bir xonaga necha m² ketadi?",
        a: "Xona maydoni qancha bo'lsa shuncha. Misol uchun, 3x4 metrlik xona uchun 12 m² potolok mato.",
      },
      {
        q: "Eski uyga ham mosmi?",
        a: "Ha, eski binolarga moslashgan montaj usulimiz bor. Eski shipni urib tashlash shart emas.",
      },
      {
        q: "Yotoqxona uchun qaysi material yaxshi?",
        a: "Yotoqxonaga sokin ranglardagi matoviy mato tavsiya qilamiz — yorug'likni yumshoq aks ettiradi.",
      },
    ],
    serviceArea: ["Chiroqchi shahar", "Chiroqchi tuman"],
  },
  {
    slug: "natijnoy-patolok-yakkabog",
    name: "Yakkabog'",
    nameRu: "Яккабаг",
    shortName: "Yakkabog'",
    type: "tuman",
    href: "/natijnoy-patolok-yakkabog",
    intro:
      "Yakkabog' tumanidagi mijozlar uchun natijnoy potolok o'rnatish. Tez, toza, kafolatli.",
    description:
      "Yakkabog' tumani bo'ylab natijnoy potolok xizmati. O'lchov bepul, materiallar sertifikatli, montajdan keyin xonangiz toza qoldiriladi.",
    localTouches: [
      "Yakkabog' va atrofdagi qishloqlarga chiqamiz",
      "Material olib kelishimiz biz hisobidan",
      "Mahalliy uy egalari uchun maxsus narxlar",
      "Telegram bot orqali tezkor javob",
    ],
    keywords: [
      "natijnoy patalok yakkabog",
      "yakkabog potolok ustasi",
      "натяжной потолок яккабаг",
    ],
    faq: [
      {
        q: "Yakkabog'da o'lchov bepulmi?",
        a: "Ha, hudud ichida o'lchov olish narxsiz.",
      },
      {
        q: "Necha m² dan boshlab ishlaysizlar?",
        a: "Aniq minimal chegara yo'q — kichik xonalar uchun ham, katta zal uchun ham mosbiz.",
      },
      {
        q: "LED bilan birga o'rnata olamizmi?",
        a: "Ha, LED lenta va nuqtali yoritgichlarni birga o'rnatamiz.",
      },
      {
        q: "To'lov qanday?",
        a: "Naqd yoki Click/Payme orqali. Avans odatda 30%, qolgan qismi ish tugagandan keyin.",
      },
    ],
    serviceArea: ["Yakkabog' shahar", "Yakkabog' tuman"],
  },
  {
    slug: "natijnoy-patolok-koson",
    name: "Koson",
    nameRu: "Касан",
    shortName: "Koson",
    type: "tuman",
    href: "/natijnoy-patolok-koson",
    intro:
      "Koson tumanida natijnoy potolok o'rnatamiz. Yangi uy yoki ta'mirdagi xonadon — har birida toza va aniq ishlaymiz.",
    description:
      "Koson va atrofidagi aholi punktlariga chiqamiz. Mato turini, rang va yoritgichni o'zingiz tanlaysiz, biz montaj qilamiz.",
    localTouches: [
      "Kosonga viloyat ichidan tez yetib boramiz",
      "Mahalliy mijozlar uchun chegirmalar",
      "Hujjat va kafolatli ish",
      "Telegram bot orqali narx kalkulyator",
    ],
    keywords: [
      "natijnoy patalok koson",
      "koson potolok ustasi",
      "натяжной потолок касан",
    ],
    faq: [
      {
        q: "Koson tumaniga chiqasizmi?",
        a: "Ha, Koson shahar va atrofidagi qishloqlarga ham boramiz.",
      },
      {
        q: "Materialni o'zim olib kelsam bo'ladimi?",
        a: "Bo'ladi, lekin sertifikatli sifatli material bo'lishi shart. Biz tavsiya qiladigan brendlardan olishni maslahat beramiz.",
      },
      {
        q: "Necha vaqt davom etadi ish?",
        a: "Oddiy xona 4-6 soat, butun kvartira 1-2 kun.",
      },
      {
        q: "Toza ishlaysizlarmi?",
        a: "Ha, ishdan keyin mebellaringizni o'rnida qoldiramiz va xonani toza qilib chiqib ketamiz.",
      },
    ],
    serviceArea: ["Koson shahar", "Koson tuman"],
  },
  {
    slug: "natijnoy-patolok-guzor",
    name: "G'uzor",
    nameRu: "Гузар",
    shortName: "G'uzor",
    type: "tuman",
    href: "/natijnoy-patolok-guzor",
    intro:
      "G'uzor tumanida natijnoy potolok — toza, zamonaviy va arzon yechim. PotolokX bilan birinchi marta bo'lsayam, ishonchli ish qilamiz.",
    description:
      "G'uzor tumanidagi xonadonlar, kafelar va do'konlar uchun natijnoy potolok o'rnatamiz. Yoritgich, lyustra va dizaynni mijoz tanlaydi.",
    localTouches: [
      "G'uzorga bemalol chiqamiz",
      "Yangi uy va remont xonalariga moslashgan jihozlar",
      "Ish boshlashdan oldin narx kelishiladi — ortiqcha to'lov yo'q",
      "Telegram bot orqali doimiy aloqa",
    ],
    keywords: [
      "natijnoy patalok guzor",
      "guzor potolok ustasi",
      "натяжной потолок гузар",
    ],
    faq: [
      {
        q: "G'uzorga chiqasizmi?",
        a: "Ha, G'uzor shahar va tumanning barcha qishloqlariga xizmat qilamiz.",
      },
      {
        q: "Narxi Qarshidan farq qiladimi?",
        a: "Yo'q. Material va montaj narxi viloyat bo'ylab bir xil. Faqat shoshilinch ish bo'lsa kichik qo'shimcha bo'lishi mumkin.",
      },
      {
        q: "Lyustrani ham siz o'rnatasizmi?",
        a: "Ha, kerakli bo'lsa lyustra, LED va elektrik bog'lashlarni biz qilamiz.",
      },
      {
        q: "Kafolat qancha vaqtga?",
        a: "Material uchun 10 yilgacha, montaj uchun 2-3 yil kafolat beriladi.",
      },
    ],
    serviceArea: ["G'uzor shahar", "G'uzor tuman"],
  },
];

export const allLocations: Location[] = [qashqadaryoOverview, ...locations];

export const otherDistricts = ["Qamashi", "Muborak", "Dehqonobod", "Mirishkor", "Nishon", "Kasbi"];

export const getLocationBySlug = (slug: string): Location | undefined =>
  allLocations.find((loc) => loc.slug === slug);
