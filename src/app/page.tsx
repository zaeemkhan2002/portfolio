"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

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
    <main className="relative min-h-screen pt-12 md:pt-20 pb-12 flex justify-center p-6 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">

        {/* Left Column: Text Content */}
        <motion.div
          className="order-2 md:order-1 space-y-8"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">


            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white"
              variants={fadeUp}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                Zaeem
              </span>{" "}
              <span className="block sm:inline text-slate-200">Khan</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl font-medium text-slate-400"
              variants={fadeUp}
            >
              CS @ LUMS <span className="text-slate-600 px-2">|</span> Robotics & LLMs
            </motion.p>
          </div>


          <motion.div variants={fadeUp} className="relative py-2">
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                <h3 className="text-purple-200 font-semibold tracking-wide text-sm uppercase">
                  Latest Research Update
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                My paper{" "}
                <span className="font-semibold text-cyan-200">
                  &quot;Safeguarding Children at Scale&quot;
                </span>{" "}
                has been accepted to the{" "}
                <span className="font-semibold text-white">
                  Web4Good track at TheWebConference 2026
                </span>
                !
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-2xl"
            variants={fadeUp}
          >
            <p>
              I am a senior Computer Science student at <span className="text-cyan-200 font-medium">LUMS</span> with a minor in Robotics, passionate about how intelligent agents can safely collaborate with humans. My research lies at the intersection of <span className="text-cyan-200 font-medium">Distributed Systems</span>, <span className="text-purple-200 font-medium">Large Language Models</span>, and <span className="text-cyan-200 font-medium">Embodied AI</span>.
            </p>
            <p>
              My work spans from optimizing LLMs for child-safe content moderation on YouTube to building autonomous trash-skimming boats and sEMG-controlled prosthetic hands. These experiences have taught me to balance theoretical models with the noisy constraints of the real world.
            </p>
            <p>
              Driven by a desire to create systems that understand context and handle uncertainty, I aim to build robots that function not just as tools, but as reliable partners.
            </p>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={fadeUp}
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-900/20"
            >
              View Projects
            </Link>

            <div className="flex gap-3">
              <a
                href="https://github.com/zaeemkhan2002"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:scale-105 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/zaeem-mohtashim-khan-893b7b243/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all hover:scale-105 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
          variants={fadeUp}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Abstract decorative circles */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse" />

            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-slate-700/50 shadow-2xl bg-slate-900">
              <Image
                src="/profile.jpg"
                alt="Zaeem Mohtashim Khan"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-2xl shadow-xl max-w-[200px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs text-slate-400">Current Focus</p>
              <p className="text-sm font-semibold text-cyan-300">AI Safety & Embodied Intelligence</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Robot - subtle placement */}
      <div className="z-40 pointer-events-none">
        <MotionImage
          src="/robot.gif"
          alt="Moving robot"
          width={64}
          height={64}
          className="robot-walk drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </div>
    </main>
  );
}
