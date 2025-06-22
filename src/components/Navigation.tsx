'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const tools = [
    { name: 'Pomodoro Timer', href: 'https://pomodoro.kaitojd.dev', external: true },
    { name: 'Music Player', href: 'https://music.kaitojd.dev', external: true },
    // Có thể add thêm tools sau
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              KaitoJD
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900">
                Tools
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target={tool.external ? "_blank" : "_self"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              ☰
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700">Home</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700">Portfolio</Link>
              {tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target={tool.external ? "_blank" : "_self"}
                  className="block px-3 py-2 text-gray-700"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation