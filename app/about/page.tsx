export default function About() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        About Me
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Who I Am
          </h2>
          <p className="text-gray-300 mb-4">
          I'm Rishit Butola, a software developer driven by a passion for innovation.
          My core interest lies in architecting and building impactful solutions.
          I enjoy the challenge of complex problem-solving and take pride in writing clean, efficient code to bring concepts to life.
          Beyond coding, I'm committed to continuous learning and value opportunities to both gain and share knowledge with fellow developers.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">Python</span>
            </div>
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">React/NextJs</span>
            </div>
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">Node.js</span>
            </div>
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">TypeScript</span>
            </div>
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">Java/JavaScrpit</span>
            </div>
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">TailwindCSS</span>
            </div>
            <div className="bg-gray-700 rounded p-3 text-center">
              <span className="text-gray-300">C/C++</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-200 font-medium">Bachelor's Degree in Information and Science Engineering</h3>
              <p className="text-gray-400">New Horizon College of Engineering • 2023-2027</p>
            </div>
            <div>
              <h3 className="text-gray-200 font-medium">11th and 12th grade </h3>
              <p className="text-gray-400">Narayana • 2020-2022 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}