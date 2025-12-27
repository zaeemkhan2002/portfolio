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
  `I've always been the kid who took toys apart just to see what made them tick. That curiosity started with a simple electronic dog in kindergarten—I remember following it room-to-room, completely mesmerized by how a machine could seem so... alive. That spark never really left; it just evolved from disassembling toys to building complex systems that can perceive, think, and act.`,
  `At LUMS, I found my sweet spot at the intersection of Computer Science and Robotics. I realized that for robots to truly be useful, they can't just be pre-programmed machines; they need to be intelligent partners. Whether I'm wrestling with noisy EMG signals to control a prosthetic hand or fine-tuning an LLM to understand child-safe content, I'm driven by the challenge of making technology resilient enough for the real world.`,
  `My goal isn't just to write code or solder circuits—it's to build agents that understand context and collaborate safely with humans. When I'm not debugging a distributed system or training a model, you’ll probably find me thinking about the next step in Human-Robot Interaction and how we can bridge the gap between biological intent and silicon execution.`
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
    title: " Intern - VSI Data Analytics",
    org: "Systems Limited",
    when: "June 2025 - July 2025",
    detail:
      "Worked with SQL Server Management Studio (SSMS) to design, query, and manage datasets. Gained hands-on experience in SSIS integration for efficient ETL workflows and data pipeline automation.",
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
  }
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
  { title: "Dean's Honor List (1st, 2nd, & 3rd Year)", when: "Sep 2022 - Present" },
  { title: "LUMS Learning Institute Design and Innovation Grant (500,000 PKR)", when: "June 2024" },
  { title: "100% Merit Scholarship (A Levels)", when: "Sep 2020 - May 2022" },
  { title: "Science Society President (Beaconhouse)", when: "Sep 2019 - May 2020" },
];

export const SKILLS = {
  languages: ["C", "C++", "Python", "SQL", "C#", "Go", "Solidity", "Java", "Javascript"],
  tools: ["Unity", "ROS", "Gazebo", "PyTorch", "TensorFlow", "OpenCV", "SSIS", "SSMS", "Git"],
};

export const INTERESTS = ["Gaming", "Robotics", "Formula 1", "Football", "Reading", "Writing"];
