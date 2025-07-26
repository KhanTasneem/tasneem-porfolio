"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Smartphone, ChevronDown, Menu, X } from 'lucide-react';

// Type definitions
interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 95, icon: Code },
    { name: 'React/Next.js', level: 90, icon: Globe },
    { name: 'Node.js/Express', level: 85, icon: Database },
    { name: 'Python/Django', level: 80, icon: Code },
    { name: 'React Native', level: 75, icon: Smartphone },
    { name: 'PostgreSQL/MongoDB', level: 85, icon: Database }
  ];

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: '#',
      live: '#',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Business intelligence dashboard with machine learning insights, data visualization, and predictive analytics capabilities.',
      tech: ['Python', 'FastAPI', 'React', 'TensorFlow', 'D3.js'],
      github: '#',
      live: '#',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  const experience: Experience[] = [
    {
      company: '3Di Systems Solutions Pvt. Ltd.',
      position: 'Software Engineer',
      period: '09/2023 - 06/2025',
      description: 'Lead development of microservices architecture serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.'
    },
    {
      company: 'House of Gaming',
      position: 'Software Engineer',
      period: '12/2022 - 06/2023',
      description: 'Built scalable web applications from scratch. Collaborated with design team to create responsive, user-friendly interfaces.'
    },
    {
      company: 'Homesfy - Craft Financial Advisors Pvt. Ltd',
      position: 'Software Engineer',
      period: '10/2020 - 11/2022',
      description: 'Developed client websites and web applications using modern JavaScript frameworks. Optimized performance and SEO.'
    },
    {
      company: 'Homesfy - Craft Financial Advisors Pvt. Ltd',
      position: 'Internship',
      period: '03/2020 - 10/2020',
      description: 'Developed client websites and web applications using modern JavaScript frameworks. Optimized performance and SEO.'
    }
  ];

  const scrollToSection = (sectionId: SectionId): void => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isLoaded ? 'translate-y-0' : '-translate-y-full'} bg-black/20 backdrop-blur-md border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tasneem Khan
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item: string) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() as SectionId)}
                  className={`hover:text-blue-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item: string) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() as SectionId)}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tasneem Khan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Software Engineer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto px-4">
            Turning ideas into smooth, scalable web experiences — with clean code, clear structure, and a passion for building things that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View My Work
            </button>
            <button className="px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate software engineer with 5+ years of experience building 
                web applications and mobile solutions. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge through 
                technical writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
                  <Code size={120} className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill: Skill, index: number) => {
              const Icon = skill.icon;
              return (
                <div key={`${index}_${skill.name}`} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <Icon size={32} className="text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <div key={`${index}_${project.title}`} className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="h-48 relative overflow-hidden" style={{ background: project.image }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a href={project.github} className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job: Experience, index: number) => (
              <div key={`${index}_${job.company}`} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{job.position}</h3>
                    <h4 className="text-lg font-semibold text-gray-300">{job.company}</h4>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects. 
            Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:alex@example.com" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Tasneem Khan. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;