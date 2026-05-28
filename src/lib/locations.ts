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
    "Qashqadaryo viloyatining barcha shahar va tumanlarida natijnoy patalok o'rnatamiz. Qarshidan boshlab Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi, Muborak, Nishon, Kasbi, Mirishkor va Dehqonobodgacha.",
  description:
    "Qashqadaryo bo'ylab natijnoy potolok xizmati: o'lchov olishdan to montajgacha bir kunda. Ish boshlashdan oldin Telegram bot orqali narxni hisoblab beramiz, material sifati bo'yicha tushuntiramiz.",
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
      a: "Qarshi, Shahrisabz, Kitob, Chiroqchi, Yakkabog', Koson, G'uzor, Qamashi, Muborak, Nishon, Kasbi, Mirishkor va Dehqonobodga chiqamiz. Viloyat ichida yetib borish bepul.",
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
      q: "Material sifatiga e'tibor berasizlarmi?",
      a: "Albatta. Yevropa va Turkiya brendlari bilan ishlaymiz, har bir material sertifikatli. Qaysi xona uchun qaysi material to'g'ri kelishini tushuntirib beramiz.",
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
    "Nishon",
    "Kasbi",
    "Mirishkor",
    "Dehqonobod",
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
      "Qarshi shahridagi xonadon va ofislar uchun natijnoy potolok o'rnatamiz. O'lchov bepul, montaj bir kunda, material sifatli.",
    description:
      "Qarshi shahrida 7 yildan ortiq vaqtdan beri natijnoy patalok bilan shug'ullanamiz. Yangi qurilgan binolarning ko'pchiligida bizning ishimiz bor. Matoviy, glyans, LED yoritgichli yoki print rasmli patalok — har qanday variantni tanlash mumkin.",
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
      "Shahrisabz shahrida natijnoy patalok ustasi kerakmi? Yetib boramiz: o'lchov, material, montaj va kafolat — bir paketda.",
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
        a: "Yo'q. Qashqadaryo bo'ylab transport va yetib borish narxi bizning hisobimizda.",
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
      "Kitob tumanida natijnoy potolok o'rnatish xizmati. Toza ishlaydigan ustalar va sifatli material.",
    description:
      "Kitob tumani markazidan tortib qishloqlargacha — butun tumanga chiqamiz. Matoviy, glyans, satin, LED yoritgichli natijnoy patalok variantlari mavjud.",
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
        q: "Material qancha turadi?",
        a: "Sifatli sertifikatli material bo'lsa, to'g'ri o'rnatilgan natijnoy potolok yillar davomida xizmat qiladi — shaklini va rangini o'zgartirmaydi.",
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
      "Material va montaj sifatiga e'tibor",
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
      "G'uzor tumanida natijnoy patalok — toza, zamonaviy va arzon yechim. Birinchi marta bo'lsayam, ishonchli ish qilamiz.",
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
        q: "Material qancha xizmat qiladi?",
        a: "Sifatli sertifikatli material bo'lsa, to'g'ri o'rnatilgan natijnoy potolok yillar davomida xizmat qiladi. Qaysi brend qaysi xonaga to'g'ri kelishini biz tushuntirib beramiz.",
      },
    ],
    serviceArea: ["G'uzor shahar", "G'uzor tuman"],
  },
  {
    slug: "natijnoy-patolok-qamashi",
    name: "Qamashi",
    nameRu: "Камаши",
    shortName: "Qamashi",
    type: "tuman",
    href: "/natijnoy-patolok-qamashi",
    intro:
      "Qamashi tumanida natijnoy patalok o'rnatish — toza ishchilik va sifatli material. Yetib boramiz.",
    description:
      "Qamashi tumanida yangi qurilayotgan xonadonlar va ta'mirdan chiqqan uylar uchun natijnoy potolok xizmati. Matoviy va glyans matolar, LED yoritgich va zamonaviy dizayn variantlari mavjud. Tumanning markazi va atrofdagi qishloqlarga tez yetib boramiz.",
    localTouches: [
      "Qamashi markazi va qishloqlariga bir kunda chiqamiz",
      "Viloyat ichidagi transport bepul — ortiqcha xarajat yo'q",
      "Yangi qurilgan uy va eski binolarga mos montaj tajribasi",
      "Telegram bot orqali narxni oldindan bilib olish imkoni",
      "Qamashi tumanida toza va tez montaj — mebel ko'chirilmaydi",
    ],
    keywords: [
      "natijnoy patalok qamashi",
      "natijnoy potolok qamashi",
      "qamashi potolok ustasi",
      "натяжной потолок камаши",
      "qamashi natijnoy potolok narxi",
    ],
    faq: [
      {
        q: "Qamashi tumaniga chiqasizlarmi?",
        a: "Ha, Qamashi shahar va tumanning barcha qishloqlariga chiqamiz. Yetib borish va o'lchov olish bepul.",
      },
      {
        q: "Natijnoy potolok narxi Qamashida qanchaga tushadi?",
        a: "Narx xona maydoni va material turiga qarab hisoblanadi. Telegram botda xona o'lchamlarini yuborsangiz, daqiqa ichida dastlabki narxni ko'rasiz.",
      },
      {
        q: "Qamashida qanday materiallar bor?",
        a: "Matoviy, glyans, satin va LED yoritgichli variantlar mavjud. Yevropa va Turkiya brendlari — sertifikatli sifat.",
      },
      {
        q: "Material sifati qanday?",
        a: "Yevropa va Turkiya brendlari — sertifikatli sifat. Qaysi material qaysi xona uchun mos kelishini tushuntirib beramiz.",
      },
    ],
    serviceArea: ["Qamashi shahar", "Qamashi tuman"],
  },
  {
    slug: "natijnoy-patolok-muborak",
    name: "Muborak",
    nameRu: "Мубарек",
    shortName: "Muborak",
    type: "tuman",
    href: "/natijnoy-patolok-muborak",
    intro:
      "Muborak shahrida natijnoy patalok kerakmi? Jamoamiz yetib boradi — o'lchov, montaj va kafolat bir paketda.",
    description:
      "Muborak shahri va tumani bo'ylab natijnoy potolok o'rnatamiz. Sanoat shahri sifatida Muborakda ofis va uy-joy talabi katta. Matoviy oq potolok, glyans, LED yoritgichli va ko'p darajali konstruksiyalar — barchasi mavjud. Shift uchun natijnoy potolok eng toza va zamonaviy yechim.",
    localTouches: [
      "Muborak shahriga viloyat ichidan tez yetib boramiz",
      "Ofis va uy-joy uchun turli material variantlari",
      "Materiallarni o'zimiz olib kelamiz — mijozga qo'shimcha yuk yo'q",
      "Naqd va Click/Payme orqali to'lov qabul qilamiz",
      "Muborak bo'ylab o'lchovga chiqish mutlaqo bepul",
    ],
    keywords: [
      "natijnoy patalok muborak",
      "natijnoy potolok muborak",
      "muborak potolok ustasi",
      "натяжной потолок мубарек",
      "muborak natijnoy potolok narxi",
    ],
    faq: [
      {
        q: "Muborakka necha kunda chiqasizlar?",
        a: "Murojaat qilganingizdan 1-2 kun ichida o'lchovga chiqamiz. Shoshilinch holatlarda ertasi kunigayoq boramiz.",
      },
      {
        q: "Muborakda shift uchun natijnoy potolok qilasizlarmi?",
        a: "Ha, natijnoy potolok aynan shift uchun mo'ljallangan zamonaviy yechim. Eski shipni buzmasdan usti tarang mato bilan qoplanadi.",
      },
      {
        q: "Muborakda narx qancha?",
        a: "Narx m² hisobida, material turiga qarab. Telegram botda xona razmerini yuboring — tez narx aytamiz. Viloyat bo'ylab narx bir xil.",
      },
      {
        q: "Ofis uchun ham o'rnatasizlarmi?",
        a: "Albatta. Ofis, do'kon, kafe va boshqa tijorat ob'ektlari uchun ham ishlaymiz. Katta maydonda ham tajribamiz bor.",
      },
    ],
    serviceArea: ["Muborak shahar", "Muborak tuman"],
  },
  {
    slug: "natijnoy-patolok-nishon",
    name: "Nishon",
    nameRu: "Нишан",
    shortName: "Nishon",
    type: "tuman",
    href: "/natijnoy-patolok-nishon",
    intro:
      "Nishon tumanida natijnoy potolok o'rnatish xizmati — sifatli material va tajribali ustalar.",
    description:
      "Nishon tumani Qashqadaryoning janubiy qismida joylashgan. Jamoamiz Nishon markazi va atrofidagi qishloqlarga ham chiqadi. Uy-joy va hovlilarga matoviy, glyans va LED yoritgichli natijnoy patalok o'rnatamiz.",
    localTouches: [
      "Nishon markazi va qishloqlariga bepul yetib boramiz",
      "Hovli va xonadonlarga moslashgan montaj texnikasi",
      "Materiallar sertifikatli — Yevropa va Turkiya brendlari",
      "Telegramda narx so'rash va razmer yuborish mumkin",
      "Bitta xona 4-6 soatda, butun uy 1-2 kunda tayyor",
    ],
    keywords: [
      "natijnoy patalok nishon",
      "natijnoy potolok nishon",
      "nishon potolok ustasi",
      "натяжной потолок нишан",
    ],
    faq: [
      {
        q: "Nishon tumaniga ham xizmat qilasizmi?",
        a: "Ha, Nishon tumani Qashqadaryo viloyatining xizmat hududimizga kiradi. O'lchov va yetib borish bepul.",
      },
      {
        q: "Hovliga ham natijnoy potolok o'rnatiladimi?",
        a: "Ha, hovlidagi berkitilgan teras, ayvon va xonalarga ham o'rnatamiz. Ochiq joylarda namlikka chidamli material ishlatiladi.",
      },
      {
        q: "Nishondan Telegramda narx so'rash mumkinmi?",
        a: "Albatta. Telegram botga xona o'lchamlarini yuboring — bir daqiqada dastlabki narx chiqadi.",
      },
      {
        q: "Nishonda material sifati qanday?",
        a: "Barcha tumanlarda bir xil sifatli sertifikatli material bilan ishlaymiz — Yevropa va Turkiya brendlari.",
      },
    ],
    serviceArea: ["Nishon shahar", "Nishon tuman"],
  },
  {
    slug: "natijnoy-patolok-kasbi",
    name: "Kasbi",
    nameRu: "Касби",
    shortName: "Kasbi",
    type: "tuman",
    href: "/natijnoy-patolok-kasbi",
    intro:
      "Kasbi tumani uchun natijnoy potolok — zamonaviy uy va xonadonlarga toza, chiroyli va kafolatli yechim.",
    description:
      "Kasbi tumani bo'ylab natijnoy patalok xizmati. Yangi uy qurayotgan yoki remontga tayyorlanayotgan bo'lsangiz — toza montaj va kafolat bilan ishlaymiz. Matoviy, glyans va LED yoritgichli variantlar orasidan tanlang.",
    localTouches: [
      "Kasbi va atrofdagi qishloqlarga bir kunda chiqamiz",
      "Yangi qurilayotgan uylarga maxsus moslashgan montaj",
      "Materiallar viloyat omboridan — tez yetkazib berish",
      "Telegram bot orqali onlayn narx hisoblash mumkin",
    ],
    keywords: [
      "natijnoy patalok kasbi",
      "natijnoy potolok kasbi",
      "kasbi potolok ustasi",
      "натяжной потолок касби",
    ],
    faq: [
      {
        q: "Kasbi tumaniga borasizmi?",
        a: "Ha, Kasbi tumani bizning xizmat hududimizga kiradi. Viloyat bo'ylab yetib borish bepul.",
      },
      {
        q: "Kasbida natijnoy potolok narxi qancha?",
        a: "Narx viloyat bo'ylab bir xil — m² hisobida. Telegram botda razmer yuborsangiz, aniq narx tez chiqadi.",
      },
      {
        q: "Kichik xonaga ham o'rnatasizmi?",
        a: "Ha, oshxona, koridor yoki kichik yotoqxona uchun ham natijnoy potolok o'rnatamiz. Minimal cheklov yo'q.",
      },
      {
        q: "Kasbi bo'ylab qachon chiqish mumkin?",
        a: "Murojaat qilganingizdan 1-3 kun ichida o'lchovga chiqamiz. Telegram yoki telefon orqali kelishiladi.",
      },
    ],
    serviceArea: ["Kasbi shahar", "Kasbi tuman"],
  },
  {
    slug: "natijnoy-patolok-mirishkor",
    name: "Mirishkor",
    nameRu: "Миришкор",
    shortName: "Mirishkor",
    type: "tuman",
    href: "/natijnoy-patolok-mirishkor",
    intro:
      "Mirishkor tumani bo'ylab natijnoy patalok xizmati. Tajribali ustalar bilan sifatli va toza montaj.",
    description:
      "Mirishkor tumanidagi uy-joylar va ob'ektlar uchun natijnoy potolok o'rnatamiz. Tuman aholi soniga nisbatan kichik bo'lsa ham, sifatli uy-joy xizmati har bir oilaga kerak. Matoviy, glyans, LED yoritgichli va gulli variantlar mavjud.",
    localTouches: [
      "Mirishkor markazi va tuman qishloqlariga bepul chiqamiz",
      "Kichik va katta xonalar — barchasi uchun mos yechim",
      "Material olib kelish va montaj — barchasi biz tomondan",
      "Narxni oldindan Telegram botda bilish mumkin",
      "Ishdan keyin xona toza qoldiriladi",
    ],
    keywords: [
      "natijnoy patalok mirishkor",
      "natijnoy potolok mirishkor",
      "mirishkor potolok ustasi",
      "натяжной потолок миришкор",
    ],
    faq: [
      {
        q: "Mirishkor tumaniga ham chiqasizlarmi?",
        a: "Ha, Qashqadaryo viloyatining barcha tumanlariga, shu jumladan Mirishkorga ham chiqamiz.",
      },
      {
        q: "Mirishkorda o'lchov bepulmi?",
        a: "Ha, viloyat bo'ylab o'lchov xizmati bepul. Telefondan yoki Telegram botdan murojaat qilsangiz bo'ladi.",
      },
      {
        q: "LED yoritgichli potolok qilasizmi?",
        a: "Ha, nuqtali svetilniklar, LED lenta va kontur yoritgich o'rnatamiz. Zamonaviy dizayn variantlari bor.",
      },
      {
        q: "Mirishkorda narx qancha?",
        a: "Viloyat bo'ylab narx bir xil. M² va material turiga qarab. Telegram botda aniq hisob chiqadi.",
      },
    ],
    serviceArea: ["Mirishkor shahar", "Mirishkor tuman"],
  },
  {
    slug: "natijnoy-patolok-dehqonobod",
    name: "Dehqonobod",
    nameRu: "Дехканабад",
    shortName: "Dehqonobod",
    type: "tuman",
    href: "/natijnoy-patolok-dehqonobod",
    intro:
      "Dehqonobod tumanida ham natijnoy potolok o'rnatamiz — sifatli mato, toza montaj va kafolat bilan.",
    description:
      "Dehqonobod tumani Qashqadaryoning tog'li hududlaridan biri. Jamoamiz Dehqonobodga ham yetib boradi — uylar, hovlilar va yangi qurilayotgan binolar uchun natijnoy patalok xizmati. Tog'li iqlimga mos materiallar — namlik va harorat o'zgarishiga chidamli matolar ishlatamiz.",
    localTouches: [
      "Dehqonobod markazi va qishloqlariga chiqamiz",
      "Tog'li hududga mos namlikka chidamli materiallar",
      "Transport va material yetkazish bepul",
      "Toza ishchilik — ish tugagandan keyin xona tartibli",
      "Telegram bot orqali tez aloqa va narx hisoblash",
    ],
    keywords: [
      "natijnoy patalok dehqonobod",
      "natijnoy potolok dehqonobod",
      "dehqonobod potolok ustasi",
      "натяжной потолок дехканабад",
    ],
    faq: [
      {
        q: "Dehqonobodga chiqish mumkinmi?",
        a: "Ha, Dehqonobod bizning xizmat hududimiz. Viloyat bo'ylab yetib borish va o'lchov bepul.",
      },
      {
        q: "Tog'li hududda potolok yaxshi turadimi?",
        a: "Ha, sifatli natijnoy potolok harorat o'zgarishiga chidamli. Sovuq va issiqda shakli o'zgarmaydi — to'g'ri material tanlansa yillar davomida xizmat qiladi.",
      },
      {
        q: "Dehqonobodda narx Qarshidagidan farq qiladimi?",
        a: "Yo'q, viloyat bo'ylab narx bir xil. Material va montaj uchun qo'shimcha transport narxi olinmaydi.",
      },
      {
        q: "Dehqonobodda material bo'yicha tushuntirib berasizlarmi?",
        a: "Albatta. Tog'li iqlimga mos materiallar va ularning xususiyatlarini batafsil tushuntirib beramiz. Sertifikatli brendlar bilan ishlaymiz.",
      },
    ],
    serviceArea: ["Dehqonobod shahar", "Dehqonobod tuman"],
  },
];

export const allLocations: Location[] = [qashqadaryoOverview, ...locations];

export const getLocationBySlug = (slug: string): Location | undefined =>
  allLocations.find((loc) => loc.slug === slug);
