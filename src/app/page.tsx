"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// simple fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" } // ← named easing fixes TS
  }
};

const MotionImage = motion(Image);


const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};
export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <motion.div
        className="relative z-10 px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-16"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        {/* Right column */}
        <motion.div
          className="md:w-1/3 flex flex-col items-center md:items-end order-1 md:order-2"
          variants={fadeUp}
        >
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-300">
            <Image
              src="/profile.jpg"
              alt="Zaeem profile"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm text-[#6b5c5c] text-center md:text-right mt-4">
            <p>555 your office number</p>
            <p>123 your address street</p>
            <p>Your City, State 12345</p>
          </div>
        </motion.div>

        {/* Left column */}
        <motion.div
          className="md:w-2/3 space-y-6 order-2 md:order-1"
          variants={staggerChildren}
        >
          {/* <motion.div variants={fadeUp}>
            <Link href="/projects" className="text-cyan-300 hover:underline">
              View all projects →
            </Link>
          </motion.div> */}

          <motion.h1
            className="text-4xl sm:text-5xl font-bold"
            variants={fadeUp}
          >
            <span className="text-cyan-600">Zaeem</span> Mohtashim Khan
          </motion.h1>

          <motion.p
            className="text-cyan-800 font-medium text-lg"
            variants={fadeUp}
          >
            Computer Science @ LUMS | Robotics Minor
          </motion.p>

          <motion.p className="text-[#ffffff]" variants={fadeUp}>
            I&apos;m an aspiring robotics researcher exploring intelligent
            systems, computer vision, and AI for embodied agents. Passionate
            about autonomy, perception, and robotic learning.
          </motion.p>

          <motion.div
            className="text-[#ffffff] text-sm space-y-1"
            variants={fadeUp}
          >
            <p>
              Email:{" "}
              <a
                href="mailto:zaeemmohtashim@gmail.com"
                className="text-cyan-700 hover:underline"
              >
                zaeemmohtashim@gmail.com
              </a>
            </p>
            <p>Location: Lahore, Pakistan</p>
          </motion.div>

          <motion.div className="flex gap-4 pt-4" variants={fadeUp}>
            <Link
              href="https://github.com/zaeemkhan2002"
              className="text-cyan-700 hover:underline"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/zaeem-mohtashim-khan-893b7b243/"
              className="text-cyan-700 hover:underline"
            >
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Robot */}

        <div className="z-40">
        <MotionImage
          src="/robot.gif"
          alt="Moving robot"
          width={64}
          height={64}
          className="robot-walk"
          initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
        />
      </div>
    </main>
  );
}
