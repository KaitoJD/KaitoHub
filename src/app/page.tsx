import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'

export default function Home() {
  // Function to get status badge styling based on status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Done':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
      case 'In Progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
      case 'Coming Soon':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
    }
  }

  const projects = [
    {
      name: 'About Me',
      description: 'Explore my professional work, experience, and technical skills',
      href: 'https://about.kaitojd.me',
      icon: '💼',
      category: 'Professional',
      status: 'Done',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Personal Blog',
      description: 'Technical articles, tutorials, and thoughts on development',
      href: 'https://blog.kaitojd.me',
      icon: '📝',
      category: 'Content',
      status: 'Coming Soon',
      tech: ['Next.js', 'MDX', 'Contentful']
    },
    {
      name: 'Pomodoro Timer',
      description: 'Boost your productivity with the Pomodoro Technique',
      href: 'https://pomodoro.kaitojd.me',
      icon: '🍅',
      category: 'Tools',
      status: 'Coming Soon',
      tech: ['React', 'PWA', 'Local Storage']
    },
    {
      name: 'Music Player',
      description: 'Simple and clean music player for your favorite tracks',
      href: 'https://music.kaitojd.me',
      icon: '🎵',
      category: 'Entertainment',
      status: 'Coming Soon',
      tech: ['JavaScript', 'Web Audio API', 'CSS3']
    },
    {
      name: 'Code Snippets',
      description: 'Collection of useful code snippets and utilities',
      href: 'https://snippets.kaitojd.me',
      icon: '🧩',
      category: 'Tools',
      status: 'Coming Soon',
      tech: ['Vue.js', 'Monaco Editor', 'Firebase']
    },
    {
      name: 'Weather App',
      description: 'Beautiful weather forecast with location-based insights',
      href: 'https://weather.kaitojd.me',
      icon: '☁️',
      category: 'Tools',
      status: 'Coming Soon',
      tech: ['React', 'OpenWeather API', 'Charts.js']
    }
  ]

  const categories = ['All', 'Professional', 'Tools', 'Content', 'Entertainment']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-indigo-900/90 dark:from-slate-950/95 dark:via-blue-950/95 dark:to-indigo-950/90 transition-colors duration-300 relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 relative z-10 pt-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Kaito Hub</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your central destination for all my projects, tools, and digital creations. Explore everything I&#39;ve built with passion and creativity!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-30 px-8 py-4">
            <Link
              href="https://about.kaitojd.me"
              className="w-full sm:w-48 bg-blue-600/90 hover:bg-blue-700/90 backdrop-blur-sm text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium relative z-30 text-center border border-blue-500/30"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="w-full sm:w-48 border-2 border-blue-400/60 text-blue-100 hover:bg-blue-600/20 hover:text-white backdrop-blur-sm px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium relative z-30 text-center"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 relative z-20 mb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">My Projects</h2>
          <p className="text-center text-blue-100/90 mb-8 max-w-2xl mx-auto">
            A collection of applications, tools, and digital experiences I&#39;ve created
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 backdrop-blur-sm text-blue-100 hover:bg-blue-600/30 hover:text-white border border-white/20"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8 py-8" style={{ isolation: 'isolate' }}>
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/15 dark:bg-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/30 dark:border-white/20 relative z-10 hover:z-50 transform-gpu hover:bg-white/20"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusStyle(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <div className="w-16 h-16 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-4xl group-hover:scale-105 transition-transform duration-300 origin-center block">{project.icon}</span>
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-medium text-blue-200 bg-blue-600/30 px-2 py-1 rounded-full border border-blue-400/30">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-200 transition-colors">{project.name}</h3>
                <p className="text-blue-100/80 leading-relaxed mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white/10 text-blue-100/80 rounded border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-200 group-hover:translate-x-1 transition-transform duration-100">
                  <span className="text-sm font-medium">
                    {project.status === 'Done' ? 'Visit Site' : 'Preview'}
                  </span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-8 relative z-0 mt-32 mb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        <div className="max-w-6xl mx-auto px-4 pb-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              Project Statistics
            </h2>
            <p className="text-blue-100/90 max-w-2xl mx-auto text-lg">
              A comprehensive overview of my development journey and project portfolio
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
            {/* Total Projects */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-200 group-hover:scale-110 transition-transform duration-300">6</div>
                </div>
                <h3 className="font-semibold text-white mb-1">Total Projects</h3>
                <p className="text-sm text-blue-100/70">Active portfolio</p>
              </div>
            </div>

            {/* Done Projects */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-green-200 group-hover:scale-110 transition-transform duration-300">1</div>
                </div>
                <h3 className="font-semibold text-white mb-1">Completed</h3>
                <p className="text-sm text-blue-100/70">Live & running</p>
              </div>
            </div>

            {/* In Progress */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-indigo-200 group-hover:scale-110 transition-transform duration-300">0</div>
                </div>
                <h3 className="font-semibold text-white mb-1">In Progress</h3>
                <p className="text-sm text-blue-100/70">Currently working</p>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-orange-200 group-hover:scale-110 transition-transform duration-300">5</div>
                </div>
                <h3 className="font-semibold text-white mb-1">Coming Soon</h3>
                <p className="text-sm text-blue-100/70">In the pipeline</p>
              </div>
            </div>
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 pb-8">
            {/* Technologies */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-purple-200 group-hover:scale-110 transition-transform duration-300">8+</div>
                </div>
                <h3 className="font-semibold text-white mb-1">Technologies</h3>
                <p className="text-sm text-blue-100/70">Tech stack variety</p>
              </div>
            </div>

            {/* Experience Years */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-teal-200 group-hover:scale-110 transition-transform duration-300">1</div>
                </div>
                <h3 className="font-semibold text-white mb-1">Experience</h3>
                <p className="text-sm text-blue-100/70">Years developing</p>
              </div>
            </div>

            {/* Code Commits */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg p-6 border border-white/20 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 hover:bg-white/15">
              <div className="absolute top-0 right-0 w-16 h-16 bg-pink-500/20 rounded-full -mr-8 -mt-8"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-pink-200 group-hover:scale-110 transition-transform duration-300">500+</div>
                </div>
                <h3 className="font-semibold text-white mb-1">Commits</h3>
                <p className="text-sm text-blue-100/70">Lines of code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              Let&apos;s Connect & Create
            </h2>
            <p className="text-lg sm:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I&apos;m always open to discussing new projects, creative collaborations, or exciting opportunities. Let&apos;s build something amazing together!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 px-4 sm:px-6 lg:px-8 py-8">
            {/* Quick Contact Card */}
            <div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Quick Contact</h3>
                    <p className="text-blue-100/70">Drop me a message directly</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <a href="mailto:contact.nguyensynguyen@gmail.com" className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 group/item">
                    <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-300">contact.nguyensynguyen@gmail.com</span>
                    <svg className="w-4 h-4 ml-2 group-hover/item:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="flex items-center text-blue-100/70">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Usually responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Collaboration</h3>
                    <p className="text-indigo-100/70">Let&apos;s work together</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-indigo-100">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Available for freelance projects</span>
                  </div>
                  <div className="flex items-center text-indigo-100">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Open to full-time opportunities</span>
                  </div>
                  <div className="flex items-center text-indigo-100">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    <span>Interested in tech partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative py-4 px-4 sm:px-8 bg-black/90 backdrop-blur-md border-t-2 border-white/10 shadow-2xl shadow-black/50">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright Text - Left Side */}
            <div className="text-left">
              <p className="text-gray-300/80 text-sm">
                © 2025 Nguyen Sy Nguyen. All rights reserved
              </p>
            </div>

            {/* Social Links - Right Side */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 py-2 px-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nguyensynguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white/10 hover:bg-blue-600/90 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 border border-white/20 hover:border-blue-400/50"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KaitoJD"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white/10 hover:bg-gray-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 border border-white/20 hover:border-gray-400/50"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/kaito.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white/10 hover:bg-blue-700/90 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/30 border border-white/20 hover:border-blue-500/50"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/942391093411086376"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-white/10 hover:bg-indigo-600/90 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 border border-white/20 hover:border-indigo-400/50"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contact.nguyensynguyen@gmail.com"
                className="group relative w-12 h-12 bg-white/10 hover:bg-emerald-600/90 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30 border border-white/20 hover:border-emerald-400/50"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}