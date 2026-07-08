// ── Type Definitions ──

export interface ProfileData {
  name: string;
  tagline: string;
  heroHeading: string;
  portraitUrl: string;
  aboutText: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  education: string;
  educationDetails: string;
  contactText: string;
  footerBio: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface ProjectImage {
  col1Top: string;
  col1Bottom: string;
  col2: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  name: string;
  liveUrl: string;
  images: ProjectImage;
}

export interface TechItem {
  id: string;
  name: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface CertificationItem {
  id: string;
  title: string;
  subtitle: string;
}

export interface PortfolioData {
  profile: ProfileData;
  services: ServiceItem[];
  projects: ProjectItem[];
  techStack: TechItem[];
  testimonials: TestimonialItem[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  certifications: CertificationItem[];
}

// ── Helper ──
let idCounter = 0;
export const genId = () => `id_${Date.now()}_${idCounter++}`;

// ── Default Data ──

export const defaultProfile: ProfileData = {
  name: 'Bidyut Medhi',
  tagline: 'an AI engineer driven by crafting intelligent and impactful solutions',
  heroHeading: "Hi, i'm bidyut",
  portraitUrl:
    'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
  aboutText:
    "I'm an enthusiast for technology, problem-solving, and innovation. I actively develop and implement AI models and algorithms, researching and applying state-of-the-art methods in Natural Language Processing and Generative AI. I collaborate closely with ML Engineers and Data Engineers to ensure seamless deployment of AI solutions. Let's build something incredible together!",
  email: 'bidyutmedhi86@gmail.com',
  phone: '+91 7896441241',
  location: 'Guwahati, Assam, India',
  githubUrl: 'https://github.com/bidyut2611/',
  linkedinUrl: 'https://www.linkedin.com/in/bidyut-medhi-b87083200/',
  education: 'B.Tech CSE — Assam Engineering College Guwahati',
  educationDetails: 'CGPA: 8.28 | 2020 — 2024',
  contactText: "Got a project in mind or just want to chat about AI and tech? I'd love to hear from you.",
  footerBio: "AI Engineer & Researcher based in Guwahati, Assam, India. Passionate about building intelligent solutions that make a difference.",
};

export const defaultServices: ServiceItem[] = [
  {
    id: 's1',
    number: '01',
    name: 'AI/ML Solutions',
    description:
      'End-to-end development of intelligent systems using deep learning, LLMs, and advanced NLP techniques for real-world applications and enterprise deployment.',
  },
  {
    id: 's2',
    number: '02',
    name: 'NLP & Language Tech',
    description:
      'Building state-of-the-art natural language processing pipelines including machine translation, text-to-speech, OCR, and sentiment analysis for multilingual applications.',
  },
  {
    id: 's3',
    number: '03',
    name: 'Web Development',
    description:
      'Crafting modern, responsive web applications and management systems with clean architecture, using React, Node.js, and robust backend technologies.',
  },
  {
    id: 's4',
    number: '04',
    name: 'Research & Innovation',
    description:
      'Conducting cutting-edge research in AI and publishing findings, developing benchmark corpora, and implementing evaluation frameworks for academic and industry use.',
  },
  {
    id: 's5',
    number: '05',
    name: 'Data Engineering',
    description:
      'Designing automated data pipelines, repository management systems, and progress report generation tools for efficient data processing and deployment workflows.',
  },
];

export const defaultProjects: ProjectItem[] = [
  {
    id: 'p1',
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    liveUrl: '#',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    id: 'p2',
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    liveUrl: '#',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    id: 'p3',
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    liveUrl: '#',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

export const defaultTechStack: TechItem[] = [
  { id: 't1', name: 'Python', icon: '🐍' },
  { id: 't2', name: 'PyTorch', icon: '🔥' },
  { id: 't3', name: 'TensorFlow', icon: '🧠' },
  { id: 't4', name: 'React', icon: '⚛️' },
  { id: 't5', name: 'Node.js', icon: '💚' },
  { id: 't6', name: 'AWS', icon: '☁️' },
  { id: 't7', name: 'Docker', icon: '🐳' },
  { id: 't8', name: 'Git', icon: '📦' },
  { id: 't9', name: 'MySQL', icon: '🗄️' },
  { id: 't10', name: 'Firebase', icon: '🔶' },
  { id: 't11', name: 'Java', icon: '☕' },
  { id: 't12', name: 'C++', icon: '⚡' },
];

export const defaultTestimonials: TestimonialItem[] = [
  {
    id: 'tm1',
    quote:
      "Bidyut's work on the machine translation pipeline was exceptional. He brought deep technical expertise in NLP and a remarkable ability to handle complex multi-language corpora with precision.",
    name: 'Dr. Tanmoy Chakraborty',
    role: 'Professor, LCS2 Lab, IIT Delhi',
    initials: 'TC',
  },
  {
    id: 'tm2',
    quote:
      'An incredibly driven engineer who consistently delivers beyond expectations. His OCR pipeline for Hindi text extraction was a game-changer for our data quality processes.',
    name: 'Rajesh Kumar',
    role: 'Senior Research Scientist, IIT Guwahati',
    initials: 'RK',
  },
  {
    id: 'tm3',
    quote:
      'Working with Bidyut on the Waving Punch Card Tool was a fantastic experience. He automated an 8-day process into minutes — that\'s the kind of impact he brings to every project.',
    name: 'Ananya Sharma',
    role: 'Project Lead, NEST Cluster',
    initials: 'AS',
  },
  {
    id: 'tm4',
    quote:
      'Bidyut combines strong research skills with practical engineering. His TTS model training and LLM-based evaluation metrics showed both depth of understanding and ability to ship production-quality work.',
    name: 'Prof. Sanjeev Sharma',
    role: 'HOD, CSE Department, AEC Guwahati',
    initials: 'SS',
  },
];

export const defaultExperiences: ExperienceItem[] = [
  {
    id: 'e1',
    role: 'Research Fellow (AI Engineer)',
    organization: 'NEST, IIT Guwahati',
    period: 'Apr 2026 — Present',
    highlights: [
      'Developed Waving Punch Card Tool adopted by 800,000+ rural users',
      'Automated 8-day manual workflows into minutes-long processes',
      'Built multiple websites for NEST cluster and symposiums',
    ],
  },
  {
    id: 'e2',
    role: 'Research Associate',
    organization: 'LCS2, IIT Delhi',
    period: 'Dec 2025 — Apr 2026',
    highlights: [
      'Fine-tuned MT models with 130K parallel sentences for Hindi-Indic translation',
      'Built end-to-end OCR pipeline for Hindi text extraction',
      'Conducted TTS model training and implemented LLM-based evaluation metrics',
    ],
  },
  {
    id: 'e3',
    role: 'Assistant Project Engineer',
    organization: 'IIT Guwahati',
    period: 'Dec 2024 — Oct 2025',
    highlights: [
      'Created MT resources for Indian languages with benchmark corpora',
      'Developed UCCN lab management system using PHP, HTML, CSS, and MySQL',
    ],
  },
  {
    id: 'e4',
    role: 'Machine Learning Intern',
    organization: 'NIELIT',
    period: '2024',
    highlights: [
      'Worked on ML model development and deployment',
      'Gained hands-on experience with production ML pipelines',
    ],
  },
  {
    id: 'e5',
    role: 'Internship',
    organization: 'Northeast Railway, Guwahati',
    period: '2023',
    highlights: [
      'Applied data processing and analysis techniques',
      'Contributed to operational efficiency improvements',
    ],
  },
];

export const defaultSkillCategories: SkillCategory[] = [
  {
    id: 'sc1',
    title: 'AI / Machine Learning',
    icon: '🧠',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'LLM / NLP', level: 92 },
      { name: 'Hugging Face', level: 88 },
      { name: 'ML/DL', level: 90 },
    ],
  },
  {
    id: 'sc2',
    title: 'Development',
    icon: '💻',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Node.js', level: 78 },
      { name: 'Java', level: 82 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'PHP', level: 72 },
    ],
  },
  {
    id: 'sc3',
    title: 'Tools & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'AWS', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Android Studio', level: 75 },
    ],
  },
];

export const defaultCertifications: CertificationItem[] = [
  { id: 'c1', title: 'GATE 2024, 2023 Qualified', subtitle: 'Graduate Aptitude Test in Engineering' },
  { id: 'c2', title: 'Certificate of Excellence in DSA', subtitle: 'Data Structures & Algorithms' },
  { id: 'c3', title: 'Deep Dive in Core Java', subtitle: 'Udemy Certification' },
  { id: 'c4', title: 'Data Structures using C & C++', subtitle: 'Udemy Certification' },
];

export const defaultPortfolioData: PortfolioData = {
  profile: defaultProfile,
  services: defaultServices,
  projects: defaultProjects,
  techStack: defaultTechStack,
  testimonials: defaultTestimonials,
  experiences: defaultExperiences,
  skillCategories: defaultSkillCategories,
  certifications: defaultCertifications,
};
