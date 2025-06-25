'use client'

import { useState, useEffect } from 'react'

export default function DropdownNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'tools', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }
  const sections = [
    { id: 'hero', name: 'Home', icon: '🏠' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
    { id: 'contact', name: 'Contact', icon: '📧' }
  ]

  return (
    <div className="fixed top-20 right-4 z-50">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-full p-3 shadow-lg border border-gray-300/60 dark:border-slate-600/60 hover:shadow-xl transition-all duration-300 group"
        aria-label="Navigation Menu"
      >
        <svg 
          className={`w-5 h-5 text-gray-700 dark:text-gray-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-white/98 dark:bg-slate-800/98 backdrop-blur-md rounded-xl shadow-xl border border-gray-300/60 dark:border-slate-600/60 min-w-[160px] animate-in fade-in-0 zoom-in-95 duration-200">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all duration-200 ${
                activeSection === section.id 
                  ? 'text-blue-600 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/30' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="font-medium text-sm">{section.name}</span>
            </button>
          ))}
          
          <div className="border-t border-gray-300/60 dark:border-slate-600/60 my-1"></div>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-all duration-200 text-gray-700 dark:text-gray-200"
          >
            <span className="text-lg">⬆️</span>
            <span className="font-medium text-sm">Back to Top</span>
          </button>
        </div>
      )}
    </div>
  )
}
