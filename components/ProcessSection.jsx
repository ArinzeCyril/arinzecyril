import React from 'react'

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We dive deep into your goals, audience, and challenges to create a winning strategy."
    },
    {
      number: "2",
      title: "Design & Development",
      description: "I bring your vision to life with modern design and rock-solid development."
    },
    {
      number: "3",
      title: "Launch & Optimize",
      description: "We launch your project and continuously optimize for peak performance."
    }
  ]

  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl xs:text-xl font-bold text-white mb-4 sm:mb-6">Simple. Effective. Results.</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2">
            My streamlined process ensures your project delivers maximum impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl xs:text-base mx-auto mb-4 sm:mb-6">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl xs:text-base font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-gray-300 text-sm xs:text-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection