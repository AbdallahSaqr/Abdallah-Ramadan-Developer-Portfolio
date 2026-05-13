export type Locale = "en" | "ar";

export const locales: readonly Locale[] = ["en", "ar"] as const;

type Dict = Record<string, string>;

export const messages: Record<Locale, Dict> = {
  en: {
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "nav.menu": "Open menu",
    "nav.close": "Close menu",
    "nav.theme": "Toggle theme",
    "nav.language": "Switch language",

    "hero.badge": "Available for new work · Alexandria, Egypt",
    "hero.title1": "Full-Stack Engineer",
    "hero.title2": "Shipping Production Work",
    "hero.description":
      "Full-stack software engineer based in Alexandria, Egypt. Two years building React + Next.js front-ends and Django + FastAPI backends — and the AI plumbing in between.",
    "hero.cta.work": "View selected work",
    "hero.cta.contact": "Get in touch",

    "about.index": "01",
    "about.badge": "About",
    "about.title1": "The engineer",
    "about.title2": "behind the code.",
    "about.bio.1":
      "I'm Abdallah, a full-stack software engineer based in Alexandria, Egypt. I work across the stack — React and Next.js on the front, Django and FastAPI on the back — and I'm especially drawn to projects where AI shows up as a real product surface, not a demo.",
    "about.bio.2":
      "ITI graduate with 2+ years shipping production apps across marketplaces, SaaS dashboards, and e-learning platforms. Currently at Mernan, previously at CSD Solutions.",
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
  },

  ar: {
    "nav.work": "الأعمال",
    "nav.skills": "المهارات",
    "nav.about": "نبذة",
    "nav.contact": "تواصل",
    "nav.cta": "تواصل معي",
    "nav.menu": "فتح القائمة",
    "nav.close": "إغلاق القائمة",
    "nav.theme": "تبديل المظهر",
    "nav.language": "تبديل اللغة",

    "hero.badge": "متاح لمشاريع جديدة · الإسكندرية، مصر",
    "hero.title1": "مطوّر فول-ستاك",
    "hero.title2": "أُنفّذ مشاريع جاهزة للإنتاج",
    "hero.description":
      "مطوّر برمجيات فول-ستاك مقيم في الإسكندرية، مصر. خبرة عامين في بناء واجهات React و Next.js وخوادم Django و FastAPI — مع كل ما بينهما من تكامل للذكاء الاصطناعي.",
    "hero.cta.work": "تصفّح الأعمال",
    "hero.cta.contact": "تواصل معي",

    "about.index": "٠١",
    "about.badge": "نبذة",
    "about.title1": "المهندس",
    "about.title2": "خلف الكود.",
    "about.bio.1":
      "أنا عبدالله، مطوّر برمجيات فول-ستاك مقيم في الإسكندرية، مصر. أعمل على كامل التكنولوجيا — React و Next.js للواجهات، و Django و FastAPI للخوادم — وأهتم بشكل خاص بالمشاريع التي يظهر فيها الذكاء الاصطناعي كميزة فعلية في المنتج، لا كعرض توضيحي.",
    "about.bio.2":
      "خرّيج معهد تكنولوجيا المعلومات (ITI) بخبرة عامين في تنفيذ تطبيقات إنتاج عبر منصات السوق ولوحات تحكم SaaS ومنصات التعلم الإلكتروني. أعمل حاليًا في مرنان، وسابقًا في CSD Solutions.",
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
  },
};
