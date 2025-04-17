export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1 and its key features. Highlight the main technologies used and the problem it solves.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/your-project-1'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2 showcasing your development skills and the impact it had. Include key achievements.',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
      link: 'https://github.com/your-project-2'
    },
    {
      title: 'Project 3',
      description: 'Overview of project 3 demonstrating your problem-solving abilities and technical expertise.',
      tech: ['React Native', 'Firebase', 'Redux'],
      link: 'https://github.com/your-project-3'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Projects
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}