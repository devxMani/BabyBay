import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GiButterfly } from 'react-icons/gi';
<<<<<<< HEAD
=======
import { IoHome, IoSearch, IoLogIn, IoHelpCircle } from 'react-icons/io5';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3">
=======
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center cursor-pointer nav-glass p-2"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
<<<<<<< HEAD
          <GiButterfly size={32} className="text-gray-700 mr-3" />
          <span className="text-xl font-bold text-gray-800 font-serif">BabyBay</span>
=======
          <GiButterfly size={24} className="text-white butterfly-float" />
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
        </motion.div>

        {/* Center Navigation */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => navigate('/')}
<<<<<<< HEAD
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
=======
            className={`nav-glass p-3 transition-all duration-200 ${
              location.pathname === '/' ? 'bg-white/20' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Home"
          >
            <IoHome size={18} className="text-white" />
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/explore')}
<<<<<<< HEAD
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
=======
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
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
        </div>

        {/* Login */}
        <motion.button
          onClick={() => navigate('/signin')}
<<<<<<< HEAD
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
=======
          className={`nav-glass p-3 transition-all duration-200 ${
            location.pathname === '/signin' ? 'bg-white/20' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Sign In"
        >
          <IoLogIn size={18} className="text-white" />
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
        </motion.button>
      </div>
    </nav>
  );
};

export default Navigation;