import React from 'react'

const Navigation = () => {
  return (
    <nav className="relative z-10 px-6 py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">AC</div>
        <a 
          href="mailto:arinzecyril123@gmail.com" 
          className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  )
}

export default Navigation