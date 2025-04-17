'use client';

import Link from 'next/link';

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-gray-200 text-xl font-bold hover:text-white transition-colors"
        >
          RB
        </a>
        <div className="flex gap-6">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#resume"
            onClick={(e) => scrollToSection(e, 'resume')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;