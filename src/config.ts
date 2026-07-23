export const config = {
  githubUsername: 'wachirarat',
  name: 'Wachira Ratayapitak',
  role: 'Software Engineer | Full-Stack Developer',
  email: 'Wachiraratpim@gmail.com',
  phone: '+66 95 703 2337',
  tagline:
    'Full-Stack Software Engineer with experience in enterprise banking systems and scalable web applications. Skilled in React, Next.js, TypeScript, and Java with strong focus on clean architecture and performance.',
  about: [
    'Full-Stack Software Engineer with hands-on experience in enterprise banking systems and scalable web applications.',
    'Skilled in React, Next.js, TypeScript, and Java, with a strong focus on clean architecture, security, and performance.',
    'Experienced working in Agile/Scrum teams, building full-stack features, integrating RESTful APIs, and optimizing backend logic.',
    'Open to new opportunities in software engineering and full-stack development.',
  ],
  education: [
    { year: '2016 - 2020', degree: 'B.Eng. in Computer Engineering', institution: 'Panyapiwat Institute of Management' },
  ],
  experience: [
    { year: '2023 - Present', title: 'Software Engineer', company: 'ttb bank', description: 'Currently leading full-stack development of Roddonjai, a used-car marketplace platform, including vehicle listing, search/filter functionality, and user management with database integration. Also develop and maintain enterprise banking applications with focus on scalability, security, and system reliability, using React, Next.js, TypeScript, and Java. Integrate RESTful APIs, optimize backend logic, and collaborate in Agile environment with code reviews.' },
    { year: '2022 - 2023', title: 'Frontend Developer', company: 'Avalant Co., Ltd.', description: 'Built responsive enterprise web applications using a Low-Code development platform. Designed reusable UI components and ensured cross-platform compatibility.' },
    { year: '2020 - 2022', title: 'Software Developer', company: 'GoSoft', description: 'Enhanced and maintained All Online e-commerce platform to support business requirements and improve user experience.' },
    { year: '2020', title: 'Software Developer', company: 'SoftSquare Group', description: 'Developed and maintained modules aligned with business requirements and technical specifications.' },
  ],
  // icon: slug จาก https://simpleicons.org (เว้นว่างได้ จะใช้ไอคอนสำรองให้)
  skills: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Java', icon: 'java' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'Redux', icon: 'redux' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'RESTful API', icon: '' },
    { name: 'Git', icon: 'git' },
    { name: 'Agile / Scrum', icon: '' },
    { name: 'Low-Code', icon: '' },
  ],
  projectDescriptions: {
    'wachira-portfolio': 'Personal portfolio website built with React, Vite, TypeScript, and TailwindCSS to showcase my projects, skills, and experience.',
    'wachirarat': 'GitHub profile README and personal repository.',
  } as Record<string, string>,
  // วางไฟล์ resume.pdf ไว้ในโฟลเดอร์ public/
  resumeUrl: '/resume.pdf',
  linkedin: '',
  location: 'Nonthaburi, Thailand',
  // จำนวน repo ที่จะแสดง (เรียงตาม updated ล่าสุด)
  maxRepos: 6,
};
