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
        title: "Safeguarding Children at Scale: Cost-Effective Multimodal LLM Detection of Inappropriate YouTube Advertising",
        year: "2025",
        summary: "Large-scale study using multimodal LLMs and a novel DAVSP pipeline to detect inappropriate YouTube ads for children, achieving near state-of-the-art accuracy at 21x lower cost.",
        tags: ["Multimodal LLM", "Computer Vision", "Child Safety", "AI Ethics", "Cost Optimization"],
        cover: "/yt-llms.png",
        body: "First large-scale evaluation of multimodal LLMs for detecting harmful ads in child-oriented YouTube content across 10 countries. Introduced DAVSP, a dynamic frame sampling pipeline, reducing costs over 21x with <1% drop in accuracy. Achieved 0.89 F1 while supporting multilingual and scalable moderation."
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
      slug: "lumscape",
      title: "LUMScape — Interactive 3D Campus",
      year: "2025",
      summary:
        "Unity scene of LUMS with live events overlay and guided navigation.",
      tags: ["Unity", "3D", "Systems"],
      cover: "/projects/lumscape.jpg",
      links: { demo: "#", github: "#" }
    }
  ];
  