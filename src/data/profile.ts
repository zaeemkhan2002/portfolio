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

/** Shown as tags in the hero, in place of the old "Current focus" card. */
export const FOCUS = ["LLM Security", "Child Safety", "Embodied Intelligence"];

/** Degree and result, shown prominently in the hero. */
export const DEGREE = {
  cgpa: "3.90",
  major: "3.97",
  school: "BSc (Hons.) Computer Science, LUMS",
  honor: "High Distinction",
};

export const TAGLINE =
  "I research LLM security and Social AI, auditing safety guardrails and detecting malicious prompts in multi-turn settings. I also design agentic systems, including robots, that reason under uncertainty to act, seek human clarification, or defer.";

export const BIO: string[] = [
  `I work on whether language models hold up under pressure. All three of my papers come at that from a different angle: detecting misleading YouTube thumbnails with vision-language models, cutting the cost of multimodal ad moderation on children's content by ~21x, and building BAGEL, an ensemble guardrail that catches malicious prompts for a fraction of what a billion-parameter judge costs. The current one asks what happens when a child-tutor persona meets a five-turn jailbreak. It does not hold.`,
  `The thread running through all of it is uncertainty. A model that commits hard to a wrong answer is worse than one that knows to hesitate, so I build systems that hold a belief rather than a verdict — a calibrated threshold instead of a global cutoff, an ensemble that recovers when its router guesses wrong, a Bayes filter that coasts through a noisy EMG spike instead of twitching a prosthetic hand. Evaluation gets the same treatment: source-disjoint test sets, turn-level labels, human agreement checks.`,
  `I got here from the other direction. I was the kid who took toys apart to see what made them tick, and that turned into a Robotics minor alongside Computer Science at LUMS — trash-skimming boats, a RoboMaster that fetches things when you ask it to, gesture control for a Shadow Hand. Embodied work is still where my instincts come from, and it is why I care less about benchmark scores than about what a system does on the messy input it was never shown.`,
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
  /** Groups the list: peer-reviewed and accepted, or still under review */
  stage: "published" | "submitted";
  status: string;
  /** Canonical link to the paper */
  url?: string;
  /** Full link text, e.g. "Read on arXiv" */
  urlLabel?: string;
  /** A later version of the same work elsewhere, e.g. an extended paper under review */
  extension?: { venueShort: string; status: string };
  highlights: string[];
  slug?: string; // links to a project page when one exists
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Separating Clicks from Baits: Using Large Language Models to Detect Misleading YouTube Thumbnails",
    authors:
      "Wajiha Naveed, Zaeem Mohtashim Khan*, Muhammad Muneeb Pervez*, Zafar Ayyub Qazi, Zartash Afzal Uzmi",
    venue: "International AAAI Conference on Web and Social Media",
    venueShort: "ICWSM 2027",
    year: "2027",
    note: "*Equal contribution",
    stage: "published",
    status: "Accepted",
    url: "https://arxiv.org/abs/2607.23739",
    urlLabel: "Read on arXiv",
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
      "Zaeem Mohtashim Khan*, Eman Nabeel*, Shizza Asher*, Haleema Jamil*, Nida Tanveer, Ihsan Ayyub Qazi, Zafar Ayyub Qazi",
    venue: "The Web Conference — Web4Good Track",
    venueShort: "WWW 2026",
    year: "2026",
    note: "*Equal contribution · Top-tier (A*) venue",
    stage: "published",
    status: "Accepted",
    url: "https://dl.acm.org/doi/10.1145/3774904.3793040",
    urlLabel: "Read on ACM DL",
    highlights: [
      "Re-annotated a dataset of 2,466 YouTube advertisements under updated 2025 child-safety policies (κ = 0.903).",
      "Proposed DAVSP, a dynamic frame-sampling pipeline reducing multimodal inference cost by ~21x while staying within ~1 F1 point of full-video analysis.",
      "Evaluated multimodal LLMs across video, audio, metadata, and transcripts for scalable detection of inappropriate ads on child-oriented content.",
    ],
    slug: "youtube-kids-ad-detection",
  },
  {
    title:
      "Efficient and Adaptable Detection of Malicious LLM Prompts via Bootstrap Aggregation",
    authors:
      "Shayan Ali Hassan, Zaeem Mohtashim Khan, Tao Ni, Zafar Ayyub Qazi, Marco Canini",
    venue:
      "USENIX Symposium on Operating Systems Design and Implementation — Poster Session",
    venueShort: "OSDI 2026",
    year: "2026",
    note: "Top-tier (A*) systems venue · KAUST, LUMS",
    stage: "published",
    status: "Accepted",
    extension: { venueShort: "ICLR 2027", status: "Extended paper under review" },
    url: "https://arxiv.org/abs/2602.08062",
    urlLabel: "Read on arXiv",
    highlights: [
      "BAGEL detects malicious prompts with an ensemble of 86M-parameter \"promptcop\" classifiers, each fine-tuned on a different attack dataset and sampled stochastically at inference.",
      "Built the DistilBERT router that predicts the best-suited promptcop, and the per-promptcop threshold calibration that recenters each member's decision boundary before aggregation.",
      "Reached F1 0.77 out of distribution with three ensemble members, ahead of ShieldGemma, ToxicDetector and the OpenAI Moderation API, and the highest F1 (0.704) on zero-shot multi-turn attacks.",
      "Audited 14 datasets for exact and near-duplicate overlap, and showed that sharing one embedding table cuts active parameters by up to 55% with no loss in accuracy.",
    ],
    slug: "bagel-prompt-guardrails",
  },
  {
    title:
      "Just One More Question: Multi-Turn Jailbreaks Against LLM Tutors for Children",
    authors: "Zaeem Mohtashim Khan et al.",
    venue: "The Web Conference — Responsible Web Track (full paper)",
    venueShort: "WWW 2027",
    year: "2027",
    note: "First author · under double-blind review",
    stage: "submitted",
    status: "Under review",
    highlights: [
      "Built a multi-turn red-teaming benchmark crossing 84 harmful questions from MinorBench and KIDBench with 24 named jailbreak strategies, giving 2,016 five-turn conversations per model.",
      "Ran an adaptive Gemma-4 31B attacker against Gemini 3.5 Flash-Lite, GPT-6 Luna and Claude Haiku 5.5 configured as tutors for a 12-year-old; 41-71% of conversations broke, roughly 2x the single-turn rate.",
      "Scored every reply with an LLM judge agreeing with human annotators at Cohen's κ ≈ 0.8, finding most broken conversations break within three turns.",
      "Showed a system-prompt ablation cuts breaks from 52% to 29% but still leaves nearly three in ten conversations broken: a persona prompt alone is not a child-safety mechanism.",
    ],
    slug: "multi-turn-tutor-jailbreaks",
  },
  {
    title: "Safe in English, Safe in Urdu? Multi-Turn Safety Benchmarks of LLM Tutors in Urdu",
    authors: "Zaeem Mohtashim Khan et al.",
    venue: "The Web Conference — Responsible Web Track (short paper)",
    venueShort: "WWW 2027",
    year: "2027",
    note: "First author · under double-blind review",
    stage: "submitted",
    status: "Under review",
    highlights: [
      "Asks whether a tutor persona's child-safety behaviour survives translation: 192 question-strategy pairs run three times each in English, Urdu script and Roman Urdu, for 5,184 conversations across three tutors.",
      "Urdu raises Gemini's substantive break rate by 9.9 points in Urdu script and 8.7 in Roman Urdu, GPT-6 Luna's by under 4, and does not make Claude Haiku worse.",
      "The two scripts land within 1.7 points of each other for every tutor, so the gap is a property of the language rather than the script — and Claude's API-level filter fires far less often in Urdu than in English.",
      "Repeated English runs of the same pair disagreed for 25-46% of pairs, so cross-language safety comparisons need paired, repeated runs rather than single passes.",
    ],
  },
  {
    title:
      "Making Room for the Answer: A First Look at What Google's AI Overviews Advertise, Cite, and Displace",
    authors: "Zaeem Mohtashim Khan et al.",
    venue: "ACM Internet Measurement Conference",
    venueShort: "IMC 2027",
    year: "2027",
    note: "First author · under double-blind review",
    stage: "submitted",
    status: "Under review",
    highlights: [
      "First measurement of ads inside Google's AI Overviews: 10,068 English queries on desktop and mobile from US residential connections, each page captured as served, with the AIO removed, and with it expanded.",
      "AI Overviews appeared on 87% of queries, up from 60% eleven months earlier. About one in ten carries a sponsored block, rising to roughly a third on commercial keywords — yet fewer than 1% of those blocks reach the first screen.",
      "Sponsored blocks go where advertisers already bid, and the answer rarely cites them, so we find no evidence that ads inside an AI Overview buy citations.",
      "The space comes from publishers: first-screen organic results lose 74% of their area on desktop while ads lose 44%, and the AIO cites the publishers it displaces less often than those it keeps in view (63% vs 73%).",
      "Releases AIO-Pages, 40,268 rendered results pages with element geometry.",
    ],
    slug: "ai-overviews-ads",
  },
];

export const RESEARCH = {
  org: "LUMS",
  when: "January 2025 - Present",
  threads: [
    {
      title: "Measuring Ads and Displacement in Google's AI Overviews",
      points: [
        "First study of ads inside Google's AI Overviews, across 10,068 queries on desktop and mobile from US residential connections, rendering each page as served, with the AIO removed, and with it expanded.",
        "One in ten AI Overviews carries a sponsored block, and three in ten on commercial queries, but fewer than 1% of these appear in the first viewport.",
        "AI Overviews displace mostly organic results while ads keep their place, and we find no evidence that ads inside them buy citations.",
        "First author; submitted to IMC 2027. Releases AIO-Pages, 40,268 rendered results pages with element geometry.",
      ],
      slug: "ai-overviews-ads",
    },
    {
      title: "Multi-Turn Jailbreaks Against LLM Tutors for Children",
      points: [
        "Built a multi-turn red-teaming pipeline in which an adaptive attacker converses for five turns with a cloud LLM configured as a 12-year-old's tutor, crossing 84 harmful questions from MinorBench and KIDBench with 24 named jailbreak strategies for 2,016 conversations per model.",
        "Measured turn-level outcomes with an LLM judge agreeing with human annotators at Cohen's κ ≈ 0.8, finding breaks in 47%, 71%, and 41% of conversations on Gemini 3.5 Flash-Lite, GPT-6 Luna, and Claude Haiku 5.5 — most within the first three turns.",
        "Ran a system-prompt ablation showing cumulative tutoring constraints cut the share of broken conversations from 52% to 29%, while still leaving nearly three in ten broken: a persona prompt alone is not a child-safety mechanism.",
        "Converted exploratory notebooks into cluster-deployable evaluation scripts on RunPod GPU infrastructure with incremental checkpointing, so long sweeps survive crashes and stay reproducible.",
        "Extended the benchmark to Urdu across 5,184 conversations in English, Urdu script and Roman Urdu: Gemini’s breaks rose by up to 10 points while other models barely changed.",
        "First author; submitted to the Responsible Web track at WWW 2027, with a companion short paper on the Urdu results.",
      ],
      slug: "multi-turn-tutor-jailbreaks",
    },
    {
      title:
        "BAGEL: Bootstrap-Aggregated Ensemble Guardrails for Malicious Prompt Detection",
      points: [
        "Co-developed BAGEL, an ensemble of 86M-parameter promptcop classifiers each fine-tuned on a distinct attack dataset, selected stochastically at inference so that a new attack family costs one additional fine-tune rather than a full retrain.",
        "Built the DistilBERT routing layer that predicts the best-suited promptcop under a class-weighted loss, and the per-promptcop threshold calibration that recenters each member's decision boundary at 0.5 before aggregation.",
        "Led the multi-turn evaluation across 2,400 adversarial conversations from MHJ, SafeMTData, and MTID, showing single-turn promptcops transfer zero-shot to reach F1 0.660 against billion-parameter guardrails.",
        "Accepted as a poster at OSDI 2026, a top-tier (A*) systems venue; co-led the manuscript, evaluation and reviewer rebuttal for the extended paper now under double-blind review at ICLR 2027.",
      ],
      slug: "bagel-prompt-guardrails",
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
        "Co-authored a research paper on a hybrid framework for intent-aware prosthetic arm control, combining discriminative deep learning with probabilistic reasoning.",
        "Built a modular pipeline that fuses a compact neural network for sEMG-based intent classification with a recursive Bayes filter, maintaining a stable, interpretable belief distribution over user intent rather than committing to hard classifications at each timestep.",
        "Evaluated the approach against neural-only baselines on the public NinaPro dataset in a 3D simulation environment.",
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
      "Led and coordinated TA teams for classes of 200-300+ students, managing grading consistency, tutorial scheduling, and office hour coverage. Co-designed assignments, lab modules, and course content with faculty, including redesigning curriculum components for Fundamentals of CS to strengthen OOP instruction. Ran weekly tutorials on distributed/web programming, blockchain consensus algorithms, and smart contracts, reviewed student code for efficiency and secure transaction design, and ran plagiarism checks with tools like JPlag.",
    tags: ["Teaching", "Curriculum Design", "Blockchain"],
  },
  {
    title: "VSI Data Analytics Intern",
    org: "Systems Limited",
    when: "Jun 2025 - Jul 2025",
    detail:
      "Developed and automated ETL workflows using SSIS, improving data integration efficiency and pipeline reliability. Analyzed large datasets to identify performance bottlenecks and implemented data validation processes.",
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

