export type Locale = "en" | "ar";

export const locales = ["en", "ar"] as const;

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie the chosen locale is persisted in, read by the root layout on the server. */
export const LOCALE_COOKIE = "lang";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ar";
}

/** English is the source of truth: its keys define the shape of every locale. */
const en = {
  "nav.work": "Work",
  "nav.skills": "Skills",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.cta": "Get in touch",
  "nav.menu": "Open menu",
  "nav.close": "Close menu",
  "nav.theme": "Toggle theme",
  "nav.language": "Switch language",
  "nav.resume": "Résumé",
  "nav.home": "Home",
  "nav.primary": "Main navigation",
  "nav.skip": "Skip to content",

  "meta.role": "Full-Stack Software Engineer",
  "meta.description":
    "Full-stack software engineer in Alexandria, Egypt. I build production-ready web apps with React, Next.js, Django and FastAPI.",

  "hero.badge": "Available for new work · Alexandria, Egypt",
  "hero.title1": "Full-Stack Engineer",
  "hero.title2": "Shipping Production Work",
  "hero.description":
    "Full-stack software engineer based in Alexandria, Egypt. Two years building React + Next.js front-ends and Django + FastAPI backends — and the AI plumbing in between.",
  "hero.cta.work": "View selected work",
  "hero.cta.contact": "Get in touch",
  "hero.cta.resume": "Download CV",

  "about.index": "01",
  "about.badge": "About",
  "about.title1": "The engineer",
  "about.title2": "behind the code.",
  "about.bio.1":
    "I'm Abdallah, a full-stack software engineer based in Alexandria, Egypt. I work across the stack — React and Next.js on the front, Django and FastAPI on the back — and I'm especially drawn to projects where AI shows up as a real product surface, not a demo.",
  "about.bio.2":
    "ITI graduate with 2+ years shipping production apps across marketplaces, SaaS dashboards, and e-learning platforms. I turn Figma designs into pixel-accurate, production-ready products. Currently at Mernan, previously at CSD Solutions.",
  "about.detail.currently.label": "Currently",
  "about.detail.currently.value": "Software Developer · Mernan",
  "about.detail.education.label": "Education",
  "about.detail.education.value": "ITI · Beni Suef University",
  "about.detail.location.label": "Based in",
  "about.detail.location.value": "Alexandria, Egypt",
  "about.detail.languages.label": "Languages",
  "about.detail.languages.value": "Arabic · English",
  "about.available": "Available",

  "work.index": "02",
  "work.badge": "Selected work",
  "work.title1": "Recent projects,",
  "work.title2": "shipped to production.",
  "work.visit": "Visit live site",
  "work.live": "Live",

  "projects.mernan.tag": "Marketplace · 2025",
  "projects.mernan.subtitle":
    "A professional services marketplace connecting providers with clients across Saudi Arabia — directory, profile management, provider-to-client matching, and a freelance CV generator with PDF export.",
  "projects.loops.tag": "Order Ops · 2026",
  "projects.loops.subtitle":
    "Unified cloud order-management platform — consolidates orders, inventory, and operations from delivery apps (Jahez, Amazon, Noon), POS systems, and marketplaces into a single dashboard. Real-time stock sync prevents overselling across channels.",
  "projects.elayka.tag": "EdTech · 2025",
  "projects.elayka.subtitle":
    "Arabic-first e-learning platform with 1,000+ courses, offline viewing, audio playback, and a B2B mode used by 250+ partner companies. Multi-app Django REST backend with JWT and S3, Next.js + Zustand frontend.",
  "projects.obsidian.tag": "Gaming · 2024",
  "projects.obsidian.subtitle":
    "Trusted RuneScape gold marketplace and botting services with secure payments and Google Sheets-driven inventory. React + Vite + Tailwind, end to end.",

  "skills.index": "03",
  "skills.badge": "Skills",
  "skills.title1": "The toolkit",
  "skills.title2": "I reach for.",
  "skills.group.frontend": "Frontend",
  "skills.group.backend": "Backend",
  "skills.group.data": "Data & Infra",
  "skills.group.ai": "AI & Glue",

  "exp.index": "04",
  "exp.badge": "Experience",
  "exp.title1": "Where I've",
  "exp.title2": "worked lately.",
  "exp.mernan.company": "Mernan",
  "exp.mernan.role": "Software Developer",
  "exp.mernan.period": "Dec 2025 — Present",
  "exp.mernan.location": "Remote",
  "exp.mernan.h1":
    "Shipping full-stack web apps with React on the front and Django REST APIs on the back.",
  "exp.mernan.h2":
    "Building reusable component systems and optimizing server-side logic for scale.",
  "exp.mernan.h3":
    "Investigating large codebases to deliver new features end-to-end.",
  "exp.csd.company": "CSD Solutions",
  "exp.csd.role": "Fullstack Developer",
  "exp.csd.period": "Jun 2025 — Dec 2025",
  "exp.csd.location": "Remote",
  "exp.csd.h1":
    "Production Next.js + FastAPI delivery, including request validation, typed API clients, and Stripe integration.",
  "exp.csd.h2":
    "Designed SQL schemas and wired frontends to backends and third-party APIs.",
  "exp.iti.company": "Information Technology Institute (ITI)",
  "exp.iti.role": "Intensive Code Camp — Full-Stack Web Dev (Python)",
  "exp.iti.period": "Mar 2025 — Sep 2025",
  "exp.iti.location": "Alexandria, Egypt",
  "exp.iti.h1":
    "4-month intensive program in Python, Django, Flask, and React.",
  "exp.iti.h2":
    "Hands-on with API integration, SQL, and deployment workflows.",

  "contact.index": "05",
  "contact.badge": "Contact",
  "contact.title1": "Got something",
  "contact.title2": "to build?",
  "contact.description":
    "I'm open to freelance and full-time roles where I can ship end-to-end. Drop a few sentences about what you're building and I'll reply within a day or two.",
  "contact.phone.label": "Phone",
  "contact.location.label": "Location",

  "footer.built": "Built with Next.js, Tailwind, and Motion.",

  "footer.rights": "All rights reserved.",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy policy",
  "footer.terms": "Terms and conditions",
  "footer.back": "Back to the site",

  "legal.updated": "Last updated 13 September 2026",

  "privacy.title": "Privacy policy",
  "privacy.intro":
    "This is a personal portfolio. It has no accounts, no sign-up forms, no advertising and no analytics or tracking scripts.",
  "privacy.stored.title": "What is stored in your browser",
  "privacy.stored.body":
    "Two preferences are kept on your device so the site renders the way you left it: the language you pick (a cookie named lang) and the light or dark theme you pick (a value in local storage). Neither is sent anywhere, and neither identifies you. Clearing your browser data removes both.",
  "privacy.hosting.title": "Hosting",
  "privacy.hosting.body":
    "The site is hosted on Vercel. Like any web host, Vercel records standard request logs, which can include your IP address, browser user agent and the page requested. Those logs exist to serve the site and protect it from abuse, and they are governed by Vercel's own privacy notice.",
  "privacy.contact.title": "If you contact me",
  "privacy.contact.body":
    "When you email or call, I receive whatever you choose to send: your address or number, your name and your message. I use it only to reply and to discuss the work. I do not sell it, add it to a mailing list, or pass it to anyone else.",
  "privacy.links.title": "Links to other sites",
  "privacy.links.body":
    "Project cards link to live third-party websites. Once you follow one of those links you are on someone else's site, under their privacy policy, not this one.",
  "privacy.rights.title": "Your choices",
  "privacy.rights.body":
    "You can browse the whole site with cookies blocked. You can ask me to delete our correspondence at any time by writing to the address below, and I will confirm once it is done.",

  "terms.title": "Terms and conditions",
  "terms.intro":
    "These terms cover your use of this website. Using the site means you accept them.",
  "terms.use.title": "Using the site",
  "terms.use.body":
    "This is a personal portfolio published to describe my work and make it easy to reach me. You are welcome to read it and share links to it. Do not attempt to disrupt the site, scrape it at a volume that degrades it for others, or use it to distribute anything unlawful.",
  "terms.content.title": "Content and ownership",
  "terms.content.body":
    "The writing, layout and code of this site are mine. Client names, logos and product screenshots remain the property of their owners and appear here only to describe work I contributed to. Do not republish any of it as your own or reuse it commercially without written permission.",
  "terms.accuracy.title": "Accuracy and availability",
  "terms.accuracy.body":
    "The site is published as is. I keep it accurate and current to the best of my knowledge, but I do not guarantee that every detail is free of error or that the site is always reachable. Nothing here is a contractual offer or professional advice.",
  "terms.links.title": "External links",
  "terms.links.body":
    "Links to client projects and third-party platforms are provided for reference. I do not control those sites and am not responsible for their content, availability or practices.",
  "terms.law.title": "Changes and governing law",
  "terms.law.body":
    "I may update these terms as the site changes, and the date above will show when that last happened. These terms are governed by the laws of the Arab Republic of Egypt. Questions go to the email address below.",
} as const;

export type MessageKey = keyof typeof en;

/** Typed as a full record, so a missing Arabic string is a build error. */
const ar: Record<MessageKey, string> = {
  "nav.work": "الأعمال",
  "nav.skills": "المهارات",
  "nav.about": "نبذة",
  "nav.contact": "تواصل",
  "nav.cta": "تواصل معي",
  "nav.menu": "فتح القائمة",
  "nav.close": "إغلاق القائمة",
  "nav.theme": "تبديل المظهر",
  "nav.language": "تبديل اللغة",
  "nav.resume": "السيرة الذاتية",
  "nav.home": "الرئيسية",
  "nav.primary": "التنقل الرئيسي",
  "nav.skip": "تخطٍّ إلى المحتوى",

  "meta.role": "مهندس برمجيات فول-ستاك",
  "meta.description":
    "مهندس برمجيات فول-ستاك في الإسكندرية، مصر. أبني تطبيقات ويب جاهزة للإنتاج باستخدام React و Next.js و Django و FastAPI.",

  "hero.badge": "متاح لمشاريع جديدة · الإسكندرية، مصر",
  "hero.title1": "مطوّر فول-ستاك",
  "hero.title2": "أُنفّذ مشاريع جاهزة للإنتاج",
  "hero.description":
    "مطوّر برمجيات فول-ستاك مقيم في الإسكندرية، مصر. خبرة عامين في بناء واجهات React و Next.js وخوادم Django و FastAPI — مع كل ما بينهما من تكامل للذكاء الاصطناعي.",
  "hero.cta.work": "تصفّح الأعمال",
  "hero.cta.contact": "تواصل معي",
  "hero.cta.resume": "تحميل السيرة الذاتية",

  "about.index": "٠١",
  "about.badge": "نبذة",
  "about.title1": "المهندس",
  "about.title2": "خلف الكود.",
  "about.bio.1":
    "أنا عبدالله، مطوّر برمجيات فول-ستاك مقيم في الإسكندرية، مصر. أعمل على كامل التكنولوجيا — React و Next.js للواجهات، و Django و FastAPI للخوادم — وأهتم بشكل خاص بالمشاريع التي يظهر فيها الذكاء الاصطناعي كميزة فعلية في المنتج، لا كعرض توضيحي.",
  "about.bio.2":
    "خرّيج معهد تكنولوجيا المعلومات (ITI) بخبرة عامين في تنفيذ تطبيقات إنتاج عبر منصات السوق ولوحات تحكم SaaS ومنصات التعلم الإلكتروني. أحوّل تصاميم Figma إلى منتجات مطابقة للتصميم وجاهزة للإنتاج. أعمل حاليًا في مرنان، وسابقًا في CSD Solutions.",
  "about.detail.currently.label": "حاليًا",
  "about.detail.currently.value": "مطوّر برمجيات · مرنان",
  "about.detail.education.label": "التعليم",
  "about.detail.education.value": "معهد ITI · جامعة بني سويف",
  "about.detail.location.label": "المقر",
  "about.detail.location.value": "الإسكندرية، مصر",
  "about.detail.languages.label": "اللغات",
  "about.detail.languages.value": "العربية · الإنجليزية",
  "about.available": "متاح",

  "work.index": "٠٢",
  "work.badge": "أعمال مختارة",
  "work.title1": "مشاريع حديثة،",
  "work.title2": "جاهزة للإنتاج.",
  "work.visit": "افتح الموقع المباشر",
  "work.live": "مباشر",

  "projects.mernan.tag": "منصة سوق · ٢٠٢٥",
  "projects.mernan.subtitle":
    "منصة سوق للخدمات الاحترافية تربط مزوّدي الخدمات بالعملاء في المملكة العربية السعودية — دليل، إدارة ملفات، مطابقة طلبات، ومولّد سيرة ذاتية للمستقلين بتصدير PDF.",
  "projects.loops.tag": "إدارة طلبات · ٢٠٢٦",
  "projects.loops.subtitle":
    "منصة سحابية موحّدة لإدارة الطلبات — تجمع الطلبات والمخزون والعمليات من تطبيقات التوصيل (جاهز، أمازون، نون) وأنظمة نقاط البيع والأسواق في لوحة تحكم واحدة. مزامنة مخزون لحظية تمنع البيع الزائد عبر القنوات.",
  "projects.elayka.tag": "تعليم رقمي · ٢٠٢٥",
  "projects.elayka.subtitle":
    "منصة تعليم إلكتروني تعمل باللغة العربية بأكثر من ١٬٠٠٠ دورة، مشاهدة بدون اتصال، وضع صوتي، ووضع شركات يستخدمه أكثر من ٢٥٠ شريكًا. خادم Django REST بمصادقة JWT وتخزين S3، وواجهة Next.js + Zustand.",
  "projects.obsidian.tag": "ألعاب · ٢٠٢٤",
  "projects.obsidian.subtitle":
    "منصة موثوقة لبيع وشراء عملة RuneScape مع خدمات بوت ومدفوعات آمنة وتكامل Google Sheets للمخزون. مبنية بالكامل بـ React و Vite و Tailwind.",

  "skills.index": "٠٣",
  "skills.badge": "المهارات",
  "skills.title1": "الأدوات",
  "skills.title2": "التي أعمل بها.",
  "skills.group.frontend": "واجهات",
  "skills.group.backend": "خوادم",
  "skills.group.data": "بيانات وبنية",
  "skills.group.ai": "ذكاء وتكامل",

  "exp.index": "٠٤",
  "exp.badge": "الخبرة",
  "exp.title1": "حيث",
  "exp.title2": "عملت مؤخرًا.",
  "exp.mernan.company": "مرنان",
  "exp.mernan.role": "مطوّر برمجيات",
  "exp.mernan.period": "ديسمبر ٢٠٢٥ — حتى الآن",
  "exp.mernan.location": "عن بُعد",
  "exp.mernan.h1":
    "تطوير تطبيقات ويب فول-ستاك بواجهة React وخادم Django REST API.",
  "exp.mernan.h2":
    "بناء أنظمة مكوّنات قابلة لإعادة الاستخدام وتحسين منطق الخادم للتوسع.",
  "exp.mernan.h3":
    "تحليل قواعد أكواد كبيرة لإضافة مزايا جديدة من البداية إلى النهاية.",
  "exp.csd.company": "CSD Solutions",
  "exp.csd.role": "مطوّر فول-ستاك",
  "exp.csd.period": "يونيو — ديسمبر ٢٠٢٥",
  "exp.csd.location": "عن بُعد",
  "exp.csd.h1":
    "تسليم Next.js + FastAPI لمنتجات إنتاج تتضمّن تحقق الطلبات، عملاء API بأنواع TypeScript، وتكامل Stripe.",
  "exp.csd.h2":
    "تصميم مخططات SQL وربط الواجهات بالخوادم وواجهات الطرف الثالث.",
  "exp.iti.company": "معهد تكنولوجيا المعلومات (ITI)",
  "exp.iti.role": "كامب تطوير الويب — فول-ستاك بايثون",
  "exp.iti.period": "مارس — سبتمبر ٢٠٢٥",
  "exp.iti.location": "الإسكندرية، مصر",
  "exp.iti.h1":
    "برنامج مكثّف لمدة ٤ أشهر في بايثون، Django، Flask، وReact.",
  "exp.iti.h2":
    "تطبيق عملي على تكامل واجهات API، قواعد بيانات SQL، وعمليات النشر.",

  "contact.index": "٠٥",
  "contact.badge": "تواصل",
  "contact.title1": "لديك مشروع",
  "contact.title2": "تودّ بناءه؟",
  "contact.description":
    "متاح لأعمال حرّة ووظائف بدوام كامل أُسلّم فيها مشاريع متكاملة من البداية إلى الإنتاج. أرسل لي جملًا قليلة عمّا تبنيه وسأردّ خلال يوم أو يومين.",
  "contact.phone.label": "هاتف",
  "contact.location.label": "الموقع",

  "footer.built": "بُني باستخدام Next.js و Tailwind و Motion.",

  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.legal": "روابط قانونية",
  "footer.privacy": "سياسة الخصوصية",
  "footer.terms": "الشروط والأحكام",
  "footer.back": "العودة إلى الموقع",

  "legal.updated": "آخر تحديث ١٣ سبتمبر ٢٠٢٦",

  "privacy.title": "سياسة الخصوصية",
  "privacy.intro":
    "هذا موقع شخصي لعرض الأعمال. لا يحتوي على حسابات ولا نماذج تسجيل ولا إعلانات ولا أدوات تحليلات أو تتبّع.",
  "privacy.stored.title": "ما يُحفظ في متصفحك",
  "privacy.stored.body":
    "يُحفظ تفضيلان على جهازك ليظهر الموقع كما تركته: اللغة التي تختارها (كوكي باسم lang) والمظهر الفاتح أو الداكن (قيمة في التخزين المحلي). لا يُرسل أي منهما إلى أي جهة ولا يعرّف بهويتك، ومسح بيانات المتصفح يزيلهما.",
  "privacy.hosting.title": "الاستضافة",
  "privacy.hosting.body":
    "الموقع مستضاف على Vercel. كأي مزوّد استضافة، تسجّل Vercel سجلات الطلبات المعتادة التي قد تتضمن عنوان IP ونوع المتصفح والصفحة المطلوبة. تُستخدم هذه السجلات لتشغيل الموقع وحمايته من الإساءة، وتخضع لسياسة خصوصية Vercel.",
  "privacy.contact.title": "عند التواصل معي",
  "privacy.contact.body":
    "عندما تراسلني بالبريد أو تتصل، أستقبل ما ترسله: عنوانك أو رقمك واسمك ورسالتك. أستخدم ذلك للردّ ومناقشة العمل فقط. لا أبيع هذه البيانات ولا أضيفها إلى قوائم بريدية ولا أشاركها مع أحد.",
  "privacy.links.title": "روابط المواقع الأخرى",
  "privacy.links.body":
    "تحتوي بطاقات المشاريع على روابط لمواقع خارجية. بمجرد فتح أحدها تصبح على موقع جهة أخرى تخضع لسياسة الخصوصية الخاصة بها لا لهذه السياسة.",
  "privacy.rights.title": "خياراتك",
  "privacy.rights.body":
    "يمكنك تصفّح الموقع بالكامل مع تعطيل الكوكيز. ويمكنك أن تطلب مني حذف مراسلاتنا في أي وقت عبر البريد أدناه، وسأؤكد لك ذلك بعد تنفيذه.",

  "terms.title": "الشروط والأحكام",
  "terms.intro":
    "تنظّم هذه الشروط استخدامك لهذا الموقع، واستخدامك له يعني قبولك بها.",
  "terms.use.title": "استخدام الموقع",
  "terms.use.body":
    "هذا موقع شخصي لعرض أعمالي وتسهيل التواصل معي. يمكنك تصفّحه ومشاركة روابطه بحرية. يُرجى عدم تعطيل الموقع أو سحب بياناته بكثافة تضرّ بالآخرين أو استخدامه في نشر أي محتوى مخالف للقانون.",
  "terms.content.title": "المحتوى والملكية",
  "terms.content.body":
    "نصوص الموقع وتصميمه وكوده ملك لي. أما أسماء العملاء وشعاراتهم ولقطات منتجاتهم فتبقى ملكًا لأصحابها وتظهر هنا فقط لوصف أعمال شاركت فيها. يُرجى عدم إعادة نشر أي منها بوصفها عملك أو استخدامها تجاريًا دون إذن كتابي.",
  "terms.accuracy.title": "الدقة والإتاحة",
  "terms.accuracy.body":
    "يُنشر الموقع كما هو. أحرص على تحديث محتواه ودقّته قدر المستطاع، لكنني لا أضمن خلوّه من الأخطاء ولا إتاحته دون انقطاع. ولا يُعدّ أي محتوى فيه عرضًا تعاقديًا أو استشارة مهنية.",
  "terms.links.title": "الروابط الخارجية",
  "terms.links.body":
    "روابط مشاريع العملاء والمنصات الخارجية مذكورة للاطلاع فقط. لا أتحكم في تلك المواقع ولست مسؤولًا عن محتواها أو إتاحتها أو ممارساتها.",
  "terms.law.title": "التعديلات والقانون المطبّق",
  "terms.law.body":
    "قد أُحدّث هذه الشروط مع تطوّر الموقع، ويوضّح التاريخ أعلاه آخر تحديث. تخضع هذه الشروط لقوانين جمهورية مصر العربية. وللاستفسارات يرجى المراسلة على البريد أدناه.",
};

export const messages: Record<Locale, Record<MessageKey, string>> = { en, ar };
