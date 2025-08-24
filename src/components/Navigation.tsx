import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHome, IoSearch, IoLogIn, IoHelpCircle } from 'react-icons/io5';
import { GiButterfly } from 'react-icons/gi';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GiButterfly size={28} className="text-white mr-2" />
        </motion.div>

        {/* Center Navigation */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => navigate('/')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              location.pathname === '/' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoHome size={18} />
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/explore')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              location.pathname === '/explore' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoSearch size={18} />
          </motion.button>

          <motion.button
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IoHelpCircle size={18} />
          </motion.button>

          <ThemeToggle />
        </div>

        {/* Login */}
        <motion.button
          onClick={() => navigate('/signin')}
          className={`p-2 rounded-lg transition-colors duration-200 ${
            location.pathname === '/signin' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoLogIn size={18} />
        </motion.button>
      </div>
    </nav>
  );
};

export default Navigation;