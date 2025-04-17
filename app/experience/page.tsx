export default function Experience() {
  const experiences = [
    {
      role: 'Senior Software Developer',
      company: 'Company Name',
      period: 'Jan 2023 - Present',
      description: [
        'Led development of key features resulting in 30% improvement in user engagement',
        'Mentored junior developers and conducted code reviews',
        'Implemented best practices and modern development workflows'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Previous Company',
      period: 'Jun 2021 - Dec 2022',
      description: [
        'Developed and maintained multiple web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Optimized application performance and reduced load times by 40%'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'First Company',
      period: 'Jan 2020 - May 2021',
      description: [
        'Assisted in developing and maintaining web applications',
        'Participated in daily stand-ups and sprint planning meetings',
        'Learned and implemented new technologies and frameworks'
      ]
    }
  ];

  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Work Experience
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  {exp.role}
                </h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
              <span className="text-gray-400 text-sm">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}