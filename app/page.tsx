import Image from "next/image";
import Link from "next/link";

import SocialIcons from '@/components/SocialIcons';
import CompanyLogos from '@/components/CompanyLogos';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">
            Hi, I'm Rishit Butola
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            A passionate developer focused on creating impactful digital experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-16">
            <CompanyLogos />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm Rishit Butola, a passionate developer with a keen interest in building innovative solutions. 
              I love tackling complex problems and turning ideas into reality through clean, efficient code.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 rounded p-3 text-center">
                <span className="text-gray-300">JavaScript</span>
              </div>
              <div className="bg-gray-700 rounded p-3 text-center">
                <span className="text-gray-300">React</span>
              </div>
              <div className="bg-gray-700 rounded p-3 text-center">
                <span className="text-gray-300">Node.js</span>
              </div>
              <div className="bg-gray-700 rounded p-3 text-center">
                <span className="text-gray-300">TypeScript</span>
              </div>
              <div className="bg-gray-700 rounded p-3 text-center">
                <span className="text-gray-300">Next.js</span>
              </div>
              <div className="bg-gray-700 rounded p-3 text-center">
                <span className="text-gray-300">TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-400 mb-4">Description of the project goes here. What was built and what technologies were used.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">Demo</a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
              <p className="text-gray-400 mb-2">Company Name • 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                <li>Implemented responsive designs and optimized application performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
          <p className="text-gray-300 mb-8">Download my resume to learn more about my experience and skills.</p>
          <a 
            href="#" 
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <SocialIcons className="justify-center mb-8" />
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Rishit Butola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
