import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiButterfly } from 'react-icons/gi';
import { IoHome, IoSearch, IoLogIn, IoHelpCircle } from 'react-icons/io5';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center cursor-pointer nav-glass p-2"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GiButterfly size={24} className="text-white butterfly-float" />
        </motion.div>

        {/* Center Navigation */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => navigate('/')}
            className={`nav-glass p-3 transition-all duration-200 ${
              location.pathname === '/' ? 'bg-white/20' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Home"
          >
            <IoHome size={18} className="text-white" />
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/explore')}
            className={`nav-glass p-3 transition-all duration-200 ${
              location.pathname === '/explore' ? 'bg-white/20' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Explore Poems"
          >
            <IoSearch size={18} className="text-white" />
          </motion.button>

          <motion.button
            className="nav-glass p-3 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Help"
          >
            <IoHelpCircle size={18} className="text-white" />
          </motion.button>

          <motion.button
            className="nav-glass p-3 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Toggle Theme"
          >
            <MdDarkMode size={18} className="text-white" />
          </motion.button>
        </div>

        {/* Login */}
        <motion.button
          onClick={() => navigate('/signin')}
          className={`nav-glass p-3 transition-all duration-200 ${
            location.pathname === '/signin' ? 'bg-white/20' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Sign In"
        >
          <IoLogIn size={18} className="text-white" />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navigation;