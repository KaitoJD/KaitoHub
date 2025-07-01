import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'

export default function Home() {
  const projects = [
    {
      name: 'About Me',
      description: 'Explore my professional work, experience, and technical skills',
      href: 'https://about.kaitojd.me',
      icon: '💼',
      category: 'Professional',
      status: 'In Progress',
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
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 transition-colors duration-300 relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-700/50 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-black">&gt;&gt;</span> 
              <span className="ml-2 text-gray-900 dark:text-white">
                Kaito Hub
              </span>
            </h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://about.kaitojd.me"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
            Welcome to <span className="text-blue-600 dark:text-blue-300 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">Kaito Hub</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your central destination for all my projects, tools, and digital creations. Explore everything I&#39;ve built with passion and creativity!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-30 px-8 py-4">
            <Link
              href="https://about.kaitojd.me"
              className="w-full sm:w-48 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium relative z-30 text-center"
            >
              About Me
            </Link>
            <Link
              href="#projects"
              className="w-full sm:w-48 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium relative z-30 text-center"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 relative z-20 mb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-50">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            A collection of applications, tools, and digital experiences I&#39;ve created
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-200/80 dark:bg-slate-700/80 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300"
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
                className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-300/60 dark:border-slate-600/60 relative z-10 hover:z-50 transform-gpu"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="w-16 h-16 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-4xl group-hover:scale-105 transition-transform duration-300 origin-center block">{project.icon}</span>
                </div>
                
                <div className="mb-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100/60 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 dark:text-blue-300 group-hover:translate-x-1 transition-transform duration-100">
                  <span className="text-sm font-medium">
                    {project.status === 'Live' ? 'Visit Site' : 'Preview'}
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
      <section className="py-20 px-8 relative z-0 bg-white/50 dark:bg-slate-900/50 mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-50">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-300 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">Coming Soon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-300 mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-200 text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-8 border-t border-gray-300 dark:border-slate-600 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Feel free to reach out to me through any of these platforms. I&#39;d love to connect and discuss projects, opportunities, or just have a chat!
            </p>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-8 px-4 py-2">
            {/* Email */}
            <a
              href="mailto:contact.nguyensynguyen@gmail.com"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700"
            >
              <div className="flex items-center justify-center w-8 h-8 overflow-visible">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="font-medium">Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/nguyensynguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700"
            >
              <div className="flex items-center justify-center w-8 h-8 overflow-visible">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/KaitoJD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700"
            >
              <div className="flex items-center justify-center w-8 h-8 overflow-visible">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="font-medium">GitHub</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/kaito.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700"
            >
              <div className="flex items-center justify-center w-8 h-8 overflow-visible">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-medium">Facebook</span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/942391093411086376"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700"
            >
              <div className="flex items-center justify-center w-8 h-8 overflow-visible">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </div>
              <span className="font-medium">Discord</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-300 dark:border-slate-600">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 KaitoJD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}