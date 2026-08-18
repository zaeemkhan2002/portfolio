// src/data/profile.ts

export const CONTACT = {
  name: "Zaeem Mohtashim Khan",
  location: "Lahore, Pakistan",
  email: "zaeemmohtashim@gmail.com",
  phone: "+92 307 6444777", // optional to show publicly
  linkedin: "https://www.linkedin.com/in/zaeem-mohtashim-khan-893b7b243",
  github: "https://github.com/zaeemkhan2002",
  site: "https://portfolio-zaeem.vercel.app",
  resume: "/Zaeem's CV.pdf", // place the PDF in /public
};

export const ROLE = "Research Associate @ LUMS";

export const TAGLINE =
  "I research the intersection of embodied robotics and human-aware AI, designing systems that reason under uncertainty to act, ask, or defer in ways humans can trust.";

export const BIO: string[] = [
  `I've always been the kid who took toys apart just to see what made them tick. That curiosity started with a simple electronic dog in kindergarten — I remember following it room to room, completely mesmerized by how a machine could seem so... alive. That spark never really left; it just evolved from disassembling toys to building systems that perceive, reason, and act.`,
  `At LUMS I found my sweet spot at the intersection of Computer Science and Robotics, and graduated with High Distinction in June 2026. I've since stayed on as a Research Associate with Dr. Zafar Ayyub Qazi, working on LLM safety and cross-cultural content moderation. Along the way I've wrestled noisy EMG signals into prosthetic control, red-teamed guardrails across multi-turn conversations, and cut multimodal moderation cost by ~21x without giving up accuracy.`,
  `The thread running through all of it is uncertainty. A model that commits hard to a wrong answer is worse than one that knows when to hesitate — so I build pipelines that hold a belief rather than a verdict, and that know when to act, when to ask, and when to defer. My goal is to build agents that understand context and collaborate safely with the humans around them.`,
];

export const EDUCATION = [
  {
    school: "Lahore University of Management Sciences (LUMS)",
    degree: "BSc (Hons.) Computer Science — Minor in Robotics",
    cgpa: "CGPA 3.90  ·  Major CGPA 3.97",
    honor: "Graduated with High Distinction",
    when: "Sep 2022 - Jun 2026",
    courses: [
      "Mobile Robotics",
      "Deep Learning",
      "Topics in Large Language Models",
      "Junior Design Studio — Robotics",
      "Distributed Systems",
      "Operating Systems",
      "Data Structures",
      "Algorithms",
      "Network Centric Computing",
      "Databases",
      "Introduction to Blockchain",
    ],
  },
  {
    school: "Lahore Grammar School, Johar Town",
    degree: "A Levels — 1A* 3A",
    when: "Sep 2020 - May 2022",
    subjects: ["Further Maths", "Maths", "Physics", "Chemistry"],
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: string;
  note?: string;
  status: string;
  /** Canonical link to the paper */
  url?: string;
  /** How to label that link, e.g. "arXiv" or "ACM DL" */
  urlLabel?: string;
  highlights: string[];
  slug?: string; // links to a project page when one exists
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Separating Clicks from Baits: Using Large Language Models to Detect Misleading YouTube Thumbnails",
    authors:
      "Wajiha Naveed, Muhammad Muneeb Pervez*, Zaeem Mohtashim Khan*, Zafar Ayyub Qazi, Zartash Afzal Uzmi",
    venue: "International AAAI Conference on Web and Social Media",
    venueShort: "ICWSM 2027",
    year: "2027",
    note: "*Equal contribution",
    status: "Accepted",
    url: "https://arxiv.org/abs/2607.23739",
    urlLabel: "arXiv",
    highlights: [
      "Multi-modal LLM pipeline for detecting misleading YouTube thumbnails, accepted at ICWSM 2027.",
      "Led the evaluation of open-weight, locally-run vision-language models (LLaVA-v1.5, Qwen2.5-VL-7B-Instruct) against proprietary frontier models on a cross-cultural dataset of 2,843 videos from eight countries.",
      "Benchmarked local model performance on 1,359 misleading-thumbnail videos with a combined 7.6 billion views, informing failure analysis and deployment recommendations.",
    ],
    slug: "misleading-thumbnails",
  },
  {
    title:
      "Safeguarding Children at Scale: Cost-Effective Multimodal LLM Detection of Inappropriate YouTube Advertising",
    authors:
      "Eman Nabeel*, Shizza Asher*, Haleema Jamil*, Zaeem Mohtashim Khan*, Nida Tanveer, Ihsan Ayyub Qazi, Zafar Ayyub Qazi",
    venue: "The Web Conference — Web4Good Track",
    venueShort: "WWW 2026",
    year: "2026",
    note: "*Equal contribution · Top-tier (A*) venue",
    status: "Accepted",
    url: "https://dl.acm.org/doi/10.1145/3774904.3793040",
    urlLabel: "ACM DL",
    highlights: [
      "Re-annotated a dataset of 2,466 YouTube advertisements under updated 2025 child-safety policies (κ = 0.903).",
      "Proposed DAVSP, a dynamic frame-sampling pipeline reducing multimodal inference cost by ~21x while staying within ~1 F1 point of full-video analysis.",
      "Evaluated multimodal LLMs across video, audio, metadata, and transcripts for scalable detection of inappropriate ads on child-oriented content.",
    ],
    slug: "youtube-kids-ad-detection",
  },
];

export const RESEARCH = {
  org: "LUMS",
  when: "January 2025 - Present",
  threads: [
    {
      title:
        "Multi-Turn Red-Teaming of LLM Guardrails Against Malicious Prompt Escalation",
      points: [
        `Designed and executed a multi-turn red-teaming pipeline pairing a Gemma-4 31B adversarial "red" model against a Gemini-based target guarded by BAGEL, a lightweight ensemble malicious-prompt classifier, to probe how malicious intent escalates across extended conversations.`,
        "Converted an exploratory Kaggle notebook into a cluster-deployable evaluation script on RunPod GPU infrastructure, with incremental CSV checkpointing for crash recovery and reproducibility across long-running simulations.",
        "Analyzed conversation-level attack trajectories to characterize how prompts that fail single-turn guardrail checks succeed cumulatively across multi-turn exchanges.",
      ],
      slug: "llm-guardrail-red-teaming",
    },
    {
      title: "Detecting Misleading YouTube Thumbnails Using Large Language Models",
      points: [
        "Built a multi-modal LLM pipeline to detect misleading YouTube thumbnails across a cross-cultural dataset of 2,843 videos from eight countries, evaluating open-weight vision-language models against proprietary frontier models.",
        "Findings contributed to a peer-reviewed paper accepted at ICWSM 2027.",
      ],
      slug: "misleading-thumbnails",
    },
    {
      title:
        "Cost-Effective Multimodal LLM Detection of Inappropriate YouTube Advertising",
      points: [
        "Built DAVSP, a multimodal LLM pipeline detecting inappropriate advertising on child-oriented content, reducing inference cost by ~21x while staying within ~1 F1 point of full-video analysis.",
        "Findings contributed to a peer-reviewed paper accepted at The Web Conference (WWW) 2026, a top-tier (A*) venue.",
      ],
      slug: "youtube-kids-ad-detection",
    },
    {
      title:
        "Hybrid Bayesian-Deep Learning Framework for Intent-Aware Prosthetic Control",
      points: [
        "Co-authored a research proposal for a hybrid framework for robust, intent-aware prosthetic arm control, combining discriminative deep learning with probabilistic reasoning.",
        "Designing a modular pipeline that fuses a compact neural network for sEMG-based intent classification with a recursive Bayes filter, maintaining a stable, interpretable belief distribution over user intent rather than committing to hard classifications at each timestep.",
        "Targeting validation on the public NinaPro dataset in a 3D simulation environment, hypothesizing that the hybrid approach reduces spurious intent switches and improves early detection latency over neural-only baselines.",
      ],
      slug: "mobile-robotics-research",
    },
    {
      title: "Mastani: A Multimodal Robotic Framework for Autonomous Object Retrieval",
      points: [
        "Developed a robotic system on a DJI RoboMaster platform, leveraging multimodal models (Gemini 2.0) for real-time, multilingual command interpretation and autonomous object retrieval in cluttered indoor environments.",
        "Designed and integrated the complete software stack, enabling the robot to autonomously identify, navigate to, and retrieve specified objects from natural language commands.",
      ],
      slug: "mastani-fetch",
    },
    {
      title: "Autonomous Trash Skimming Boat",
      points: [
        "Co-developed an autonomous boat using a YOLO-nano computer vision model on a Jetson Nano to detect, classify, and collect floating waterway debris in real time.",
      ],
      slug: "autonomous-trash-skimming-boat",
    },
    {
      title: "LUMScape",
      points: [
        "Collaborated in a 5-person team to build LUMScape, a 3D digital twin of the university campus in Unity, with a Node.js/Express/MongoDB backend streaming live event and facility data.",
      ],
      slug: "lumscape",
    },
  ],
};

export const EXPERIENCE = [
  {
    title: "Research Associate",
    org: "LUMS — with Dr. Zafar Ayyub Qazi",
    when: "Jul 2026 - Present",
    current: true,
    detail:
      "Conducting research on LLM safety and cross-cultural content moderation, extending prior work on multimodal content detection and child online safety. Concurrently serving as a Teaching Assistant for Distributed Systems (CS582) — running tutorials and office hours on consensus algorithms, replication, and fault tolerance, designing interactive browser-based educational games, and contributing to course content development.",
    tags: ["LLM Safety", "Content Moderation", "Distributed Systems"],
  },
  {
    title: "Teaching Assistant / Head TA",
    org: "LUMS — Network Centric Computing, Introduction to Blockchain, Fundamentals of Computer Science",
    when: "Sep 2024 - May 2026",
    detail:
      "Led and coordinated TA teams for classes of 200-300+ students, managing grading consistency, tutorial scheduling, and office hour coverage. Co-designed assignments, lab modules, and course content with faculty, including redesigning curriculum components for Fundamentals of CS to strengthen OOP instruction. Ran weekly tutorials on distributed/web programming, blockchain consensus algorithms, and smart contracts, and reviewed student code for efficiency and secure transaction design.",
    tags: ["Teaching", "Curriculum Design", "Blockchain"],
  },
  {
    title: "VSI Data Analytics Intern",
    org: "Systems Limited",
    when: "Jun 2025 - Jul 2025",
    detail:
      "Developed and automated ETL workflows using SSIS, improving data integration efficiency and pipeline reliability. Analyzed large datasets to identify performance bottlenecks and implemented data validation processes, gaining foundational experience in data management frameworks applicable to large-scale robotics data pipelines.",
    tags: ["SSIS", "ETL", "SQL"],
  },
  {
    title: "Research Assistant",
    org: "LUMS — with Dr. Zartash Afzal",
    when: "May 2024 - Aug 2024",
    detail:
      "Contributed to a four-person team redesigning the 'Fundamentals of Computer Science' curriculum. Won a grant worth PKR 500,000 to rebuild course content against new guidelines and introduce AI tools into the classroom.",
    tags: ["Curriculum Design", "Grant"],
  },
];

export const AWARDS = [
  { title: "Dean's Honor List — all 4 years", org: "LUMS", when: "Sep 2022 - Jun 2026" },
  {
    title: "LUMS Learning Institute Design and Innovation Grant — PKR 500,000",
    org: "LUMS",
    when: "Jun 2024",
  },
  {
    title: "Merit Scholarship 100%",
    org: "Lahore Grammar School Johar Town",
    when: "Sep 2020 - May 2022",
  },
  { title: "Science Society President", org: "Beaconhouse", when: "Sep 2019 - May 2020" },
];

export const SKILLS = {
  languages: ["C", "C++", "Python", "SQL", "C#", "Go", "Solidity", "Java", "JavaScript"],
  tools: [
    "Unity",
    "ROS",
    "Gazebo",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "SSIS",
    "SSMS",
    "Git",
    "Kaggle",
    "Docker",
  ],
  focus: [
    "Cloud/GPU Compute",
    "Docker",
    "Distributed Systems",
    "Multimodal LLM Pipelines",
    "ETL & Data Pipelines",
  ],
};

export const INTERESTS = ["Gaming", "Robotics", "Formula 1", "Football", "Reading", "Writing"];

