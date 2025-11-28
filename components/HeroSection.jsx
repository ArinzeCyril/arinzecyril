import React from 'react'
import { useRouter } from 'next/router'

const HeroSection = () => {
  const router = useRouter();

  const handleDiscoverHow = () => {
    router.push('/discover-how');
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xs:text-3xl font-black text-white mb-6 sm:mb-8 leading-tight">
          Digital<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Experiences</span>That Convert
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          I'm Arinze Cyril, a full-stack developer who transforms your vision into powerful web applications that drive real business results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <div className="relative">
            <button 
              onClick={() => router.push('/contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-2xl text-sm sm:text-base whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Start Your Project
            </button>
          </div>

          <button
            onClick={handleDiscoverHow}
            className="border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2 sm:gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            Discover How
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection