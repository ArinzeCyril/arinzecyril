import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';

const DiscoverHow = () => {
  const router = useRouter();

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
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Discovery & Planning</h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                          We start by understanding your goals, target audience, and project requirements. 
                          I create a detailed plan outlining the approach, timeline, and deliverables.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Design & Prototyping</h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                          I create wireframes and prototypes to visualize the solution. 
                          We iterate on the design until it perfectly aligns with your vision.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Development & Testing</h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                          I build your solution using modern technologies and best practices. 
                          Rigorous testing ensures a bug-free, high-performance product.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Deployment & Support</h3>
                        <p className="text-gray-300 text-sm sm:text-base">
                          I deploy your solution and provide ongoing support to ensure its continued success. 
                          I'm always available for updates, enhancements, and maintenance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                    <div className="relative bg-gray-800 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                        alt="Code editor with React code" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 mb-12 sm:mb-16">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl xs:text-xl font-bold text-white mb-4 sm:mb-6">Technologies I Work With</h2>
                <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
                  I leverage cutting-edge technologies to build robust, scalable, and performant applications 
                  that stand the test of time.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { name: 'React', icon: '⚛️' },
                    { name: 'Node.js', icon: '🟢' },
                    { name: 'JavaScript', icon: '🟨' },
                    { name: 'TypeScript', icon: '🔷' },
                    { name: 'Python', icon: '🐍' },
                    { name: 'MongoDB', icon: '🍃' },
                    { name: 'PostgreSQL', icon: '🐘' },
                    { name: 'AWS', icon: '☁️' }
                  ].map((tech, index) => (
                    <div key={index} className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl mb-2">{tech.icon}</div>
                      <div className="text-white font-medium text-sm sm:text-base">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl xs:text-xl font-bold text-white mb-6 sm:mb-8">Ready to Start Your Project?</h2>
              <button 
                onClick={() => router.push('/contact')}
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-base sm:text-lg font-medium shadow-xl"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DiscoverHow