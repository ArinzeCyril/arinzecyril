import React from 'react'
import { useRouter } from 'next/router'

const CTASection = () => {
  const router = useRouter();

  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mx-auto mb-4 sm:mb-6">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
            <line x1="6" x2="6" y1="2" y2="4"></line>
            <line x1="10" x2="10" y1="2" y2="4"></line>
            <line x1="14" x2="14" y1="2" y2="4"></line>
          </svg>
          <h2 className="text-xl sm:text-2xl xs:text-lg font-bold text-white mb-3 sm:mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-5 sm:mb-8 max-w-2xl mx-auto px-2">
            Let's grab a virtual coffee and discuss how I can help transform your ideas into reality. No pressure, just possibilities.
          </p>
          <div className="flex justify-center">
            <div className="relative">
              <button
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 shadow-xl text-sm sm:text-base whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection