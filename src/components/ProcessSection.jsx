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
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple. Effective. Results.</h2>
          <p className="text-xl text-gray-300">
            My streamlined process ensures your project delivers maximum impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection