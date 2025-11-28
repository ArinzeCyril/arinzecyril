import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mb-4 sm:mb-6">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
      ),
      title: "Lightning Fast Development",
      description: "Rapid prototyping and development cycles that get your ideas to market quickly."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mb-4 sm:mb-6">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: "Precision-Focused Solutions",
      description: "Custom-built solutions tailored exactly to your business needs and goals."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mb-4 sm:mb-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Client-First Approach",
      description: "Your vision drives every decision. I listen, adapt, and deliver beyond expectations."
    }
  ]

  return (
    <section id="services" className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xs:text-xl font-bold text-white mb-4 sm:mb-6">Why Choose Me?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            I don't just code websites. I craft digital experiences that solve problems and create value.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              {service.icon}
              <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm xs:text-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection