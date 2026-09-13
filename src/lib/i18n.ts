export type Locale = "en" | "ar";

export const locales = ["en", "ar"] as const;

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie the chosen locale is persisted in, read by the proxy on the server. */
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
    "Full-stack software engineer in Alexandria, Egypt. I build production web apps with React, Next.js, Django and FastAPI.",

  "site.name": "Abdallah Ramadan",

  "hero.status": "Available for new work",
  "hero.role": "Full-stack software engineer",
  "hero.lead":
    "Two years building production web apps with React, Next.js, Django and FastAPI: a professional services marketplace in Saudi Arabia, an order platform that keeps stock in sync across delivery apps, and an Arabic e-learning platform carrying more than 1,000 courses.",
  "hero.cta.work": "View selected work",
  "hero.cta.contact": "Email me",
  "hero.cta.resume": "Download CV",

  "about.index": "01",
  "about.badge": "About",
  "about.title": "Full-stack, from database schema to interface.",
  "about.bio.1":
    "I am Abdallah, a full-stack software engineer based in Alexandria, Egypt. I work across the stack: React and Next.js on the front, Django and FastAPI on the back. The projects I enjoy most are the ones where AI shows up as a real product surface rather than a demo.",
  "about.bio.2":
    "ITI graduate with two years shipping production apps across marketplaces, SaaS dashboards and e-learning platforms. I turn Figma designs into pixel-accurate, production-ready interfaces. Currently at Mernan, previously at CSD Solutions.",
  "about.detail.currently.label": "Currently",
  "about.detail.currently.value": "Software Developer, Mernan",
  "about.detail.education.label": "Education",
  "about.detail.education.value": "ITI, Beni Suef University",
  "about.detail.location.label": "Based in",
  "about.detail.location.value": "Alexandria, Egypt",
  "about.detail.languages.label": "Languages",
  "about.detail.languages.value": "Arabic, English",
  "about.available": "Available for new work",

  "work.index": "02",
  "work.badge": "Selected work",
  "work.title": "Four products running in production.",
  "work.visit": "Visit live site",

  "projects.mernan.tag": "Marketplace, 2025",
  "projects.mernan.subtitle":
    "A professional services marketplace connecting providers with clients across Saudi Arabia: directory, profile management, provider-to-client matching, and a freelance CV generator with PDF export.",
  "projects.loops.tag": "Order operations, 2026",
  "projects.loops.subtitle":
    "Cloud order-management platform that consolidates orders, inventory and operations from delivery apps (Jahez, Amazon, Noon), POS systems and marketplaces into one dashboard. Real-time stock sync prevents overselling across channels.",
  "projects.elayka.tag": "EdTech, 2025",
  "projects.elayka.subtitle":
    "Arabic-first e-learning platform with more than 1,000 courses, offline viewing, audio playback, and a B2B mode used by over 250 partner companies. Multi-app Django REST backend with JWT and S3, Next.js and Zustand on the front.",
  "projects.obsidian.tag": "Gaming, 2024",
  "projects.obsidian.subtitle":
    "RuneScape gold marketplace and botting services with secure payments and Google Sheets-driven inventory. Built end to end with React, Vite and Tailwind.",

  "skills.index": "03",
  "skills.badge": "Skills",
  "skills.title": "The tools I reach for daily.",
  "skills.group.frontend": "Frontend",
  "skills.group.backend": "Backend",
  "skills.group.data": "Data and infrastructure",
  "skills.group.ai": "AI and integrations",

  "exp.index": "04",
  "exp.badge": "Experience",
  "exp.title": "Where I have worked.",
  "exp.mernan.company": "Mernan",
  "exp.mernan.role": "Software Developer",
  "exp.mernan.period": "Dec 2025 to present",
  "exp.mernan.location": "Remote",
  "exp.mernan.h1":
    "Shipping full-stack web apps with React on the front and Django REST APIs on the back.",
  "exp.mernan.h2":
    "Building reusable component systems and optimising server-side logic for scale.",
  "exp.mernan.h3":
    "Investigating large codebases to deliver new features end to end.",
  "exp.csd.company": "CSD Solutions",
  "exp.csd.role": "Fullstack Developer",
  "exp.csd.period": "Jun 2025 to Dec 2025",
  "exp.csd.location": "Remote",
  "exp.csd.h1":
    "Production Next.js and FastAPI delivery, including request validation, typed API clients and Stripe integration.",
  "exp.csd.h2":
    "Designed SQL schemas and wired frontends to backends and third-party APIs.",
  "exp.iti.company": "Information Technology Institute (ITI)",
  "exp.iti.role": "Intensive Code Camp, Full-Stack Web Development (Python)",
  "exp.iti.period": "Mar 2025 to Sep 2025",
  "exp.iti.location": "Alexandria, Egypt",
  "exp.iti.h1":
    "Four-month intensive programme in Python, Django, Flask and React.",
  "exp.iti.h2":
    "Hands-on work with API integration, SQL and deployment workflows.",

  "contact.index": "05",
  "contact.badge": "Contact",
  "contact.title": "Tell me what you are building.",
  "contact.description":
    "I am open to freelance and full-time roles where I can ship end to end. Send a few sentences about the project and I will reply within a day or two.",
  "contact.phone.label": "Phone",
  "contact.location.label": "Location",
  "contact.elsewhere.label": "Elsewhere",

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

  "site.name": "عبدالله رمضان",

  "hero.status": "متاح لمشاريع جديدة",
  "hero.role": "مهندس برمجيات فول-ستاك",
  "hero.lead":
    "عامان في بناء تطبيقات ويب إنتاجية باستخدام React و Next.js و Django و FastAPI: منصة سوق للخدمات الاحترافية في السعودية، ومنصة طلبات تحافظ على تزامن المخزون بين تطبيقات التوصيل، ومنصة تعليم إلكتروني عربية تضم أكثر من ١٬٠٠٠ دورة.",
  "hero.cta.work": "تصفّح الأعمال",
  "hero.cta.contact": "راسلني",
  "hero.cta.resume": "تحميل السيرة الذاتية",

  "about.index": "٠١",
  "about.badge": "نبذة",
  "about.title": "فول-ستاك، من قاعدة البيانات إلى الواجهة.",
  "about.bio.1":
    "أنا عبدالله، مهندس برمجيات فول-ستاك مقيم في الإسكندرية، مصر. أعمل على كامل التكنولوجيا: React و Next.js للواجهات، و Django و FastAPI للخوادم. أكثر ما يشدّني هي المشاريع التي يظهر فيها الذكاء الاصطناعي كميزة فعلية في المنتج لا كعرض توضيحي.",
  "about.bio.2":
    "خرّيج معهد تكنولوجيا المعلومات (ITI) بخبرة عامين في تنفيذ تطبيقات إنتاج عبر منصات السوق ولوحات تحكم SaaS ومنصات التعلم الإلكتروني. أحوّل تصاميم Figma إلى واجهات مطابقة للتصميم وجاهزة للإنتاج. أعمل حاليًا في مرنان، وسابقًا في CSD Solutions.",
  "about.detail.currently.label": "حاليًا",
  "about.detail.currently.value": "مطوّر برمجيات، مرنان",
  "about.detail.education.label": "التعليم",
  "about.detail.education.value": "معهد ITI، جامعة بني سويف",
  "about.detail.location.label": "المقر",
  "about.detail.location.value": "الإسكندرية، مصر",
  "about.detail.languages.label": "اللغات",
  "about.detail.languages.value": "العربية، الإنجليزية",
  "about.available": "متاح لمشاريع جديدة",

  "work.index": "٠٢",
  "work.badge": "أعمال مختارة",
  "work.title": "أربعة منتجات تعمل في الإنتاج.",
  "work.visit": "افتح الموقع المباشر",

  "projects.mernan.tag": "منصة سوق، ٢٠٢٥",
  "projects.mernan.subtitle":
    "منصة سوق للخدمات الاحترافية تربط مزوّدي الخدمات بالعملاء في المملكة العربية السعودية: دليل، إدارة ملفات، مطابقة طلبات، ومولّد سيرة ذاتية للمستقلين بتصدير PDF.",
  "projects.loops.tag": "إدارة طلبات، ٢٠٢٦",
  "projects.loops.subtitle":
    "منصة سحابية لإدارة الطلبات تجمع الطلبات والمخزون والعمليات من تطبيقات التوصيل (جاهز، أمازون، نون) وأنظمة نقاط البيع والأسواق في لوحة تحكم واحدة. مزامنة مخزون لحظية تمنع البيع الزائد عبر القنوات.",
  "projects.elayka.tag": "تعليم رقمي، ٢٠٢٥",
  "projects.elayka.subtitle":
    "منصة تعليم إلكتروني عربية تضم أكثر من ١٬٠٠٠ دورة، مع مشاهدة بدون اتصال ووضع صوتي ووضع شركات يستخدمه أكثر من ٢٥٠ شريكًا. خادم Django REST متعدد التطبيقات بمصادقة JWT وتخزين S3، وواجهة Next.js و Zustand.",
  "projects.obsidian.tag": "ألعاب، ٢٠٢٤",
  "projects.obsidian.subtitle":
    "منصة لبيع وشراء عملة RuneScape مع خدمات بوت ومدفوعات آمنة وتكامل Google Sheets للمخزون. مبنية بالكامل بـ React و Vite و Tailwind.",

  "skills.index": "٠٣",
  "skills.badge": "المهارات",
  "skills.title": "الأدوات التي أستخدمها يوميًا.",
  "skills.group.frontend": "الواجهات",
  "skills.group.backend": "الخوادم",
  "skills.group.data": "البيانات والبنية التحتية",
  "skills.group.ai": "الذكاء الاصطناعي والتكاملات",

  "exp.index": "٠٤",
  "exp.badge": "الخبرة",
  "exp.title": "أين عملت.",
  "exp.mernan.company": "مرنان",
  "exp.mernan.role": "مطوّر برمجيات",
  "exp.mernan.period": "ديسمبر ٢٠٢٥ حتى الآن",
  "exp.mernan.location": "عن بُعد",
  "exp.mernan.h1":
    "تطوير تطبيقات ويب فول-ستاك بواجهة React وخادم Django REST API.",
  "exp.mernan.h2":
    "بناء أنظمة مكوّنات قابلة لإعادة الاستخدام وتحسين منطق الخادم للتوسع.",
  "exp.mernan.h3":
    "تحليل قواعد أكواد كبيرة لإضافة مزايا جديدة من البداية إلى النهاية.",
  "exp.csd.company": "CSD Solutions",
  "exp.csd.role": "مطوّر فول-ستاك",
  "exp.csd.period": "يونيو ٢٠٢٥ حتى ديسمبر ٢٠٢٥",
  "exp.csd.location": "عن بُعد",
  "exp.csd.h1":
    "تسليم منتجات إنتاج بـ Next.js و FastAPI تتضمّن تحقق الطلبات وعملاء API بأنواع محددة وتكامل Stripe.",
  "exp.csd.h2":
    "تصميم مخططات SQL وربط الواجهات بالخوادم وواجهات الطرف الثالث.",
  "exp.iti.company": "معهد تكنولوجيا المعلومات (ITI)",
  "exp.iti.role": "كامب تطوير الويب المكثّف، فول-ستاك بايثون",
  "exp.iti.period": "مارس ٢٠٢٥ حتى سبتمبر ٢٠٢٥",
  "exp.iti.location": "الإسكندرية، مصر",
  "exp.iti.h1": "برنامج مكثّف لمدة أربعة أشهر في بايثون و Django و Flask و React.",
  "exp.iti.h2": "تطبيق عملي على تكامل واجهات API وقواعد بيانات SQL وعمليات النشر.",

  "contact.index": "٠٥",
  "contact.badge": "تواصل",
  "contact.title": "أخبرني بما تبنيه.",
  "contact.description":
    "متاح لأعمال حرّة ووظائف بدوام كامل أُسلّم فيها مشاريع متكاملة من البداية إلى الإنتاج. أرسل لي جملًا قليلة عن المشروع وسأردّ خلال يوم أو يومين.",
  "contact.phone.label": "هاتف",
  "contact.location.label": "الموقع",
  "contact.elsewhere.label": "روابط أخرى",

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
