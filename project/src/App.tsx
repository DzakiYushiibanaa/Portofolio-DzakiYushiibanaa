import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronDown, Figma, Palette, Users, Zap, Eye, Layers, Moon, Sun, Camera, Upload } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
        localStorage.setItem('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Figma size={32} />,
      title: 'UI Design',
      description: 'Creating beautiful and intuitive user interfaces using Figma with attention to detail and modern design principles.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users size={32} />,
      title: 'UX Research',
      description: 'Understanding user needs through research, personas, and user journey mapping to create meaningful experiences.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Systems',
      description: 'Building scalable design systems and component libraries that ensure consistency across products.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Eye size={32} />,
      title: 'Prototyping',
      description: 'Creating interactive prototypes in Figma to validate ideas and communicate design concepts effectively.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-Commerce Mobile App',
      description: 'Complete mobile shopping experience with intuitive navigation and seamless checkout flow',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Design',
      tools: ['Figma', 'Prototyping', 'User Research']
    },
    {
      title: 'SaaS Dashboard Redesign',
      description: 'Modern dashboard interface focusing on data visualization and user workflow optimization',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Design',
      tools: ['Figma', 'Design System', 'UX Research']
    },
    {
      title: 'Banking App Interface',
      description: 'Secure and user-friendly banking application with focus on accessibility and trust',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Design',
      tools: ['Figma', 'Accessibility', 'Security UX']
    },
    {
      title: 'Design System Library',
      description: 'Comprehensive design system with components, tokens, and documentation for enterprise use',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design System',
      tools: ['Figma', 'Component Library', 'Documentation']
    }
  ];

  const designProcess = [
    { step: '01', title: 'Research', description: 'Understanding users and business goals' },
    { step: '02', title: 'Ideate', description: 'Brainstorming and concept development' },
    { step: '03', title: 'Design', description: 'Creating wireframes and visual designs' },
    { step: '04', title: 'Prototype', description: 'Building interactive prototypes' },
    { step: '05', title: 'Test', description: 'User testing and iteration' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Designer
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 relative ${
                      activeSection === item ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                    )}
                  </button>
                ))}
                
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <Sun size={20} className="text-yellow-500" />
                  ) : (
                    <Moon size={20} className="text-slate-600" />
                  )}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <Sun size={20} className="text-yellow-500" />
                  ) : (
                    <Moon size={20} className="text-slate-600 dark:text-slate-300" />
                  )}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800">
              <div className="px-4 py-4 space-y-3">
                {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-4 py-3 rounded-xl capitalize transition-all ${
                      activeSection === item 
                        ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 font-medium' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 dark:bg-pink-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="relative inline-block mb-8">
              {/* Enhanced Photo with Creative Effects */}
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-40 animate-spin-slow"></div>
                <div className="absolute -inset-2 bg-white dark:bg-slate-800 rounded-full shadow-2xl"></div>
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="UI/UX Designer"
                    className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                  
                  {/* Upload Button */}
                  <button
                    onClick={triggerFileInput}
                    className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group/upload"
                    aria-label="Upload profile photo"
                  >
                    <Camera size={20} className="group-hover/upload:scale-110 transition-transform" />
                  </button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                
                {/* Floating Design Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg rotate-12 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Creative Designer
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-4xl mx-auto font-light">
              UI/UX Designer specializing in creating beautiful, user-centered digital experiences
            </p>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Crafting intuitive interfaces and meaningful user journeys using Figma and design thinking principles
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-medium hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>View My Work</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-2xl font-medium hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
              >
                Let's Collaborate
              </button>
            </div>

            <div className="animate-bounce">
              <ChevronDown size={24} className="text-slate-400 dark:text-slate-500 mx-auto" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating digital experiences that delight users and drive business success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                    Designing with Purpose & Passion
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    With 4+ years of experience in UI/UX design, I specialize in creating user-centered 
                    digital products that solve real problems. My approach combines creative thinking 
                    with data-driven insights to deliver exceptional user experiences.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                    I believe great design is invisible – it should feel natural and effortless to users 
                    while achieving business objectives. Every pixel has a purpose, and every interaction 
                    tells a story.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50+</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">4+</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl p-8">
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">My Design Process</h4>
                  <div className="space-y-6">
                    {designProcess.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h5>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">What I Do</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Specialized services focused on creating exceptional user experiences through thoughtful design
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Primary Design Tool</h3>
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 px-8 py-6 rounded-2xl border border-purple-100 dark:border-purple-800">
                <Figma size={48} className="text-purple-600 dark:text-purple-400" />
                <div className="text-left">
                  <div className="text-xl font-bold text-slate-800 dark:text-slate-100">Figma</div>
                  <div className="text-slate-600 dark:text-slate-300">Complete design workflow from wireframes to prototypes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">Featured Work</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A showcase of recent projects demonstrating my approach to user-centered design
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-xl font-medium border border-purple-100 dark:border-purple-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">Let's Create Together</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Ready to bring your ideas to life? Let's discuss how we can create something amazing together
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-100">Email</div>
                        <div className="text-slate-600 dark:text-slate-300">dzakiyushibanaa@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-100">Phone</div>
                        <div className="text-slate-600 dark:text-slate-300">+62 8128-4444-196</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-100">Location</div>
                        <div className="text-slate-600 dark:text-slate-300">Depok, Indonesia</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-6">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/DzakiYushiibanaa" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 group">
                      <Github size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/dzaki-yushiibanaa/" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 group">
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 group">
                      <Figma size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              <form className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-6 py-4 border border-slate-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-slate-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 text-slate-800 dark:text-slate-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-6 py-4 border border-slate-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-slate-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 text-slate-800 dark:text-slate-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="w-full px-6 py-4 border border-slate-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-slate-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 text-slate-800 dark:text-slate-100"
                    >
                      <option>UI/UX Design</option>
                      <option>Mobile App Design</option>
                      <option>Web Design</option>
                      <option>Design System</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-6 py-4 border border-slate-200 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-slate-50 dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 resize-none text-slate-800 dark:text-slate-100"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Designer
              </div>
              <p className="text-slate-400 mb-8 text-lg">
                Crafting beautiful experiences, one design at a time.
              </p>
              <div className="flex justify-center space-x-6 mb-12">
                <a href="#" className="w-12 h-12 bg-slate-800 dark:bg-slate-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group">
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 dark:bg-slate-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 group">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 dark:bg-slate-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group">
                  <Figma size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="border-t border-slate-800 dark:border-slate-700 pt-8">
                <p className="text-slate-400">
                  © 2024 Creative Designer. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;