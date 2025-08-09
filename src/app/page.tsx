// Home.tsx (React + Tailwind CSS)
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
  <main className="relative min-h-screen text-white">
    <div className="relative z-10 px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left column */}

        
        <Link href="/projects" className="text-cyan-300 hover:underline">
          View all projects →
        </Link>


        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-cyan-600">Zaeem</span> Mohtashim Khan
          </h1>

          <p className="text-cyan-800 font-medium text-lg">
            Computer Science @ LUMS | Robotics Minor
          </p>

          <p className="text-[#ffffff]">
            I&apos;m an aspiring robotics researcher exploring intelligent systems, computer vision, and AI for embodied agents.
            Passionate about autonomy, perception, and robotic learning.
          </p>

          <div className="text-[#ffffff] text-sm space-y-1">
            <p>Email: <a href="mailto:zaeemmohtashim@gmail.com" className="text-cyan-700 hover:underline">zaeemmohtashim@gmail.com</a></p>
            <p>Location: Lahore, Pakistan</p>
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/zaeemkhan2002" className="text-cyan-700 hover:underline">GitHub</Link>
            <Link href="https://linkedin.com/in/zaeem-mohtashim-khan-893b7b243/" className="text-cyan-700 hover:underline">LinkedIn</Link>
            {/* <Link href="https://twitter.com/your-twitter" className="text-cyan-700 hover:underline">Twitter</Link> */}
          </div>
        </div>

        {/* Right column */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-300">
            <Image
              src="/profile.jpg"
              alt="Zaeem profile"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm text-[#6b5c5c] text-right mt-4">
            <p>555 your office number</p>
            <p>123 your address street</p>
            <p>Your City, State 12345</p>
          </div>
        </div>
      </div>

      {/* News Section */}
      {/* <div className="max-w-6xl mx-auto mt-20 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-[#3b2f2f]">news</h2>
        <ul className="space-y-3 text-[#5a4c4c]">
          <li><span className="font-semibold text-[#3b2f2f]">Jan 15, 2025</span> – Just launched my robotics paper 🚀</li>
          <li><span className="font-semibold text-[#3b2f2f]">Nov 07, 2024</span> – Started RA at XYZ Robotics Lab</li>
        </ul>
      </div> */}

      <Image
        src="/robot.gif"
        alt="Moving robot"
        width={64}
        height={64}
        className="robot-move"
      />
    </main>
  );
}
