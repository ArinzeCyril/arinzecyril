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

        
        
        <section className="relative z-10 px-6 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Discover How I Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Transform Your Ideas</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let me show you my approach to creating powerful digital experiences that drive real business results.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">My Development Process</h2>
                  <p className="text-gray-300 mb-6">
                    I follow a streamlined process that ensures your project delivers maximum impact. 
                    From initial concept to final deployment, I focus on creating solutions that not only look great 
                    but also solve real business problems.
                  </p>
                  <p className="text-gray-300">
                    My approach combines technical excellence with strategic thinking, ensuring that every line of code 
                    contributes to your project's success.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10 h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Discovery & Strategy</h3>
                        <p className="text-gray-300">We dive deep into your goals, audience, and challenges to create a winning strategy.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Design & Development</h3>
                        <p className="text-gray-300">I bring your vision to life with modern design and rock-solid development.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Launch & Optimize</h3>
                        <p className="text-gray-300">We launch your project and continuously optimize for peak performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Lightning Fast Development</h3>
                <p className="text-gray-300">Rapid prototyping and development cycles that get your ideas to market quickly.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Precision-Focused Solutions</h3>
                <p className="text-gray-300">Custom-built solutions tailored exactly to your business needs and goals.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Client-First Approach</h3>
                <p className="text-gray-300">Your vision drives every decision. I listen, adapt, and deliver beyond expectations.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl text-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiscoverHow;