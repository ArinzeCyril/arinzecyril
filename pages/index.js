import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import BenefitsSection from '../components/BenefitsSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
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
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}