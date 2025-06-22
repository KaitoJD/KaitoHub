import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  const tools = [
    {
      name: 'Pomodoro Timer',
      description: 'Boost your productivity with the Pomodoro Technique',
      href: 'https://pomodoro.kaitojd.dev',
      icon: '🍅'
    },
    {
      name: 'Music Player',
      description: 'Simple and clean music player for your favorite tracks',
      href: 'https://music.kaitojd.dev',
      icon: '🎵'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I am <span className="text-blue-600">KaitoJD</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to my personal space on the web. Explore my projects and tools!
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Portfolio
            </Link>
            <Link
              href="#tools"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}