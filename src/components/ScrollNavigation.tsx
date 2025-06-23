'use client'

import { useEffect, useState } from 'react'

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Show navigation when user scrolls past the header (approximately 100px)
      setIsVisible(scrollY > 100)
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Determine active section
      const sections = ['hero', 'tools', 'contact']
      const sectionElements = sections.map(id => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
            element
          }
        }
        return null
      }).filter(Boolean)

      // Find the section that's most visible
      const viewportHeight = window.innerHeight
      const activeSection = sectionElements.find(section => {
        if (section) {
          return section.top <= viewportHeight / 2 && section.bottom >= viewportHeight / 2
        }
        return false
      })

      if (activeSection) {
        setActiveSection(activeSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const navigationItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ]
  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-[70] flex-col items-center space-y-4 transition-all duration-300 ${
      isVisible ? 'flex opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-full'
    } lg:flex`}>
      {/* Scroll Progress Indicator */}
      <div className="relative w-1 h-32 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-full transition-all duration-300"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex flex-col space-y-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50 dark:border-slate-700/50">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
              activeSection === item.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600'
            }`}
            title={item.label}
          >
            <span className="text-sm">{item.icon}</span>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-white border-y-4 border-y-transparent" />
            </div>
          </button>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-gray-200/50 dark:border-slate-700/50 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
        title="Scroll to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollNavigation
