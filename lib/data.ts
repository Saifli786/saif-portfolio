// ============================================================
// lib/data.ts — Single Source of Truth for All Portfolio Content
// ============================================================

export const personalInfo = {
  name: "Saif Ansari",
  shortName: "Saif",
  title: "AI/ML Engineer & Developer",
  tagline: "Building intelligent systems that matter.",
  email: "Saifansarik7@gmail.com",
  phone: "+91-6307563574",
  location: "Patna / Bihar, India",
  university: "Maharishi Markandeshwar Deemed To Be University, Mullana, Ambala",
  degree: "Bachelor of Technology in Computer Science (AI&ML)",
  resumeUrl: "/assets/img/SAIF_RESUME.pdf",
  bio: [
    "I am a third-year B.Tech CSE (AI & ML) student with a strong foundation in machine learning, Python, and data analysis. I enjoy building intelligent systems and trying out new ideas in AI.",
    "I mostly work with Python libraries like Pandas, NumPy, and TensorFlow to analyze data and create predictive models. I'm looking for opportunities where I can apply what I've learned and gain real experience working on practical AI projects."
  ],
  stats: [
    { value: "7.42", label: "CGPA (B.Tech)" },
    { value: "2", label: "OCI Certifications" },
    { value: "4 Weeks", label: "NIELIT Internship" },
    { value: "10+", label: "Python/ML Projects" },
  ],
  details: [
    { label: "Specialization", value: "Artificial Intelligence & Machine Learning" },
    { label: "College", value: "MM(DU), Mullana, Ambala" },
    { label: "Degree", value: "B.Tech Computer Science (AI & ML)" },
    { label: "Languages", value: "Hindi, English" },
  ],
};

export const socialLinks = [
  {
    name: "HackerRank",
    icon: "HackerRank",
    url: "https://www.hackerrank.com/profile/saifali_dev786",
    image: "/assets/img/hackerrank.svg",
  },
  {
    name: "LeetCode",
    icon: "LeetCode",
    url: "https://leetcode.com/u/saifali_786/",
    image: "/assets/img/leetcode.svg",
  },
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/Saifli786",
    image: null,
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/md-saif-ali-a1697b322/",
    image: null,
  },
];

export const typedRoles = [
  "AI/ML Student",
  "Model Trainer",
  "Python Developer",
  "Data Analyst",
  "B.Tech CSE (AI & ML) Student",
];

export const navItems = [
  { label: "Hero",         href: "#hero",         icon: "Home" },
  { label: "About",        href: "#about",        icon: "User" },
  { label: "Skills",       href: "#skills",       icon: "Zap" },
  { label: "Resume",       href: "#resume",       icon: "FileText" },
  { label: "Project",      href: "#portfolio",    icon: "Layers" },
  { label: "Achievements", href: "/achievements", icon: "Award" },
  { label: "Contact",      href: "#contact",      icon: "Mail" },
];

export const skillCategories = [
  {
    title: "Programming & ML",
    skills: [
      { name: "Python",        percentage: 92, detail: "Primary language for AI/ML (NumPy, Pandas, Scikit-learn, TensorFlow)" },
      { name: "Machine Learning", percentage: 88, detail: "Supervised/Unsupervised learning, Feature Engineering, Model Training" },
      { name: "Deep Learning & CV", percentage: 82, detail: "CNNs, Computer Vision (OpenCV, Dlib, MediaPipe), TensorFlow/Keras" },
      { name: "Java",          percentage: 75, detail: "Object-oriented programming and software fundamentals" },
    ],
  },
  {
    title: "Data, Frameworks & Databases",
    skills: [
      { name: "Pandas & NumPy",   percentage: 90, detail: "Data manipulation, cleaning, and analysis" },
      { name: "Flask & Django",   percentage: 76, detail: "Web application development and deployment of ML models" },
      { name: "Databases",        percentage: 80, detail: "Data storage using MySQL, MongoDB, and Firebase" },
      { name: "Tools & Platforms", percentage: 85, detail: "Git, VS Code, Jupyter Notebook, Google Colab, Kaggle" },
    ],
  },
];

export const resumeData = {
  summary: "Third-year B.Tech CSE (AI & ML) student with a strong foundation in machine learning, Python, and data analysis. Experienced in building predictive models, anti-spoof biometric systems, and web applications using Django/Flask.",
  experience: [
    {
      role: "Machine Learning Intern",
      company: "NIELIT Patna, Bihar",
      period: "May 2025 – June 2025 (4 Weeks)",
      location: "Patna, Bihar",
      points: [
        "Worked on practical machine learning projects under professional mentorship",
        "Developed predictive models using Python, Pandas, NumPy, and Scikit-learn",
        "Gained hands-on experience in data analysis, preprocessing, and model evaluation",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science (AI&ML)",
      institution: "Maharishi Markandeshwar Deemed To Be University",
      period: "Aug 2023 – Present",
      detail: "CGPA: 7.42 | Specialization in AI & ML | Mullana, Ambala",
    },
    {
      degree: "12th Science (UPMSP)",
      institution: "Atal Bihari Singh+2high School Bhabhua Kaimur",
      period: "Aug 2017 – Mar 2019",
      detail: "1st Division | Marks: 317 | Kaimur, Bihar",
    },
    {
      degree: "10th Class (UPMSP)",
      institution: "Atal Bihari Singh+2high School Bhabhua Kaimur",
      period: "Completed Aug 2017",
      detail: "1st Division | Marks: 345 | Kaimur, Bihar",
    },
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Generative AI Certified Professional",
      issuer: "Oracle",
      year: "2025",
    },
  ],
  technicalSkills: [
    "Python", "Java", "Machine Learning", "Deep Learning",
    "Computer Vision", "NLP", "Pandas", "NumPy",
    "TensorFlow", "Keras", "Scikit-learn",
    "OpenCV", "Flask", "Django", "MySQL", "MongoDB",
    "Firebase", "Git", "DSA", "OOP",
  ],
};

export const projects = [
  {
    id: "heart-disease",
    title: "Heart Disease Prediction — AI-Based Cardiovascular Risk Assessment",
    category: ["ml", "data-analysis"],
    description:
      "Developed an ML model to predict heart disease risk using clinical and health parameters. Built end-to-end pipelines for preprocessing, feature scaling, correlation analysis, and model training. Evaluated Logistic Regression, Random Forest & SVM for best performance; implemented explainability via SHAP. Deployed a user-friendly web app for input-based risk output with visual interpretation dashboards.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask/Streamlit", "Matplotlib/Seaborn", "SHAP", "HTML/CSS/JS"],
    github: "https://github.com/Saifli786/MediScanAI-Heart",
    docs: "https://github.com/Saifli786/MediScanAI-Heart#readme",
    demo: "https://medi-scan-ai-heart.vercel.app/",
    image: "/assets/img/project/heart-disease-ml.svg",
    featured: true,
    color: "#dc2626",
  },
  {
    id: "liveliness-detection",
    title: "Liveliness Detection for Face Recognition — Anti-Spoof Verification System",
    category: ["deep-learning", "ml"],
    description:
      "Designed a biometric liveliness classifier to prevent spoofing via image/video/mask attacks. Implemented CNN-based feature extraction with motion, blink detection & depth-texture analysis. Integrated liveliness verification with face recognition for secure access authentication. Achieved real-time performance and significantly reduced spoof acceptance probability.",
    techStack: ["Python", "OpenCV", "Dlib/MediaPipe", "TensorFlow/Keras/PyTorch", "NumPy", "Flask/Streamlit"],
    github: "https://github.com/Saifli786/Liveliness-Detection",
    docs: "https://github.com/Saifli786/Liveliness-Detection#readme",
    image: "/assets/img/project/liveliness-detection-dl.svg",
    featured: true,
    color: "#7c3aed",
  },
  {
    id: "face-attendance",
    title: "Face Attendance System",
    category: ["deep-learning", "web-app"],
    description:
      "Real-time face recognition attendance system with automated logging, admin dashboard, attendance records management, and export functionality.",
    techStack: ["Face Recognition", "Flask", "Database", "HTML/CSS"],
    github: "https://github.com/Saifli786/Face-attendace-system",
    docs: "https://github.com/Saifli786/Face-attendace-system#readme",
    image: "/assets/img/project/face-attendance-system.svg",
    featured: false,
    color: "#059669",
  },
];

export const portfolioFilters = [
  { label: "All Projects",    value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "Deep Learning",   value: "deep-learning" },
  { label: "Data Analysis",   value: "data-analysis" },
  { label: "Web App",         value: "web-app" },
];

export const achievements = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    file: "/assets/img/achievement/eCertificate_page-0001.jpg",
    image: "/assets/img/achievement/eCertificate_page-0001.jpg",
    description: "Certification document",
    year: "2025",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    file: "/assets/img/achievement/eCertificate (1)_page-0001.jpg",
    image: "/assets/img/achievement/eCertificate (1)_page-0001.jpg",
    description: "Certification document",
    year: "2025",
  },
  {
    id: 3,
    title: "Machine Learning Internship Certificate",
    issuer: "NIELIT Patna, Bihar",
    file: "/assets/img/achievement/IMG_20251110_163815.jpg",
    image: "/assets/img/achievement/IMG_20251110_163815.jpg",
    description: "Certification document",
    year: "2025",
  },
  {
    id: 4,
    title: "Internal Smart India Hackathon 2025",
    issuer: "MMEC, Mullana (AICTE / MoE)",
    file: "/assets/img/achievement/saif_Ansari_11232959_certificate.jpg",
    image: "/assets/img/achievement/saif_Ansari_11232959_certificate.jpg",
    description: "Certification document",
    year: "2025",
  },
  {
    id: 5,
    title: "Digital Skills: Artificial Intelligence",
    issuer: "Accenture (FutureLearn)",
    file: "/assets/img/achievement/artificial-intelligence_certificate_of_achievement_i361h66 (1)_page-0001.jpg",
    image: "/assets/img/achievement/artificial-intelligence_certificate_of_achievement_i361h66 (1)_page-0001.jpg",
    description: "Certification document",
    year: "2025",
  },
  {
    id: 6,
    title: "Digital Skills: Artificial Intelligence (Transcript)",
    issuer: "Accenture (FutureLearn)",
    file: "/assets/img/achievement/artificial-intelligence_certificate_of_achievement_i361h66 (1)_page-0002.jpg",
    image: "/assets/img/achievement/artificial-intelligence_certificate_of_achievement_i361h66 (1)_page-0002.jpg",
    description: "Certification document",
    year: "2025",
  },
  {
    id: 7,
    title: "Python 101 for Data Science",
    issuer: "IBM SkillsBuild",
    file: "/assets/img/achievement/IBM PY0101EN Certificate _ IBM SkillsBuild_page-0001.jpg",
    image: "/assets/img/achievement/IBM PY0101EN Certificate _ IBM SkillsBuild_page-0001.jpg",
    description: "Certification document",
    year: "2026",
  },
  {
    id: 8,
    title: "What Is Generative AI? (Certificate 1)",
    issuer: "LinkedIn Learning",
    file: "/assets/img/achievement/CertificateOfCompletion_What Is Generative AI_page-0001.jpg",
    image: "/assets/img/achievement/CertificateOfCompletion_What Is Generative AI_page-0001.jpg",
    description: "Certification document",
    year: "2026",
  },
  {
    id: 9,
    title: "What Is Generative AI? (Certificate 2)",
    issuer: "LinkedIn Learning",
    file: "/assets/img/achievement/CertificateOfCompletion_What Is Generative AI (1)_page-0001.jpg",
    image: "/assets/img/achievement/CertificateOfCompletion_What Is Generative AI (1)_page-0001.jpg",
    description: "Certification document",
    year: "2026",
  },
  {
    id: 10,
    title: "Team Essentials for Designing AI Solutions",
    issuer: "IBM SkillsBuild",
    file: "/assets/img/achievement/TeamEssentialsforDesigningAISolutions_Badge20260603-31-fbc8he_page-0001.jpg",
    image: "/assets/img/achievement/TeamEssentialsforDesigningAISolutions_Badge20260603-31-fbc8he_page-0001.jpg",
    description: "Certification document",
    year: "2026",
  },
  {
    id: 11,
    title: "Working in a Digital World: Professional Skills",
    issuer: "IBM SkillsBuild",
    file: "/assets/img/achievement/IBMDesign20260111-33-wthnw9_page-0001.jpg",
    image: "/assets/img/achievement/IBMDesign20260111-33-wthnw9_page-0001.jpg",
    description: "Certification document",
    year: "2026",
  },
  {
    id: 12,
    title: "Quantum Machine Learning",
    issuer: "IBM",
    file: "/assets/img/achievement/IBMDesign20260605-30-eely2k_page-0001.jpg",
    image: "/assets/img/achievement/IBMDesign20260605-30-eely2k_page-0001.jpg",
    description: "Certification document",
    year: "2026",
  },
];
