export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  cover: string;          // /projects/filename.jpg in /public
  links?: { github?: string; demo?: string; paper?: string };
  body?: string;          // optional short markdown-ish text
};

export const projects: Project[] = [
  {
    slug: "youtube-kids-ad-detection",
    title: "Cost-Effective Multimodal LLM Detection of Inappropriate YouTube Advertising",
    year: "2025",
    summary: "Large-scale study using multimodal LLMs and a novel DAVSP pipeline to detect inappropriate YouTube ads for children, achieving near state-of-the-art accuracy at 21x lower cost.",
    tags: ["LLM", "Child Safety", "Cost Optimization", "AI Ethics", "Computer Vision"],
    cover: "/yt-llms.png",
    body: `First large-scale evaluation of multimodal Large Language Models (LLMs) for detecting inappropriate advertising in child-oriented YouTube content, covering 2,466 ads across 10 countries and over 50 languages. We introduced DAVSP — Dynamic Adaptive Visual-Semantic Processing — a novel frame sampling pipeline that, when combined with audio transcriptions and ad metadata, reduced moderation costs by 21.4x while keeping accuracy within 1 percentage point of full video processing. \nOur analysis benchmarked Gemini 2.5 Flash, Claude 4 Sonnet, and GPT-4o on multilingual ad classification, revealing modality-specific failure patterns and key trade-offs between cost and accuracy. The system supports multilingual, cross-cultural moderation, translating transcripts to English for up to a 4-point F1 boost, and achieved an overall 0.89 F1 score with scalable deployment potential. The updated dataset — re-annotated with 2025 YouTube policy changes — and codebook are released to support future research. This work provides a practical blueprint for low-cost, high-coverage AI moderation pipelines that can adapt to evolving policies and protect children at global scale.`
  },

  {
    slug: "mobile-robotics-research",
    title: "Entropy-Adaptive Bayesian Filtering for Real-Time Gesture Recognition",
    year: "2025",
    summary: "A novel hybrid architecture (AB-ConvNet) coupling a 1D CNN with an Entropy-Adaptive Bayesian Filter to enable robust, low-latency sEMG gesture control for the Shadow Hand robot.",
    tags: ["Robotics", "Deep Learning", "Human-Computer Interaction", "sEMG", "Bayesian Filtering"],
    cover: "/mobile_robotics_cover.png",
    links: {
      paper: "/papers/mobile_robotics_paper.pdf"
    },
    body: `This research presents **AB-ConvNet**, a robust framework for controlling the **Shadow Hand** robotic system using surface electromyography (sEMG) signals.
        
        Traditional deep learning models often suffer from "jitter" and latency when processing noisy physiological signals. Our solution integrates a lightweight **1D Convolutional Neural Network** with a novel **Entropy-Adaptive Bayesian Filter**. 
        
        **Key Contributions:**
        - Uses Shannon entropy from the CNN output to dynamically scale the Bayesian update rate.
        - Achieved **90.6% classification accuracy** on specific gesture sets.
        - Reduced prediction jitter by **5x** compared to raw predictions without sacrificing responsiveness.
        - Validated in a PyBullet simulation environment controlling a high-DOF dexterous robotic hand.
        
        The system enables smooth, real-time control of prosthetic or teleoperated hands, effectively "coasting" through transient signal noise.`
  },


  {
    slug: "autonomous-trash-skimming-boat",
    title: "Autonomous Trash-Skimming Boat Using Lightweight YOLO",
    year: "2025",
    summary:
      "A low-cost autonomous boat retrofitted with a camera, Jetson Nano, and Arduino to detect and collect floating trash using a lightweight YOLOv12s model. Features hybrid offboard inference and real-time navigation control.",
    tags: ["Computer Vision", "Robotics", "YOLO", "Embedded Systems", "Environmental AI"],
    cover: "/trash-skimming-boat.png", // save your chosen banner/cover image here
    links: {
      github: "https://github.com/Abdullah-Aseeef/trash_skimming_boat",
      paper: "/papers/trash_skimming_boat.pdf" // optional if you want to link the PDF
    },
    body: `
      This project addresses the environmental challenge of floating waste in urban waterways by developing an autonomous trash-skimming boat.
      The system uses a lightweight YOLOv12s model to detect debris and navigate toward it in real time. The hardware setup integrates a Jetson Nano (2GB),
      Arduino motor controller, and MIPI CSI camera. Due to memory constraints on the Nano, inference is performed on an offboard laptop, with detection
      results transmitted back to the boat for actuation.
      
      We trained our detection model primarily on the **Trash in Water Channels** dataset, improving validation mAP from 21.1 to 80.0 and achieving an F1 score of 0.8762.
      The pipeline includes real-time directional control based on bounding box positions, tested successfully in lab conditions.
      
      Future directions include onboard inference with upgraded hardware, autonomous search patterns, reflection-aware detection, and deployment in real aquatic environments.
      `
  },

  {
    slug: "mastani-fetch",
    title: "Mastani: Fetch for Me",
    year: "2025",
    summary:
      "A novel robotic framework leveraging Gemini 2.0 multimodal models for real-time multilingual command interpretation, environment scanning, and autonomous object retrieval on an NVIDIA Jetson Nano platform with integrated robotic arm, Intel RealSense depth camera, and LiDAR.",
    tags: [
      "Robotics",
      "LLM",
      "Object Detection",
      "Navigation",
      "Autonomous Systems"
    ],
    cover: "/mastani.png",
    links: {
      github: "https://github.com/zaeemkhan2002/JDSProject",
      paper: "/papers/Mastani.pdf"
    },
    body: `Mastani: Fetch integrates large video-language models (LLMs) and vision-language models (VLMs) into a real-time robotic pipeline for multilingual voice command understanding, environment scanning, obstacle avoidance, and precision grasping. Implemented on an NVIDIA Jetson Nano, it combines Gemini 2.0 Flash Lite for audio command parsing, Gemini 2.0 VLM for visual object detection, and a Go2Goal navigation algorithm. The system demonstrates robust object retrieval in cluttered indoor environments, pushing the boundary of low-cost, intelligent service robotics.`
  },

  {
    slug: "lumscape",
    title: "LUMScape — Interactive 3D Campus",
    year: "2025",
    summary:
      "An immersive Unity WebGL-based 3D digital twin of the LUMS campus, integrated with real-time event tracking, fast-travel navigation, and interactive building information. Built with Node.js, Express, and MongoDB Atlas, LUMScape modernizes campus navigation by combining an interactive map, event management, and live campus updates in a single platform.",
    tags: [
      "Unity",
      "WebGL",
      "Node.js",
      "MongoDB",
      "Systems"
    ],
    cover: "/lumscape.png",
    links: {
      demo: "https://lumscape.vercel.app/",
      github: "https://github.com/zaeemkhan2002/webgl-unity-build"
    },
    body: `LUMScape is a web-based 3D campus planner that allows students, faculty, and visitors to explore the LUMS campus through an interactive Unity WebGL environment. Users can navigate freely or fast-travel to key locations, view real-time event markers, check menus and timings for eateries, and access prayer schedules at the campus mosque. The system integrates with university event databases for live updates, enabling event discovery, creation, and management. 
       
    The backend, built with Node.js and Express.js, provides RESTful APIs and WebSocket-based real-time communication, while MongoDB Atlas stores location, event, and facility data. The Unity WebGL client is optimized for performance with LOD techniques and efficient texture management. LUMScape replaces static maps with a digital twin of the university, enhancing wayfinding, event engagement, and campus planning with a visually engaging and responsive interface.`
  },

  {
    slug: "platform-stabilization-imu",
    title: "Platform Stabilization with IMU & PD Control",
    year: "2025",
    summary: "A self-leveling handheld platform built with the Tiva C microcontroller, MPU6050 IMU, and servo motors, utilizing a custom PD algorithm for 2-axis stabilization.",
    tags: ["Embedded Systems", "Tiva C", "PD Control", "C/C++", "Robotics"],
    cover: "/imu_stabilization_cover.png",
    links: {
      paper: "/papers/platform_stabilization_3dof_imu.docx"
    },
    body: `This project showcases a complete hardware-software implementation of a 2-axis self-stabilizing platform, designed to keep a circular stage level despite external tilt and rotation.
        
        **Hardware Stack:**
        - **Microcontroller:** Texas Instruments TM4C123GH6PM (Tiva C), handling I2C communication and PWM generation.
        - **Sensor:** MPU6050 IMU (using Accelerometer data for drift-free tilt estimation).
        - **Actuation:** Two continuous servo motors controlling Pitch and Roll axes.
        
        **Technical Implementation:**
        The system runs a **PID (Proportional-Integral-Derivative) control loop** that reads raw sensor data via I2C, computes the error from the zero-degree horizon, and adjusts servo positions over a 50Hz PWM signal. The design includes a custom handheld frame with a battery for portability, demonstrating fundamental mechatronic principles of sensing, feedback, and real-time actuation.`
  },

  {
    slug: "ai-security-cam",
    title: "AI Security Cam — Interactive Local Surveillance",
    year: "2026",
    summary: "A real-time, privacy-preserving security assistant combining YOLO, Whisper, and local LLMs to detect presence, analyze scenes, and hold context-aware conversations without cloud dependencies.",
    tags: ["Computer Vision", "LLM", "Local AI", "Speech Recognition", "Security", "YOLO"],
    cover: "/ai-security-cam.png",
    body: `AI Security Cam is a real-time, multimodal surveillance system that turns a standard lens into an interactive security assistant by combining computer vision, speech recognition, and local large language models.
    
    The system uses a webcam and a YOLO-based detector to instantly identify human presence. Simultaneously, a lightweight vision-language model analyzes the scene, generating hidden contextual descriptions that are fed into a locally running LLM. This allows the assistant to "see" and "understand" its environment before speaking.
    
    **Key Features:**
    - **Interactive Communication:** Uses **Whisper** for transcription and **Piper TTS** for speech generation, enabling natural, low-latency conversations.
    - **Proactive Warnings:** If a detected person remains silent, the system issues context-aware verbal warnings at timed intervals.
    - **Privacy-First Architecture:** All inference runs locally on the GPU with **no cloud dependencies**, ensuring data privacy while maintaining real-time performance.
    
    The result is a fully offline, intelligent security agent capable of distinct presence detection, contextual understanding, and natural human interaction.`
  }
];
