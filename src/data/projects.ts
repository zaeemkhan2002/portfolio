export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  /** Domain this work sits in — drives the filter rail on /projects */
  category: "AI & Safety" | "Robotics" | "Systems" | "Embedded";
  /** True for work done as research (published, submitted, or lab-supervised) */
  research?: boolean;
  /** Optional venue badge, e.g. "WWW 2026" */
  venue?: string;
  /** Optional progress badge, e.g. "Accepted" or "In progress" */
  status?: string;
  /** How that badge reads: a result to celebrate, or work still in flight */
  statusTone?: "positive" | "pending";
  /** Surfaced on the home page */
  featured?: boolean;
  /** /projects/filename.png in /public — omit to render generated cover art */
  cover?: string;
  links?: { github?: string; demo?: string; paper?: string };
  body?: string; // optional short markdown-ish text
};

export const projects: Project[] = [
  {
    slug: "misleading-thumbnails",
    title:
      "Separating Clicks from Baits: LLMs for Detecting Misleading YouTube Thumbnails",
    year: "2027",
    category: "AI & Safety",
    research: true,
    venue: "ICWSM 2027",
    featured: true,
    summary:
      "A multi-modal LLM pipeline that flags misleading YouTube thumbnails, benchmarking locally-run open-weight vision-language models against proprietary frontier models on 2,843 videos from eight countries.",
    tags: ["LLM", "Vision-Language", "Content Integrity", "Benchmarking", "Open-Weight Models"],
    links: { paper: "https://arxiv.org/abs/2607.23739" },
    body: `**Accepted at ICWSM 2027** — Wajiha Naveed, Muhammad Muneeb Pervez*, Zaeem Mohtashim Khan*, Zafar Ayyub Qazi, Zartash Afzal Uzmi (*equal contribution).

    A thumbnail is a promise. This work asks how often that promise is broken, and whether a language model can tell.

    We propose a multi-modal LLM pipeline that jointly reasons over a video's thumbnail, title, and content signals to decide whether the thumbnail misrepresents what the viewer will actually get. The study spans a cross-cultural dataset of **2,843 videos from eight countries**, deliberately built so that findings do not collapse into a single language or media culture.

    **My contribution:**
    - Led the evaluation of open-weight, locally-run vision-language models — **LLaVA-v1.5** and **Qwen2.5-VL-7B-Instruct** — against proprietary frontier models, isolating where a self-hosted deployment holds up and where it quietly degrades.
    - Benchmarked local model performance on **1,359 misleading-thumbnail videos with a combined 7.6 billion views**, so the error analysis is weighted by real audience exposure rather than raw video counts.
    - Produced the failure analysis and deployment recommendations: which model classes are viable for platforms that cannot ship user data to a third-party API, and what accuracy that independence costs.

    The practical takeaway is that misleading-thumbnail detection is largely reachable without frontier-scale inference, which matters for moderation teams operating under privacy, budget, or jurisdiction constraints.`,
  },

  {
    slug: "youtube-kids-ad-detection",
    title:
      "Safeguarding Children at Scale: Cost-Effective Multimodal LLM Detection of Inappropriate YouTube Advertising",
    year: "2026",
    category: "AI & Safety",
    research: true,
    venue: "WWW 2026 · Web4Good",
    featured: true,
    summary:
      "A large-scale study using multimodal LLMs and the DAVSP frame-sampling pipeline to detect inappropriate YouTube ads on children's content — near state-of-the-art accuracy at ~21x lower inference cost.",
    tags: ["LLM", "Child Safety", "Cost Optimization", "AI Ethics", "Computer Vision"],
    cover: "/yt-llms.png",
    links: { paper: "https://dl.acm.org/doi/10.1145/3774904.3793040" },
    body: `**Accepted at The Web Conference (WWW) 2026, Web4Good track — a top-tier (A*) venue.** Eman Nabeel*, Shizza Asher*, Haleema Jamil*, Zaeem Mohtashim Khan*, Nida Tanveer, Ihsan Ayyub Qazi, Zafar Ayyub Qazi (*equal contribution).

    The first large-scale evaluation of multimodal Large Language Models for detecting inappropriate advertising in child-oriented YouTube content, covering **2,466 ads across 10 countries and over 50 languages**.

    **DAVSP — Dynamic Adaptive Visual-Semantic Processing** is the core contribution: a frame-sampling pipeline that, combined with audio transcriptions and ad metadata, cut moderation cost by **~21x** while staying within **~1 F1 point** of full-video processing. The dataset was re-annotated under updated 2025 YouTube child-safety policies with strong inter-annotator agreement (**κ = 0.903**).

    **Findings:**
    - Benchmarked Gemini 2.5 Flash, Claude 4 Sonnet, and GPT-4o on multilingual ad classification, surfacing modality-specific failure patterns and the real cost/accuracy frontier.
    - Translating transcripts to English delivered up to a **4-point F1 boost**, supporting genuinely cross-cultural moderation.
    - Achieved an overall **0.89 F1** with a deployment profile that scales.

    The re-annotated dataset and codebook are released to support future research. Together this is a practical blueprint for low-cost, high-coverage moderation pipelines that can keep pace with policies as they change.`,
  },

  {
    slug: "multi-turn-tutor-jailbreaks",
    title:
      "Just One More Question: Multi-Turn Jailbreaks Against LLM Tutors for Children",
    year: "2026",
    category: "AI & Safety",
    research: true,
    status: "In progress",
    featured: true,
    summary:
      "A red-teaming study of whether a child-tutor persona survives a whole conversation: 24 named jailbreak strategies crossed with 84 benchmark questions, 2,016 five-turn conversations against each of three frontier models.",
    tags: ["LLM Safety", "Child Safety", "Red Teaming", "Multi-Turn Jailbreaks", "Evaluation"],
    body: `**Paper in preparation**, targeting the Responsible Web track at **WWW 2027**. First author.

    Parents and teachers increasingly turn a general-purpose cloud LLM into a children's tutor the cheapest way available: wrap it in a short persona prompt — "you are a friendly math tutor for my 12-year-old" — and hand it over. Benchmark evidence says signalling a young user really does make single-turn answers more age-appropriate. The open question is whether the persona still holds once the conversation keeps going.

    Mostly, it does not.

    **The pipeline.** An adaptive attacker model converses for five turns with a target configured as a 12-year-old's tutor, using a persona adapted from MinorBench. We cross **84 harmful questions** from MinorBench and KIDBench, spanning six harm categories, with **24 named jailbreak strategies** drawn from published attacks and jailbreak taxonomies — roleplay and fiction, authority and trust appeals, persuasion, distancing and reverse framing, format tricks, and word substitution. Full crossing means a difference in break rate can be attributed to the strategy rather than to the question, and yields **2,016 conversations per model**.

    **Judging.** An LLM judge labels every tutor reply as a break, a refusal, or a helpful response, agreeing with human annotators at **Cohen's κ ≈ 0.8**. Scoring turn by turn rather than per conversation is what lets us ask not only whether a tutor breaks, but **when**.

    **What we found.** By the fifth turn a break appears in **47% of conversations on Gemini 3.5 Flash-Lite, 71% on GPT-6 Luna, and 41% on Claude Haiku 5.5** — 31%, 60%, and 31% counting only substantive breaks. Most broken conversations break within the first three turns, so the persona does not erode slowly under pressure; it gives way early.

    **Does a better prompt save it?** A system-prompt ablation on Gemini adds MinorBench-style constraints cumulatively — Socratic step-by-step guidance, then a restriction to on-topic questions. The share of conversations containing a break falls from **52% to 37% to 29%**. Better, but nearly three in ten conversations still break under the most restrictive prompt. A persona prompt on its own is not a child-safety mechanism.

    We release the question and strategy sets, every conversation, and the attacker and judge prompts, so the evaluation can be rerun as models change.`,
  },

  {
    slug: "bagel-prompt-guardrails",
    title:
      "BAGEL: Efficient and Adaptable Detection of Malicious LLM Prompts via Bootstrap Aggregation",
    year: "2026",
    category: "AI & Safety",
    research: true,
    venue: "OSDI 2026 · Poster",
    status: "Accepted",
    statusTone: "positive",
    summary:
      "An ensemble of 86M-parameter classifiers, routed by a fine-tuned DistilBERT, that matches billion-parameter LLM guardrails at a fraction of the cost — and absorbs a new attack family with one fine-tune instead of a retrain.",
    tags: ["LLM Safety", "Guardrails", "Ensemble Methods", "DistilBERT", "Efficiency"],
    links: { paper: "/papers/bagel-osdi26-poster.pdf" },
    body: `**Accepted as a poster at OSDI 2026**, a top-tier (A*) systems venue. The extended paper is under double-blind review at **ICLR 2027**. Shayan Ali Hassan, Zaeem Mohtashim Khan, Tao Ni, Zafar Ayyub Qazi, Marco Canini (KAUST, LUMS).

    Guardrails for malicious prompts force an awkward trade. Black-box moderation APIs are easy to deploy but opaque and slow to adapt; white-box LLM judges are accurate but expensive to run and need retraining whenever a new attack family appears.

    **BAGEL** — Bootstrap AGgregated Ensemble Layer — takes a third path: an ensemble of small specialists we call **promptcops**, each an 86M-parameter model fine-tuned on a different attack dataset. At inference it scores a prompt with a stochastically selected subset of the ensemble rather than all of it, borrowing the variance reduction of bagging. When a new attack family shows up, BAGEL absorbs it by fine-tuning one more promptcop and adding it in.

    **What I worked on:**
    - **The learned router.** We fine-tune **DistilBERT** (66M) to predict which promptcop best suits an incoming prompt, then substitute it for one of the random draws — mixture-of-experts precision with the ensemble still underneath as a safety net when the router guesses wrong. The nine source datasets differ in size by roughly 243x, so the router trains under a class-weighted loss to stop it collapsing onto the largest one.
    - **Threshold calibration.** Each promptcop is fine-tuned independently, so their output probabilities share no common decision boundary. We calibrate a threshold per promptcop on a held-out split of its own training data and recenter it at 0.5 before averaging — rather than assuming one global cutoff sits correctly on every member's probability scale.
    - **Multi-turn evaluation.** I built the multi-turn analysis over 2,400 adversarial conversations drawn from MHJ, SafeMTData, and MTID, comparing a full-conversation strategy against chunk-level scoring. Using only the single-turn promptcops — so genuinely zero-shot on conversational attacks — BAGEL reaches **F1 0.660**, ahead of billion-parameter baselines that post low false-positive rates only by letting attacks through.
    - Plus the major rewrites that carried the work from the OSDI poster to the current paper.

    **Headline results.** On a held-out, source-disjoint test set built entirely from datasets never used in training or calibration — so the numbers reflect out-of-distribution generalization rather than memorization — BAGEL reaches **F1 0.757 at a 430M-parameter equivalent**, rising to **0.772 at 324M** with the router and fewer ensemble members. That outperforms popular black-box moderation APIs and most white-box baselines, at lower cost.

    The broader claim is that ensembles of small, specialized classifiers can be efficient, interpretable, and adaptable at once — which is what a guardrail has to be when the attacks keep moving.`
  },

  {
    slug: "mobile-robotics-research",
    title: "Entropy-Adaptive Bayesian Filtering for Real-Time Gesture Recognition",
    year: "2025",
    category: "Robotics",
    research: true,
    summary:
      "AB-ConvNet — a hybrid architecture coupling a 1D CNN with an entropy-adaptive Bayesian filter for robust, low-latency sEMG gesture control of the Shadow Hand, cutting prediction jitter 5x.",
    tags: ["Robotics", "Deep Learning", "Human-Robot Interaction", "sEMG", "Bayesian Filtering"],
    cover: "/mobile_robotics_cover.png",
    links: {
      paper: "/papers/mobile_robotics_paper.pdf",
    },
    body: `This research presents **AB-ConvNet**, a framework for controlling the **Shadow Hand** robotic system from surface electromyography (sEMG) signals.

    Deep models trained on noisy physiological signals tend to jitter: they commit hard to a class every timestep, so a moment of sensor noise becomes a visible twitch in the hand. Our solution pairs a lightweight **1D Convolutional Neural Network** with a novel **entropy-adaptive Bayesian filter** that holds a belief over intent instead of a verdict.

    **Key contributions:**
    - Uses Shannon entropy of the CNN output to dynamically scale the Bayesian update rate — the filter trusts confident predictions and coasts through uncertain ones.
    - Achieved **90.6% classification accuracy** on the target gesture sets.
    - Reduced prediction jitter **5x** versus raw predictions without sacrificing responsiveness.
    - Validated in a PyBullet simulation controlling a high-DOF dexterous robotic hand.

    **Where it's going:** the approach now anchors an ongoing proposal on a *Hybrid Bayesian-Deep Learning Framework for Intent-Aware Prosthetic Control*, fusing compact sEMG intent classification with a recursive Bayes filter and targeting validation on the public **NinaPro** dataset in 3D simulation. The hypothesis under test is that maintaining an interpretable belief distribution reduces spurious intent switches and improves early detection latency compared to neural-only baselines.`,
  },

  {
    slug: "mastani-fetch",
    title: "Mastani: Fetch for Me",
    year: "2025",
    category: "Robotics",
    research: true,
    summary:
      "A multimodal robotic framework on a DJI RoboMaster platform using Gemini 2.0 for real-time multilingual command interpretation, environment scanning, and autonomous object retrieval in cluttered indoor spaces.",
    tags: ["Robotics", "LLM", "Object Detection", "Navigation", "Autonomous Systems"],
    cover: "/mastani.png",
    links: {
      github: "https://github.com/zaeemkhan2002/JDSProject",
      paper: "/papers/Mastani.pdf",
    },
    body: `Mastani integrates video-language and vision-language models into a real-time robotic pipeline for multilingual voice command understanding, environment scanning, obstacle avoidance, and precision grasping.

    Built on a **DJI RoboMaster** platform with an NVIDIA Jetson Nano compute stack, an integrated robotic arm, Intel RealSense depth camera, and LiDAR, the system combines **Gemini 2.0 Flash Lite** for audio command parsing, a **Gemini 2.0 VLM** for visual object detection, and a Go2Goal navigation algorithm for approach and alignment.

    I designed and integrated the complete software stack, so the robot can take a natural-language request in one of several languages, identify the referenced object in a cluttered scene, navigate to it, and retrieve it. The result demonstrates robust object retrieval in real indoor environments and pushes on what low-cost, intelligent service robotics can do.`,
  },

  {
    slug: "autonomous-trash-skimming-boat",
    title: "Autonomous Trash-Skimming Boat Using Lightweight YOLO",
    year: "2025",
    category: "Robotics",
    research: true,
    summary:
      "A low-cost autonomous boat with a camera, Jetson Nano, and Arduino that detects and collects floating trash using a lightweight YOLO model, with hybrid offboard inference and real-time navigation control.",
    tags: ["Computer Vision", "Robotics", "YOLO", "Embedded Systems", "Environmental AI"],
    cover: "/trash-skimming-boat.png",
    links: {
      github: "https://github.com/Abdullah-Aseeef/trash_skimming_boat",
      paper: "/papers/trash_skimming_boat.pdf",
    },
    body: `This project addresses floating waste in urban waterways with an autonomous trash-skimming boat that detects debris and navigates toward it in real time.

    The hardware integrates a **Jetson Nano (2GB)**, an Arduino motor controller, and a MIPI CSI camera. Memory constraints on the Nano meant inference runs on an offboard laptop, with detection results transmitted back to the boat for actuation — a hybrid split that keeps the platform cheap without giving up model capacity.

    We trained the detector primarily on the **Trash in Water Channels** dataset, improving validation mAP from **21.1 to 80.0** and reaching an **F1 of 0.8762**. The pipeline includes real-time directional control derived from bounding box position, tested successfully in lab conditions.

    Future directions: onboard inference with upgraded hardware, autonomous search patterns, reflection-aware detection, and deployment in real aquatic environments.`,
  },

  {
    slug: "ai-security-cam",
    title: "AI Security Cam — Interactive Local Surveillance",
    year: "2026",
    category: "Systems",
    summary:
      "A real-time, privacy-preserving security assistant combining YOLO, Whisper, and local LLMs to detect presence, analyze scenes, and hold context-aware conversations with no cloud dependencies.",
    tags: ["Computer Vision", "LLM", "Local AI", "Speech Recognition", "Security", "YOLO"],
    cover: "/ai-security-cam.png",
    body: `AI Security Cam turns a standard lens into an interactive security assistant by combining computer vision, speech recognition, and locally-run large language models.

    A webcam feeds a YOLO-based detector that identifies human presence instantly. In parallel, a lightweight vision-language model analyzes the scene and generates hidden contextual descriptions that are passed to a local LLM — so the assistant "sees" and understands its environment before it speaks.

    **Key features:**
    - **Interactive communication:** **Whisper** for transcription and **Piper TTS** for speech generation, enabling natural, low-latency conversation.
    - **Proactive warnings:** if a detected person stays silent, the system issues context-aware verbal warnings at timed intervals.
    - **Privacy-first architecture:** all inference runs locally on the GPU with **no cloud dependencies**, so footage never leaves the machine.

    The result is a fully offline security agent capable of presence detection, contextual understanding, and natural human interaction.`,
  },

  {
    slug: "lumscape",
    title: "LUMScape — Interactive 3D Campus",
    year: "2025",
    category: "Systems",
    research: true,
    summary:
      "An immersive Unity WebGL digital twin of the LUMS campus with real-time event tracking, fast-travel navigation, and live facility data, backed by Node.js, Express, and MongoDB Atlas.",
    tags: ["Unity", "WebGL", "Node.js", "MongoDB", "Systems"],
    cover: "/lumscape.png",
    links: {
      demo: "https://lumscape.vercel.app/",
      github: "https://github.com/zaeemkhan2002/webgl-unity-build",
    },
    body: `LUMScape is a web-based 3D campus planner that lets students, faculty, and visitors explore the LUMS campus through an interactive Unity WebGL environment. Users can navigate freely or fast-travel to key locations, view real-time event markers, check menus and timings for eateries, and access prayer schedules at the campus mosque.

    Built by a 5-person team. The backend — **Node.js** and **Express** — serves RESTful APIs and WebSocket-based real-time communication, while **MongoDB Atlas** stores location, event, and facility data, integrating with university event databases for live updates and event creation and management.

    The Unity WebGL client is optimized with LOD techniques and careful texture management to stay responsive in a browser. The outcome replaces static maps with a digital twin of the university, improving wayfinding, event discovery, and campus planning.`,
  },

  {
    slug: "platform-stabilization-imu",
    title: "Platform Stabilization with IMU & PD Control",
    year: "2025",
    category: "Embedded",
    summary:
      "A self-leveling handheld platform built on the Tiva C microcontroller with an MPU6050 IMU and servo motors, using a custom control loop for 2-axis stabilization.",
    tags: ["Embedded Systems", "Tiva C", "PD Control", "C/C++", "Robotics"],
    cover: "/imu_stabilization_cover.png",
    links: {
      paper: "/papers/platform_stabilization_3dof_imu.docx",
    },
    body: `A complete hardware-software implementation of a 2-axis self-stabilizing platform, designed to keep a circular stage level despite external tilt and rotation.

    **Hardware stack:**
    - **Microcontroller:** Texas Instruments TM4C123GH6PM (Tiva C), handling I2C communication and PWM generation.
    - **Sensor:** MPU6050 IMU, using accelerometer data for drift-free tilt estimation.
    - **Actuation:** two continuous servo motors controlling the pitch and roll axes.

    **Implementation:** the system runs a PID control loop that reads raw sensor data over I2C, computes error against the zero-degree horizon, and adjusts servo positions on a 50Hz PWM signal. A custom handheld frame with an onboard battery makes it portable — a compact demonstration of the sense, feedback, actuate cycle at the heart of mechatronics.`,
  },
];

export const CATEGORIES = [
  "All",
  "Research",
  "AI & Safety",
  "Robotics",
  "Systems",
  "Embedded",
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
