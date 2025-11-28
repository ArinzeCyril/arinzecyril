import React from 'react'

const BenefitsSection = () => {
  const benefits = [
    "No lengthy contracts - flexible engagement models",
    "Direct communication with the developer",
    "Modern, scalable technology stack",
    "Mobile-first responsive design",
    "SEO optimized from day one",
    "Ongoing support and maintenance"
  ]

  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
          <h2 className="text-2xl sm:text-3xl xs:text-xl font-bold text-white mb-6 sm:mb-8 text-center">
            What You Get When Working With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm xs:text-xs">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection