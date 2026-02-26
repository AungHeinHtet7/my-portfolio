export const portfolioData = {
  personalInfo: {
    name: "Aung Hein Htet",
    title: "Flutter Developer",
    email: "aungheinhtet.me@gmail.com",
    phone: "092201935",
    address: "No.62, 4th Fl, 9 Qta, Insein Road, Hlaing Township, Yangon",
    linkedin: "https://www.linkedin.com/in/aung-hein-htet-605233254/",
    github: "https://github.com/AungHeinHtet7",
  },
  summary:
    "Flutter Developer with experience building cross-platform apps across e-commerce and ERP domains. Proficient in Dart and mobile app architecture (MVVM, Clean Architecture), with a strong focus on performance, scalability, and elegant UI/UX. I’m eager to contribute technical expertise and a growth mindset to innovative, large-scale mobile projects that solve real-world challenges.",
  experience: [
    {
      company: "Myanmar Information Technology PTE,Ltd",
      role: "Flutter Developer",
      period: "MAY 2024 - PRESENT",
      responsibilities: [
        "Develop and maintain high-quality mobile applications using Flutter, focusing on modular code and optimized performance.",
        "Collaborate with team members to design and implement features for sales, distribution, and e-commerce apps, ensuring alignment with user and business needs.",
        "Contribute to code reviews and adopt best practices to enhance app stability and maintainability.",
        "Work alongside cross-functional teams to deliver intuitive, user-friendly interfaces and robust functionality.",
      ],
    },
    {
      company: "Global Connect Asia Co., Ltd",
      role: "Android Developer (Internship)",
      period: "OCTOBER 2019 - DECEMBER 2019",
      responsibilities: [
        "Built and tested Android app features using Java and Android Studio, gaining early exposure to mobile development workflows.",
        "Assisted in integrating APIs and refining UI components under senior developer guidance.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Technology (Yadanarpon Cyber City)",
      degree: "Bachelor of Engineering (Information Science and Technology)",
      period: "2014 - 2021",
    },
  ],
  skills: {
    mobile: ["Flutter", "Dart", "Java (Native Android)", "MVVM", "Clean Architecture"],
    web: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "jQuery", "Tailwind"],
    practices: ["Code Reviews", "Performance Optimization", "Collaboration"],
  },
  projects: [
    {
      title: "Urban Cafe",
      description: "A modern cafe website showcasing menu items, locations, and providing an online ordering system. Built with modern web technologies.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Neo Shopping - E-commerce Mobile App",
      description:
        "Lead development of a scalable e-commerce app using Flutter, implementing MVVM architecture and Provider for efficient state management. Designed core features including product browsing, product search, cart management, and user authentication.",
      technologies: ["Flutter", "MVVM", "Provider"],
      links: {
        ios: "https://apps.apple.com/us/app/neo-shopping/id6743340742",
        android: "https://play.google.com/store/apps/details?id=com.mit.app092&pcampaignid=web_share",
      },
    },
    {
      title: "SD Lite V3 - Sales and Distribution Mobile App with ERP System",
      description:
        "Developed a robust app supporting sales orders, delivery, invoicing, returns, and cash sales with pre-planned routes for sales teams. Enabled online/offline functionality and integrated inventory management tools.",
      technologies: ["Flutter", "ERP Integration", "Offline Sync"],
      links: {
        ios: "https://apps.apple.com/us/app/sd-lite-3-0/id6575361991",
        android: "https://play.google.com/store/apps/details?id=com.nirvasoft.app085&pcampaignid=web_share",
      },
    },
    {
      title: "SD Lite - Sales and Distribution Mobile App with ERP System",
      description:
        "Implemented route search functionality for sales persons to optimize daily visit plans. Built customized printing logic to generate invoices and delivery order tailored to individual customer needs.",
      technologies: ["Flutter", "Printing Logic"],
      links: {
        ios: "https://apps.apple.com/us/app/sd-lite/id1477820045",
        android: "https://play.google.com/store/apps/details?id=com.mit.sdlitemit&pcampaignid=web_share",
      },
    },
    {
      title: "Tech News App (Personal Project)",
      description:
        "Built a real-time news app integrating the Google Blogger API, designed with an intuitive UI and smooth navigation using Java.",
      technologies: ["Java", "Google Blogger API"],
      links: {},
    },
  ],
};
