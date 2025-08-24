import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHome, IoSearch, IoLogIn, IoHelpCircle } from 'react-icons/io5';
import { GiButterfly } from 'react-icons/gi';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GiButterfly size={32} className="text-gray-700 mr-3" />
          <span className="text-xl font-bold text-gray-800 font-serif">BabyBay</span>
        </motion.div>

        {/* Center Navigation */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => navigate('/')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
              location.pathname === '/' 
                ? 'text-gray-800 bg-gray-100' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoHome size={18} />
            <span className="text-sm font-medium">Home</span>
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/explore')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
              location.pathname === '/explore' 
                ? 'text-gray-800 bg-gray-100' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoSearch size={18} />
            <span className="text-sm font-medium">Explore</span>
          </motion.button>

          <motion.button
            className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoHelpCircle size={18} />
            <span className="text-sm font-medium">Help</span>
          </motion.button>
        </div>

        {/* Login */}
        <motion.button
          onClick={() => navigate('/signin')}
          className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
            location.pathname === '/signin' 
              ? 'text-white bg-gray-800' 
              : 'text-gray-600 hover:text-white hover:bg-gray-800 border border-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoLogIn size={18} />
          <span className="text-sm font-medium">Sign In</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navigation;