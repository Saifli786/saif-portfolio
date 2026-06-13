// ============================================================
// lib/data.ts — Single Source of Truth for All Portfolio Content
// ============================================================

export const personalInfo = {
  name: "Md Saif Ali",
  shortName: "Saif",
  title: "AI/ML Engineer & Researcher",
  tagline: "Building intelligent systems that matter.",
  email: "saifali.dev786@gmail.com",
  phone: "+91-9798571099",
  location: "Delhi NCR, India",
  university: "Maharishi Markandeshwar (Deemed to be University), Mullana",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  resumeUrl: "/assets/img/SAIF_RESUME.pdf",
  bio: [
    "I'm a passionate AI/ML engineer and researcher with a deep interest in building intelligent systems that bridge innovation and real-world impact.",
    "Specializing in machine learning, deep learning, and computer vision — I believe the most powerful technology is that which solves real human problems with elegance and precision.",
  ],
  stats: [
    { value: "10+", label: "AI/ML Projects" },
    { value: "3+", label: "Years Learning" },
    { value: "~93%", label: "Best Accuracy" },
    { value: "2+", label: "Certifications" },
  ],
  details: [
    { label: "Specialization", value: "Artificial Intelligence & Machine Learning" },
    { label: "Experience Level", value: "Undergraduate Researcher" },
    { label: "Education", value: "B.Tech CSE (AI & ML), MM(DU)" },
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
    url: "https://www.linkedin.com/in/saif-ali-5b0887334/",
    image: null,
  },
];

export const typedRoles = [
  "AI/ML Student",
  "Model Trainer",
  "Python Developer",
  "Data Analyst",
  "Researcher",
];

export const navItems = [
  { label: "Hero",         href: "#hero",         icon: "Home" },
  { label: "About",        href: "#about",        icon: "User" },
  { label: "Skills",       href: "#skills",       icon: "Zap" },
  { label: "Resume",       href: "#resume",       icon: "FileText" },
  { label: "Portfolio",    href: "#portfolio",    icon: "Layers" },
  { label: "Contact",      href: "#contact",      icon: "Mail" },
];

export const skillCategories = [
  {
    title: "Programming & ML",
    skills: [
      { name: "Python",        percentage: 92, detail: "Primary language for all ML/AI work" },
      { name: "Machine Learning", percentage: 88, detail: "Scikit-learn, feature engineering, model evaluation" },
      { name: "Deep Learning",    percentage: 80, detail: "CNNs, RNNs, Transfer Learning" },
      { name: "Computer Vision",  percentage: 78, detail: "OpenCV, face detection, tracking" },
      { name: "Natural Language Processing", percentage: 70, detail: "Text processing, sentiment analysis" },
    ],
  },
  {
    title: "Data & Tools",
    skills: [
      { name: "Pandas & NumPy",   percentage: 90, detail: "Data wrangling and analysis" },
      { name: "TensorFlow/Keras", percentage: 78, detail: "Model building and training" },
      { name: "Scikit-learn",     percentage: 88, detail: "Classical ML algorithms" },
      { name: "Matplotlib/Seaborn", percentage: 82, detail: "Data visualization" },
      { name: "Flask",            percentage: 72, detail: "ML model deployment as web APIs" },
    ],
  },
];

export const resumeData = {
  summary: "B.Tech AI/ML student with hands-on experience in machine learning, deep learning, and computer vision. Passionate about building intelligent systems that solve real-world problems.",
  experience: [
    {
      role: "AI/ML Intern",
      company: "NIELIT (Ministry of Electronics & IT)",
      period: "July 2024 – Sept 2024",
      location: "Remote/Online",
      points: [
        "Worked on real-world machine learning projects under mentorship",
        "Applied supervised learning techniques for classification tasks",
        "Gained hands-on experience with Python, Scikit-learn, and data preprocessing",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "Maharishi Markandeshwar (Deemed to be University)",
      period: "2022 – 2026",
      detail: "Specialization in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Senior Secondary (XII) — Science",
      institution: "S.H.D Inter College, Ballia (UP)",
      period: "2019 – 2021",
      detail: "Physics, Chemistry, Mathematics",
    },
    {
      degree: "Secondary (X)",
      institution: "S.H.D Inter College, Ballia (UP)",
      period: "Completed 2019",
      detail: "All subjects",
    },
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
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
    "Python", "Machine Learning", "Deep Learning",
    "Computer Vision", "NLP", "Pandas", "NumPy",
    "TensorFlow", "Keras", "Scikit-learn",
    "OpenCV", "Flask", "SQL", "Git",
  ],
};

export const projects = [
  {
    id: "heart-disease",
    title: "Heart Disease Prediction System",
    category: ["ml", "data-analysis"],
    description:
      "End-to-end machine learning pipeline for cardiovascular risk assessment using 14+ clinical features. Achieves ~93% accuracy with ensemble methods and SHAP explainability.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask", "SHAP"],
    github: "https://github.com/Saifli786/Heart-Predication",
    docs: "https://github.com/Saifli786/Heart-Predication#readme",
    image: "/assets/img/project/heart-disease-ml.svg",
    featured: true,
    color: "#dc2626",
  },
  {
    id: "liveliness-detection",
    title: "AI Liveliness Detection System",
    category: ["deep-learning", "ml"],
    description:
      "Real-time anti-spoofing system using texture analysis, motion tracking, and 3D depth estimation to prevent face recognition bypass. 96.8% confidence on real faces.",
    techStack: ["TensorFlow", "OpenCV", "Keras", "Python", "Face-Recognition"],
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
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    file: "/assets/img/SAIF_RESUME.pdf",
    image: "/assets/img/achievement/OCI-AI-Foundations.jpg",
    description: "Official Oracle certification validating AI infrastructure fundamentals on Oracle Cloud.",
    year: "2025",
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025 Generative AI Certified Professional",
    issuer: "Oracle",
    file: "/assets/img/SAIF_RESUME.pdf",
    image: "/assets/img/achievement/OCI-GenAI-Professional.jpg",
    description: "Advanced Oracle certification in Generative AI systems on OCI.",
    year: "2025",
  },
  {
    id: 3,
    title: "AI ML Internship Certificate — NIELIT",
    issuer: "NIELIT (MeitY)",
    file: "/assets/img/SAIF_RESUME.pdf",
    image: "/assets/img/achievement/NIELIT-Internship.jpg",
    description: "Completion certificate for AI/ML Internship from NIELIT, Ministry of Electronics & IT, Government of India.",
    year: "2024",
  },
  {
    id: 4,
    title: "B.Tech Marksheet",
    issuer: "MM(DU)",
    file: "/assets/img/SAIF_RESUME.pdf",
    image: "/assets/img/achievement/BTech-Marksheet.jpg",
    description: "Official B.Tech academic marksheet from Maharishi Markandeshwar University.",
    year: "2024",
  },
  {
    id: 5,
    title: "12th Class (UPMSP)",
    issuer: "UP Madhyamik Shiksha Parishad",
    file: "/assets/img/SAIF_RESUME.pdf",
    image: "/assets/img/achievement/12th-Class.jpg",
    description: "Senior Secondary (XII) certificate from UPMSP.",
    year: "2021",
  },
  {
    id: 6,
    title: "10th Class (UPMSP)",
    issuer: "UP Madhyamik Shiksha Parishad",
    file: "/assets/img/SAIF_RESUME.pdf",
    image: "/assets/img/achievement/BTech-Marksheet.jpg",
    description: "Secondary (X) certificate from UPMSP.",
    year: "2019",
  },
];
