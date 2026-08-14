import { CTA_TARGET, FAILED_CREATIVE_COST, PRICE_ANNUAL, PRICE_MONTHLY, SEATS_TOTAL } from "../config/offer";

export const offer = {
  hero: {
    eyebrow: "نظام تشغيل الكرياتيف — لتجار الـE-commerce",
    headlineClauses: [
      "كيفاش تعرف بالضبط شنو تصوّر الأسبوع الجاي",
      "توقّف الكرياتيف الخاسر قبل ما يحرق ميزانيتك",
      "وتخلّي كل شهر يبني على اللي تعلّمتو في اللي قبلو"
    ],
    lead: "[[LEAD_PARAGRAPH]]",
    buttonTrial: "بلا بطاقة للتجربة"
  },
  badges: [
    "تفعيل في أقل من ساعة",
    "BaridiMob و CCP",
    "ضمان الدورة الأولى",
    "WhatsApp مباشر 90 يوم"
  ],
  problem: {
    title: "علاش هذا مهم دابا؟",
    p1: "[[PROBLEM_P1]]",
    p2: "[[PROBLEM_P2]]",
    p3: "[[PROBLEM_P3]]",
    box: "نموذج التخمين ما يتحسّنش. يتكرّر."
  },
  whatIsIt: {
    title: "شنو هو AdLoop؟",
    p1: "[[WHATISIT_P1]]",
    p2: "[[WHATISIT_P2]]",
    line1: "ماشي أفكار.",
    line2: "قرارات."
  },
  mechanism: {
    title: "كيفاش يخدم؟",
    steps: [
      { letter: "T", en: "Test one variable", ar: "[[STEP_1_AR]]", body: "[[STEP_1_BODY]]" },
      { letter: "E", en: "Evaluate against a threshold", ar: "[[STEP_2_AR]]", body: "[[STEP_2_BODY]]" },
      { letter: "S", en: "Store the learning", ar: "[[STEP_3_AR]]", body: "[[STEP_3_BODY]]" },
      { letter: "T", en: "Then multiply", ar: "[[STEP_4_AR]]", body: "[[STEP_4_BODY]]" }
    ]
  },
  bullets: {
    title: "وشنو دابا؟",
    items: [
      "[[BULLET_1]]",
      "[[BULLET_2]]",
      "[[BULLET_3]]",
      "[[BULLET_4]]",
      "[[BULLET_5]]",
      "[[BULLET_6]]",
      "[[BULLET_7]]",
      "[[BULLET_8]]",
      "[[BULLET_9]]",
      "[[BULLET_10]]",
      "[[BULLET_11]]"
    ]
  },
  deliverables: {
    title: "كي تدخل AdLoop اليوم، تاخذ:",
    items: [
      { title: "[[DELIVERABLE_1_TITLE]]", desc: "[[DELIVERABLE_1_DESC]]" },
      { title: "[[DELIVERABLE_2_TITLE]]", desc: "[[DELIVERABLE_2_DESC]]" },
      { title: "[[DELIVERABLE_3_TITLE]]", desc: "[[DELIVERABLE_3_DESC]]" },
      { title: "[[DELIVERABLE_4_TITLE]]", desc: "[[DELIVERABLE_4_DESC]]" },
      { title: "[[DELIVERABLE_5_TITLE]]", desc: "[[DELIVERABLE_5_DESC]]" },
      { title: "[[DELIVERABLE_6_TITLE]]", desc: "[[DELIVERABLE_6_DESC]]" },
      { title: "[[DELIVERABLE_7_TITLE]]", desc: "[[DELIVERABLE_7_DESC]]" },
      { title: "[[DELIVERABLE_8_TITLE]]", desc: "[[DELIVERABLE_8_DESC]]" },
      { title: "[[DELIVERABLE_9_TITLE]]", desc: "[[DELIVERABLE_9_DESC]]" }
    ]
  },
  bonuses: {
    title: "ومازال ما كمّلتش. كي تدخل كـFounding Member، تاخذ تاني 6 أشياء ما رايح نبيعهم منفصلين:",
    items: [
      { title: "[[BONUS_1_TITLE]]", body: "[[BONUS_1_BODY]]", value: "[[BONUS_VALUE_1]]" },
      { title: "[[BONUS_2_TITLE]]", body: "[[BONUS_2_BODY]]", value: "[[BONUS_VALUE_2]]" },
      { title: "[[BONUS_3_TITLE]]", body: "[[BONUS_3_BODY]]", value: "[[BONUS_VALUE_3]]" },
      { title: "[[BONUS_4_TITLE]]", body: "[[BONUS_4_BODY]]", value: "[[BONUS_VALUE_4]]" },
      { title: "[[BONUS_5_TITLE]]", body: "[[BONUS_5_BODY]]", value: "[[BONUS_VALUE_5]]" },
      { title: "[[BONUS_6_TITLE]]", body: "[[BONUS_6_BODY]]", value: "[[BONUS_VALUE_6]]" }
    ]
  },
  price: {
    badge: "15 مقعد فقط",
    title: "احبس مقعدك كـFounding Member",
    anchor: "السعر العادي: 59 000 دج / سنة",
    value: "14 900 دج / سنة",
    locked: "السعر مقفول عليك للأبد",
    payment: "BaridiMob · CCP · Chargily — التفعيل في أقل من ساعة",
    seats: "مقعد باقي من 15",
    button: "احبس مقعدك"
  },
  guarantee: {
    title: "ضمان الدورة الأولى",
    body: "دير دورة وحدة كاملة. إلا ما خرجتش بقرار تقدر تخدم بيه، تردّ فلوسك كاملة."
  },
  reviews: {
    title: "وهذي نتايج أخرى من تجار داخل AdLoop",
    items: [
      { name: "[[REVIEWER_1_NAME]]", initial: "A", date: "[[REVIEW_1_DATE]]", title: "[[REVIEW_1_TITLE]]", body: "[[REVIEW_1_BODY]]" },
      { name: "[[REVIEWER_2_NAME]]", initial: "B", date: "[[REVIEW_2_DATE]]", title: "[[REVIEW_2_TITLE]]", body: "[[REVIEW_2_BODY]]" },
      { name: "[[REVIEWER_3_NAME]]", initial: "C", date: "[[REVIEW_3_DATE]]", title: "[[REVIEW_3_TITLE]]", body: "[[REVIEW_3_BODY]]" }
    ]
  },
  objections: {
    title: "يمكن راك تتسائل…",
    items: [
      { q: "واش ما نقدرش ندير هاد الشي بـChatGPT وديرك؟", a: "[[OBJECTION_1_A]]" },
      { q: "[[OBJECTION_2_Q]]", a: "[[OBJECTION_2_A]]" },
      { q: "[[OBJECTION_3_Q]]", a: "[[OBJECTION_3_A]]" },
      { q: "[[OBJECTION_4_Q]]", a: "[[OBJECTION_4_A]]" },
      { q: "[[OBJECTION_5_Q]]", a: "[[OBJECTION_5_A]]" },
      { q: "[[OBJECTION_6_Q]]", a: "[[OBJECTION_6_A]]" },
      { q: "[[OBJECTION_7_Q]]", a: "[[OBJECTION_7_A]]" },
      { q: "[[OBJECTION_8_Q]]", a: "[[OBJECTION_8_A]]" },
      { q: "[[OBJECTION_9_Q]]", a: "[[OBJECTION_9_A]]" },
      { q: "[[OBJECTION_10_Q]]", a: "[[OBJECTION_10_A]]" }
    ]
  },
  founder: {
    title: "علاش درت هاد النظام",
    p1: "[[FOUNDER_P1]]",
    p2: "[[FOUNDER_P2]]",
    p3: "[[FOUNDER_P3]]"
  },
  finalCta: {
    line1: "الشهر الجاي رايح تصرف على إعلانات في كل الحالات.",
    line2: "السؤال الوحيد: واش رايح تتعلّم حاجة من الصرف هاد، ولا لا؟",
    button: "احبس مقعدك دابا"
  },
  trust: [
    "دعم مباشر",
    "تفعيل فوري",
    "ضمان الدورة"
  ],
  footer: {
    disclaimer1: "AdLoop أداة لتنظيم وتحليل اختبارات الكرياتيف. ما تضمنش مبيعات ولا أرباح.",
    disclaimer2: "ما عندنا حتى ارتباط بـMeta Platforms, Inc."
  },
  cta: {
    target: CTA_TARGET
  }
};
