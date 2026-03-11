import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Flower, 
  Cpu, 
  BrainCircuit, 
  Database, 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Sparkles,
  Wind,
  Award,
  Terminal,
  BarChart3,
  Brain,
  Eye,
  Users,
  Lightbulb,
  ShieldCheck,
  FileCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ProfileImage } from './components/ProfileImage';
import { AIChatAssistant } from './components/AIChatAssistant';

const ProjectCard = ({ title, description, tags, link, image }: { title: string, description: string, tags: string[], link: string, image?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="glass-card rounded-[2.5rem] p-8 flex flex-col border-petal-pink/30 hover:border-pink-300 transition-all duration-500 w-[85vw] sm:w-[60vw] lg:w-[400px] flex-shrink-0 snap-center"
  >
    {image && (
      <div className="w-full h-48 mb-6 rounded-3xl overflow-hidden bg-pink-50/50">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
    )}
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 rounded-full bg-petal-pink flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-pink-600" />
      </div>
      <a href={link} className="p-2 hover:bg-pink-50 rounded-full transition-colors">
        <ExternalLink className="w-5 h-5 text-pink-400" />
      </a>
    </div>
    <h3 className="text-2xl font-serif font-semibold mb-3 text-ink">{title}</h3>
    <p className="text-ink/70 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-white/60 text-[10px] uppercase tracking-widest font-semibold text-pink-700 rounded-full border border-petal-pink/50">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillGroup = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="glass-card rounded-[2rem] p-8 border-petal-pink/20 hover:bg-white/40 transition-all flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-[380px]"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-pink-600" />
      </div>
      <h3 className="text-lg font-serif font-semibold text-ink leading-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1.5 flex items-center bg-pink-50/50 text-[9px] uppercase tracking-widest font-bold text-pink-700 rounded-full border border-pink-200/30">
          <Icon className="w-3 h-3 mr-1.5 opacity-70 flex-shrink-0" />
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const CertificationCard = ({ title, issuer, date, id, logo }: { title: string, issuer: string, date: string, id?: string, logo: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="glass-card rounded-3xl p-6 border-petal-pink/20 flex flex-col sm:flex-row gap-6 items-center hover:bg-white/40 transition-all w-full lg:w-[calc(50%-0.75rem)] max-w-[500px]"
  >
    <div className="w-16 h-16 rounded-2xl bg-white border border-petal-pink/10 p-2 flex-shrink-0">
      <img src={logo} alt={issuer} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start mb-1">
        <h4 className="text-lg font-serif font-semibold text-ink leading-tight">{title}</h4>
        <Award className="w-4 h-4 text-pink-400 flex-shrink-0 ml-2" />
      </div>
      <p className="text-sm text-pink-600 font-medium mb-1">{issuer}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest text-ink/40 font-bold">
        <span>Issued {date}</span>
        {id && <span>ID: {id}</span>}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 432; // card width + gap
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-white via-pink-50 to-pink-200">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/40 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-300/20 blur-[120px] rounded-full" 
        />
        
        {/* Floating Petals */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{ 
              opacity: [0, 0.4, 0], 
              y: ['0vh', '100vh'],
              x: [Math.random() * 100 + 'vw', (Math.random() * 100 - 10) + 'vw'],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 10 
            }}
            className="absolute w-4 h-6 bg-petal-pink/40 petal-shape"
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Flower className="w-6 h-6 text-pink-500" />
          <span className="font-serif text-2xl font-bold tracking-tighter text-ink">Fara<span className="text-pink-500">.</span></span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest text-ink/60">
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a>
          <a href="#publications" className="hover:text-pink-500 transition-colors">Publications</a>
          <a href="#certifications" className="hover:text-pink-500 transition-colors">Certifications</a>
          <a href="#skills" className="hover:text-pink-500 transition-colors">Skills</a>
          <a href="#footer" className="px-6 py-2 bg-ink text-white rounded-full hover:bg-pink-600 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-petal-pink/50 border border-petal-pink text-[10px] font-bold uppercase tracking-[0.2em] text-pink-700 mb-8">
              <Wind className="w-3 h-3" />
              Nurturing Intelligence
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.9] mb-8 tracking-tighter">
              Fariida <br />
              <span className="italic text-pink-500">Qurrota Aini.</span>
            </h1>
            <p className="text-lg text-ink/60 font-light leading-relaxed mb-12 max-w-xl">
              Informatics student from Semarang, Indonesia with a focus on Computer Vision and Quantum Computing. Experienced in training YOLO-based models for object detection and emotion recognition, preparing datasets, and ensuring high-quality labeled data for AI systems.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <a href="#projects" className="px-10 py-4 bg-ink text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
                View My Garden
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com/faraao" target="_blank" rel="noreferrer" className="p-3 glass-card rounded-full hover:bg-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="https://linkedin.com/in/fariida-qurrota-aini" target="_blank" rel="noreferrer" className="p-3 glass-card rounded-full hover:bg-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <ProfileImage />
              </div>
              {/* Decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-dashed border-pink-300 rounded-full z-0"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-24 h-24 border border-pink-200 rounded-full z-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="about" className="relative z-10 py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif">Education <span className="italic">& Roots</span></h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative wrap overflow-hidden p-4 md:p-10">
          <div className="absolute border-opacity-20 border-pink-400 h-full border left-8 md:left-1/2 rounded-full hidden sm:block"></div>

          {/* Right Timeline (Item 1: Udinus) */}
          <div className="mb-12 flex justify-between items-center w-full md:flex-row-reverse right-timeline group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 flex items-center order-1 w-10 h-10 bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.6)] rounded-full border-4 border-white shrink-0 absolute left-3 md:relative md:left-auto group-hover:scale-125 transition-all"></div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="order-1 glass-card rounded-3xl p-8 w-full md:w-5/12 ml-14 md:ml-0 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-petal-pink/30 p-2 shadow-sm shrink-0">
                  <img src="/images/udinus-logo.png" alt="UDINUS Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500 block mb-1">Sep 2023 — Present</span>
                  <h4 className="text-xl md:text-2xl font-serif font-semibold text-ink">Dian Nuswantoro University</h4>
                </div>
              </div>
              <p className="text-sm text-pink-600 font-medium mb-4 italic">Bachelor Degree in Informatics Engineering • GPA 3.66/4.00</p>
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                Actively applying Machine Learning and Deep Learning concepts in various research and practical development projects. Published a peer-reviewed journal article on technology-based mental health applications.
              </p>
            </motion.div>
          </div>

          {/* Left Timeline (Item 2: BEM) */}
          <div className="mb-12 flex justify-between items-center w-full left-timeline group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 flex items-center order-1 w-10 h-10 bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.6)] rounded-full border-4 border-white shrink-0 absolute left-3 md:relative md:left-auto group-hover:scale-125 transition-all"></div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="order-1 glass-card rounded-3xl p-8 w-full md:w-5/12 ml-14 md:ml-0 hover:-translate-y-2 transition-transform duration-300 md:text-right"
            >
              <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-petal-pink/30 p-2 shadow-sm shrink-0">
                  <img src="/images/logo-bem.jpg" alt="BEM FIK Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500 block mb-1">2024 — 2025</span>
                  <h4 className="text-xl md:text-2xl font-serif font-semibold text-ink">Student Executive Board (BEM)</h4>
                </div>
              </div>
              <p className="text-sm text-pink-600 font-medium mb-4 italic">Expert Staff - Student Development Division</p>
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                Coordinated academic capacity-building and soft-skill development programs, enhancing student participation at the faculty level.
              </p>
            </motion.div>
          </div>

          {/* Right Timeline (Item 3: Indosat) */}
          <div className="mb-12 flex justify-between items-center w-full md:flex-row-reverse right-timeline group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 flex items-center order-1 w-10 h-10 bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.6)] rounded-full border-4 border-white shrink-0 absolute left-3 md:relative md:left-auto group-hover:scale-125 transition-all"></div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="order-1 glass-card rounded-3xl p-8 w-full md:w-5/12 ml-14 md:ml-0 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-petal-pink/30 p-2 shadow-sm shrink-0">
                  <img src="/images/logo-indosat.png" alt="Indosat Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500 block mb-1">Internship</span>
                  <h4 className="text-xl md:text-2xl font-serif font-semibold text-ink">Indosat Ooredoo Hutchison</h4>
                </div>
              </div>
              <p className="text-sm text-pink-600 font-medium mb-4 italic">Computer Vision Intern</p>
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                Focused on detecting promotional posters and shop blinds using YOLO-based object detection. Handled dataset preparation, annotation validation, and model performance improvement.
              </p>
            </motion.div>
          </div>

          {/* Left Timeline (Item 4: UNY) */}
          <div className="mb-12 flex justify-between items-center w-full left-timeline group">
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div className="z-20 flex items-center order-1 w-10 h-10 bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.6)] rounded-full border-4 border-white shrink-0 absolute left-3 md:relative md:left-auto group-hover:scale-125 transition-all"></div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="order-1 glass-card rounded-3xl p-8 w-full md:w-5/12 ml-14 md:ml-0 hover:-translate-y-2 transition-transform duration-300 md:text-right"
            >
              <div className="flex items-center gap-4 mb-4 md:flex-row-reverse">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-petal-pink/30 p-2 shadow-sm shrink-0">
                  <img src="/images/logo-uny(1).png" alt="UNY Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500 block mb-1">May 2024</span>
                  <h4 className="text-xl md:text-2xl font-serif font-semibold text-ink">Universitas Negeri Yogyakarta</h4>
                </div>
              </div>
              <p className="text-sm text-pink-600 font-medium mb-4 italic">1st Runner up in Software Development — UNITY #12</p>
              <p className="text-ink/70 leading-relaxed text-sm md:text-base">
                Achieved 2nd place in the National Information Competition (UNITY) #12 in the Software Development category. Focused on Front-End Development and building scalable software solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif mb-6">Project <span className="italic">Experiences</span></h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full mb-6" />
            <p className="text-ink/60">A collection of technical petals, each representing a unique challenge solved through artificial intelligence and data science.</p>
          </div>

          <div className="relative group">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto items-stretch gap-6 md:gap-8 pb-12 pt-4 px-4 -mx-4 md:px-8 md:-mx-8 snap-x snap-mandatory hide-scrollbar"
            >
            <ProjectCard 
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              title="Facial Expression-Based Attendance & Mental Disorder Detection System"
              description="AI Researcher & Developer (2025 – Present). Built a Deep Learning-based Computer Vision system for real-time facial expression analysis to automate attendance and detect early signs of mental disorders. Trained and tested models using modern CNN architectures with data augmentation."
              tags={["CNN", "Computer Vision", "Python"]}
              link="https://github.com/faraao"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
              title="Formation Energy Prediction of ABX3 Perovskite Materials"
              description="Data Scientist (2025). Developed predictive models for material formation energy using Linear (Lasso, Ridge, Polynomial) and Non-Linear (Random Forest) algorithms. Executed advanced Data Preprocessing (StandardScaler, Yeo-Johnson) using Pandas and Scikit-learn."
              tags={["Scikit-learn", "Pandas", "Regression"]}
              link="https://github.com/faraao"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              title="Flood Area Segmentation using Deep Learning"
              description="Computer Vision Engineer (2025). Developed a Semantic Segmentation model to automatically identify flood-affected areas from imagery. Conducted dataset curation and measured segmentation accuracy using IoU and Dice Coefficient metrics."
              tags={["Segmentation", "Deep Learning", "IoU"]}
              link="https://github.com/faraao"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80"
              title="Emotion Detection using YOLOv8n & YOLOv10n"
              description="AI Engineer (2025). Trained emotion detection models using YOLOv8n and YOLOv10n architectures, optimized for high-speed performance. Converted models to ONNX format for efficient deployment on edge devices."
              tags={["YOLO", "ONNX", "Edge AI"]}
              link="https://github.com/faraao"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=800&q=80"
              title="Mental Health Applications – TaCa & TaXi"
              description="Full Stack AI Developer (2024). Designed data-driven mental health applications connecting users with professionals, implementing mood tracking features and data-driven insights for smart society resilience."
              tags={["Full Stack", "AI", "Mobile"]}
              link="https://github.com/faraao"
            />
          </div>

          {/* Navigation Buttons for Carousel */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full glass-card bg-white/80 hover:bg-white hover:scale-110 transition-all border border-pink-200 cursor-pointer text-pink-600 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full glass-card bg-white/80 hover:bg-white hover:scale-110 transition-all border border-pink-200 cursor-pointer text-pink-600 shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="relative z-10 py-32 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-12 border-petal-pink/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BrainCircuit className="w-32 h-32 text-pink-500" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-serif mb-8">Latest <span className="italic">Publication</span></h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-ink">TaCa: Talk to Calm – A Mental Health Support Application for Smart Society (2025)</h3>
                <p className="text-ink/60 mb-6 italic">Indonesian Journal on Software Engineering (IJSE), Vol. 11 No. 1.</p>
                <p className="text-ink/70 leading-relaxed mb-8">
                  Co-authored research on developing a mental health support platform that leverages software engineering principles to foster a smarter, more resilient society.
                </p>
                <a 
                  href="https://ojs.bsi.ac.id/ejurnal/index.php/ijse/article/view/25876" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-all"
                >
                  Read Journal <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Licenses & Certifications Section */}
      <section id="certifications" className="relative z-10 py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-4">Licenses <span className="italic">& Certifications</span></h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-6">
          <CertificationCard 
            title="Hak Cipta Karya Rekaman Video 'Strategi Meaningful Learning dengan Integrasi Google Teachable Machine'"
            issuer="Direktorat Jenderal Kekayaan Intelektual"
            date="Feb 2026"
            id="001146750"
            logo="/images/logo-hki.jpg"
          />
          <CertificationCard 
            title="Introduction to Artificial Intelligence (AI)"
            issuer="IBM"
            date="Nov 2025"
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png"
          />
          <CertificationCard 
            title="Getting Started with Deep Learning"
            issuer="NVIDIA"
            date="Oct 2024"
            id="M0S7oiZMQcO9R966P9O6-Q"
            logo="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-4">Technical <span className="italic">& Soft Roots</span></h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full" />
        </div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-8">
          <SkillGroup 
            title="Programming & Databases" 
            icon={Terminal} 
            skills={["Python", "SQL", "JavaScript"]} 
          />
          <SkillGroup 
            title="Data Science & Analysis" 
            icon={BarChart3} 
            skills={["Pandas", "NumPy", "Data Preprocessing", "EDA", "Feature Scaling", "Data Transformation", "SHAP"]} 
          />
          <SkillGroup 
            title="Machine Learning" 
            icon={Brain} 
            skills={["Linear Regression", "Lasso", "Ridge", "Polynomial", "Random Forest", "Scikit-learn", "Cross-Validation"]} 
          />
          <SkillGroup 
            title="Deep Learning & CV" 
            icon={Eye} 
            skills={["TensorFlow/Keras", "CNN", "Semantic Segmentation", "Image Segmentation", "YOLO", "ONNX"]} 
          />
          <SkillGroup 
            title="Soft Skills" 
            icon={Users} 
            skills={["Leadership", "Teamwork", "Problem Solving", "Critical Thinking", "Public Speaking", "Time Management", "Adaptability"]} 
          />
        </div>
      </section>

      {/* Footer / Contact */}
      <motion.footer 
        id="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 px-8 border-t border-petal-pink/30"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif mb-4">Let's <span className="italic">Plant</span> Something New</h2>
            <p className="text-ink/50">Always open to magical collaborations and AI research opportunities.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <a href="mailto:frdaini22@gmail.com" className="text-2xl font-serif hover:text-pink-500 transition-colors flex items-center gap-3">
              <Mail className="w-6 h-6" /> frdaini22@gmail.com
            </a>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-ink/40">
              <a href="https://linkedin.com/in/fariida-qurrota-aini" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">LinkedIn</a>
              <a href="https://github.com/faraao" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-petal-pink/10 flex justify-between items-center text-[10px] uppercase tracking-widest text-ink/30 font-bold">
          <span>© 2026 Fara. Portfolio</span>
          <span>Built with magic & machine learning</span>
        </div>
      </motion.footer>

      <AIChatAssistant />
    </div>
  );
}
