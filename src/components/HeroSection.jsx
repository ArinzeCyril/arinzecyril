import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDiscoverHow = () => {
    navigate('/discover-how');
  };

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
          Digital<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Experiences</span>That Convert
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm Arinze Cyril, a full-stack developer who transforms your vision into powerful web applications that drive real business results.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="mailto:arinzecyril123@gmail.com" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
          <button 
            onClick={handleDiscoverHow}
            className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Discover How
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection