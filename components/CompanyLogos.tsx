'use client';

interface CompanyLogosProps {
  className?: string;
}

const CompanyLogos = ({ className = '' }: CompanyLogosProps) => {
  return (
    <div className={`grid grid-cols-2 gap-12 h-[500px] max-w-5xl mx-auto ${className}`}>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/file.svg"
          alt="Featured Image 1"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/globe.svg"
          alt="Featured Image 2"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default CompanyLogos;