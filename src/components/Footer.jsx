import React from 'react'

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          © 2025 Arinze Cyril. Crafted with passion.
        </div>
        <a 
          href="mailto:arinzecyril123@gmail.com" 
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          arinzecyril123@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer