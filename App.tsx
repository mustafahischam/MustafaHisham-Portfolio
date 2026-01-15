import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, EXPERIENCES, SKILLS, PROJECTS } from './constants';
import { Project, Experience } from './types';
import { Github, Linkedin, Mail, ExternalLink, Lock, Menu, X, Code, Terminal, Database, ChevronRight, Download, Smartphone, ArrowUp, Users } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string | React.ReactNode }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"
    />
    <div className="text-secondary max-w-2xl mx-auto px-4">{subtitle}</div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#root" className="text-2xl font-bold text-white tracking-tighter hover:opacity-80 transition-opacity" onClick={(e) => scrollToSection(e, '#root')}>
              MH<span className="text-primary">.</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Resume/Mostafa Hesham Resume (1).pdf"
                target="_blank"
                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/50 px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center gap-2"
              >
                <Download size={14} /> Resume
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-300 hover:text-primary block px-3 py-4 rounded-md text-base font-medium border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Resume/Mostafa Hesham Resume (1).pdf"
                target="_blank"
                className="text-primary hover:text-white hover:bg-white/5 block px-3 py-4 rounded-md text-base font-bold flex items-center gap-2"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TextRotator = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="inline-block relative h-[1.3em] overflow-hidden align-top min-w-[300px] md:min-w-[700px] text-left">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: [0.2, 0.8, 0.2, 1] }} 
          className="absolute top-0 left-0 text-primary font-bold whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="root" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 pointer-events-none"></div>
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[128px]" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

      {/* Hero Image */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <img
          src="/assets/hero silk.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight pt-10">
            Architecting <br className="lg:hidden" />
            <TextRotator words={["Scalable ERP Systems", "Modern E-Commerce", "Enterprise Solutions", "Secure Blockchain"]} />
          </h1>
          
          <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
             With <strong className="text-gray-200">3+ years of specialized experience</strong>, I translate complex business requirements into robust, high-performance software. 
             Expert in Next.js, cloud architecture, and mission-critical systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group relative px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-sky-500 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
            >
              View Featured Work
              <ChevronRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="/Resume/Mostafa Hesham Resume (1).pdf"
              target="_blank"
              className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-16 flex justify-center space-x-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                {link.icon === 'github' && <Github size={28} />}
                {link.icon === 'linkedin' && <Linkedin size={28} />}
                {link.icon === 'mail' && <Mail size={28} />}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-8 md:pl-0 group"
  >
    <div className="md:flex items-start justify-between mb-4">
      <div className="md:w-1/3 mb-2 md:mb-0 md:text-right md:pr-8">
        <span className="text-primary font-mono text-xs uppercase tracking-wider px-2 py-1 bg-primary/10 rounded">{exp.period}</span>
        <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors">{exp.company}</h3>
      </div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/3 w-4 h-4 rounded-full bg-dark border-4 border-primary z-10 -ml-2 md:transform md:-translate-x-1/2 group-hover:scale-125 transition-transform mt-1.5"></div>
      
      <div className="md:w-2/3 md:pl-8 pt-1 border-l-2 border-white/5 md:border-none pl-6 pb-8 md:pb-0">
        <h4 className="text-lg font-semibold text-gray-200 mb-3">{exp.role}</h4>
        <ul className="space-y-3">
          {exp.description.map((item, i) => (
            <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
              <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0 group-hover:bg-primary transition-colors" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/10 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
        <div className="absolute top-4 right-4 flex gap-2">
           <span className="bg-black/60 backdrop-blur-md text-white/90 text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wide">
              {project.category}
            </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 bg-card">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.map(tech => (
            <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-primary/5 text-primary border border-primary/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-6">
          {project.liveUrl ? (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
            >
              <ExternalLink size={16} /> Live Project
            </a>
          ) : (
             <span className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-not-allowed" title="Live demo not available">
              <ExternalLink size={16} /> Live Project
            </span>
          )}

          {project.isPrivate ? (
            <span 
              className="flex items-center gap-2 text-sm font-medium text-amber-500/80 cursor-help ml-auto"
              title="Source code is private due to commercial NDAs."
            >
              <Lock size={14} /> Private Repo
            </span>
          ) : (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors ml-auto"
            >
              <Github size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Mobile' | 'Blockchain' | 'AI'>('All');
  
  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter || (filter === 'Full Stack' && p.category === 'Legacy'));

  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Featured Projects" 
          subtitle={
            <span>
              A brief selection of my <span className="text-white font-semibold">40+ projects</span>. 
              I also have <span className="text-white font-semibold">7+ live commercial projects</span> developed for agencies and companies globally.
            </span>
          }
        />

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {['All', 'Full Stack', 'Mobile', 'Blockchain', 'AI'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.3)] transform scale-105' 
                  : 'bg-card text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-dark to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="The technologies I use to build robust, scalable solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 text-primary">
                  {index === 0 && <Code size={20} />}
                  {index === 1 && <Database size={20} />}
                  {index === 2 && <Terminal size={20} />}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.iconSlug}/ffffff`} 
                      alt={skill.name}
                      className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100 transition-opacity" 
                      loading="lazy"
                    />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-purple-500"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            I'm currently open to discussing new opportunities or consulting on complex architectural challenges.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a 
              href="mailto:mustafahisham1998@gmail.com"
              className="flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-sky-500 transition-all shadow-lg hover:shadow-primary/25"
            >
              <Mail className="mr-2" size={20} /> Send Email
            </a>
            <div className="flex items-center justify-center px-8 py-4 bg-white/5 text-white rounded-xl font-bold text-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer select-all">
              <Smartphone className="mr-2" size={20} /> 01276710187
            </div>
          </div>
          
          <p className="text-sm text-gray-500">Based in Sheikh Zayed City, Egypt • Available Worldwide</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-dark border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-white tracking-tighter">
            MH<span className="text-primary">.</span>
          </span>
          <p className="text-gray-500 text-sm mt-2">Engineering excellence & digital innovation.</p>
        </div>
        <div className="flex space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.icon === 'github' && <Github size={20} />}
              {link.icon === 'linkedin' && <Linkedin size={20} />}
              {link.icon === 'mail' && <Mail size={20} />}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Mostafa Hesham. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-1">
          Built with <span className="text-primary">React</span> & <span className="text-primary">Tailwind</span>
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <SectionHeader title="About Me" subtitle="Engineering Philosophy" />
             <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
               Software Engineer specializing in <span className="text-white font-medium">Next.js</span> and scalable cloud architectures. 
               With a deep focus on performance and security, I optimize data-driven systems for major organizations like the 
               <strong className="text-white"> Central Bank of Egypt</strong>. 
               My approach combines rigorous backend engineering with modern frontend best practices to deliver enterprise-grade solutions.
             </p>
          </div>
        </section>

        <section id="experience" className="py-24 bg-dark relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 md:block hidden"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeader title="Professional Experience" subtitle="Track record of engineering excellence." />
            <div className="space-y-16">
              {EXPERIENCES.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-sky-500 transition-colors z-50"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}