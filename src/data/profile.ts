// src/data/profile.ts
export const CONTACT = {
    name: "Zaeem Mohtashim Khan",
    location: "Lahore, Pakistan",
    email: "zaeemmohtashim@gmail.com",
    phone: "+92 307 6444777", // optional to show publicly
    linkedin: "https://www.linkedin.com/in/zaeem-mohtashim-khan-893b7b243",
    github: "https://github.com/zaeemkhan2002",
    resume: "Zaeem's CV.pdf", // place the PDF in /public
  };
  
  export const BIO: string[] = [
    `I'm a senior in Computer Science at LUMS (Pakistan) with a research focus on large language models (LLMs) for real-world safety. My current work uses multimodal LLMs for scalable, multilingual content moderation—particularly detecting harmful or inappropriate advertising in child-oriented spaces—to improve child safety on the internet.`,
    `Beyond LLMs, I'm interested in the intersection of robotics and computer science—where intelligent systems connect perception, reasoning, and physical action. I enjoy computer vision for real-time scene understanding, building autonomous agents for navigation/manipulation, and using distributed systems to scale these capabilities.`,
    `Whether it's a multilingual voice-controlled fetch robot, cost-efficient AI moderation pipelines, or cloud-to-edge deployments, I like turning cutting-edge algorithms into reliable, impactful, and scalable systems in the real world.`,
  ];
  
  export const EDUCATION = [
    {
      school: "Lahore University of Management Sciences (LUMS)",
      degree: "BSc (Honors) Computer Science with Minor in Robotics",
      cgpa: "CGPA: 3.88",
      when: "2022 - 2026",
      courses: [
        "Deep Learning",
        "Topics in Large Language Models",
        "Junior Design Studio - Robotics",
        "Mobile Robotics",
        "Operating Systems",
        "Distributed Systems",
        "Data Structures & Algorithms",
        "Network Centric Computing",
        "Introduction to Blockchain"
      ],
    },
    {
      school: "Lahore Grammar School JT (A Levels)",
      degree: "A Levels — 1 A* and 3 As",
      when: "2020 - 2022",
      subjects: ["Further Maths", "Maths", "Physics", "Chemistry"],
    },
  ];
  
  export const EXPERIENCE = [
    {
      title: "Head TA — Introduction to Blockchain",
      org: "LUMS",
      when: "August 2025 - Present",
      detail:
        "Helped in designing and testing of Programming Assignments. Guided 100 students in key concepts related to blockchain; ran tutorials and ~4 hrs/week office hours; developed explanations and support for programming assignments.",
    },
    {
      title: "Teacher's Assistant — Network Centric Computing",
      org: "LUMS",
      when: "Jan 2025 - May 2025",
      detail:
        "Guided 200+ students in key web concepts; ran tutorials and ~4 hrs/week office hours; developed explanations and support for programming assignments.",
    },
    {
      title: "Head TA — Fundamentals of Computer Science",
      org: "LUMS",
      when: "Sep 2024 - Dec 2024",
      detail:
        "Led assignment/lab design and mentored a cohort of 300+ students; coordinated grading and instructional support.",
    },
    {
      title: "Research Assistant — Course Redesign",
      org: "LUMS",
      when: "May 2024 - Sep 2024",
      detail:
        "Worked under Dr. Zartash Afzal in a team of four to redesign the 'Fundamentals of Computer Science' course for incoming batches.",
    },
    {
      title: "Freelance Script Writer (F1 / News)",
      org: "Various YouTube channels",
      when: "Mar 2023 - Jun 2024",
      detail:
        "Researched and wrote scripts for F1 and tech/news content; delivered concise, engaging narratives on schedule.",
    },
    {
      title: "Editor",
      org: "Orpheus Magazine",
      when: "Jun 2021 - Aug 2023",
      detail:
        "Editor for Pakistan's first literary magazine; led design & media, authored published short stories, and contributed to the website design.",
    },
  ];
  
  export const PROJECT_HIGHLIGHTS = [
    {
      title: "Protecting Young Users: Multimodal LLMs for YouTube Moderation",
      when: "Sep 2025 - Present",
      detail:
        "Co-authored a study on feasibility of LLMs for detecting/classifying children's content and inappropriate ads on YouTube; large-scale, multilingual focus.",
    },
    {
      title: "LUMScape — Interactive 3D Campus",
      when: "Jan 2025 - Present",
      detail:
        "Unity WebGL digital twin with real-time event overlays, fast-travel navigation, and campus info APIs.",
    },
    {
      title: "Autonomous Trash-Skimming Boat",
      when: "Mar 2025 - Present",
      detail:
        "Low-cost boat with YOLO-based debris detection; Jetson Nano + Arduino; hybrid offboard inference and real-time control.",
    },
  ];
  
  export const AWARDS = [
    { title: "Dean's Honor List", when: "Year 1, Year 2, & Year 3" },
    { title: "100% Merit Scholarship (A Levels)", when: "Aug 2020 - May 2022" },
  ];
  