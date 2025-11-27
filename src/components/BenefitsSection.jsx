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
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            What You Get When Working With Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection