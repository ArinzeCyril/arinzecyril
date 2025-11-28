import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const DiscoverHow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        <section className="relative z-10 px-4 sm:px-6 py-2">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl xs:text-2xl font-black text-white mb-4 sm:mb-6">
                Discover How I Can <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform Your Ideas</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                Let me show you my approach to creating powerful digital experiences that drive real business results.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 mb-12 sm:mb-16">
              <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl xs:text-xl font-bold text-white mb-4 sm:mb-6">My Development Process</h2>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    I follow a streamlined process that ensures your project delivers maximum impact. 
                    From initial concept to final deployment, I focus on creating solutions that not only look great 
                    but also solve real business problems.
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    My approach combines technical excellence with strategic thinking, ensuring that every line of code 
                    contributes to your project's success.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base xs:text-xs flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-1.5 sm:mb-2">Discovery & Strategy</h3>
                        <p className="text-gray-300 text-sm xs:text-xs">We dive deep into your goals, audience, and challenges to create a winning strategy.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base xs:text-xs flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-1.5 sm:mb-2">Design & Development</h3>
                        <p className="text-gray-300 text-sm xs:text-xs">I bring your vision to life with modern design and rock-solid development.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base xs:text-xs flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-1.5 sm:mb-2">Launch & Optimize</h3>
                        <p className="text-gray-300 text-sm xs:text-xs">We launch your project and continuously optimize for peak performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-3 sm:mb-4">Lightning Fast Development</h3>
                <p className="text-gray-300 text-sm xs:text-xs">Rapid prototyping and development cycles that get your ideas to market quickly.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-3 sm:mb-4">Precision-Focused Solutions</h3>
                <p className="text-gray-300 text-sm xs:text-xs">Custom-built solutions tailored exactly to your business needs and goals.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-3 sm:mb-4">Client-First Approach</h3>
                <p className="text-gray-300 text-sm xs:text-xs">Your vision drives every decision. I listen, adapt, and deliver beyond expectations.</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/"
                  className="inline-block bg-gray-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-gray-600 transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-xl text-base sm:text-lg"
                >
                  Back to Home
                </Link>
                <Link 
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-xl text-base sm:text-lg"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiscoverHow;