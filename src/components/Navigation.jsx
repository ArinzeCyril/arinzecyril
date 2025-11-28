import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config/emailConfig';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="relative z-10 px-4 sm:px-6 py-4 sm:py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div onClick={ () => navigate('/')} className="text-white font-bold text-lg xs:text-xl pointer-fine:cursor-pointer">AC</div>
        <div className="relative">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm xs:text-base"
          >
            Let's Talk
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navigation