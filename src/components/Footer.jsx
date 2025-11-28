import React from 'react'
import { CONTACT_EMAIL } from '../config/emailConfig'

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm xs:text-base text-center sm:text-left">
          © 2025 Arinze Cyril. Crafted with passion.
        </div>
        <a 
          href={`mailto:${CONTACT_EMAIL}`} 
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm xs:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  )
}

export default Footer