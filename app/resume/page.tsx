export default function Resume() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Resume
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-8 text-center">
          <p className="text-gray-300 mb-4">
            Download my complete resume to learn more about my experience, skills, and qualifications.
          </p>
          <a 
            href="/path-to-your-resume.pdf" 
            download
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Professional Summary
          </h2>
          <p className="text-gray-300">
            Dedicated and results-driven software developer with expertise in modern web technologies.
            Proven track record of delivering high-quality solutions and collaborating effectively with cross-functional teams.
            Passionate about creating efficient, scalable applications and staying current with industry trends.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-200 font-medium mb-2">Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Full Stack Development</li>
                <li>React.js & Next.js</li>
                <li>Node.js & Express</li>
                <li>Database Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-200 font-medium mb-2">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Problem Solving</li>
                <li>Team Leadership</li>
                <li>Project Management</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}