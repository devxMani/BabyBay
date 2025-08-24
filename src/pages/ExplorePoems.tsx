import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { GiButterfly } from 'react-icons/gi';

<<<<<<< HEAD
// Sample explore poems data matching light theme
=======
// Sample explore poems data
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
const explorePoems = [
  {
    id: 'the-one-my-heart-knows',
    title: 'THE ONE MY HEART KNOWS',
    author: 'Hamish Reddy',
    date: 'Jul 31, 2025',
    textureIndex: 0
  },
  {
    id: 'somebody-like-you',
    title: 'Somebody Like You',
    author: 'RoyHonOR04',
    date: 'Jun 22, 2025',
    textureIndex: 1
  },
  {
    id: 'gajal',
    title: 'Gajal',
    author: 'शेफ़ाली',
    date: 'Jun 16, 2025',
    textureIndex: 2
  },
  {
    id: 'hi',
    title: 'Hi',
    author: 'Pavan Kumar K',
    date: 'Jun 12, 2025',
    textureIndex: 3
  },
  {
    id: 'virat-paglu',
    title: 'Virat paglu 😂',
    author: 'virat paglu',
    date: 'Jun 12, 2025',
    textureIndex: 0
  }
];

const ExplorePoems = () => {
  const navigate = useNavigate();

  const handlePoemClick = (poemId: string) => {
    navigate(`/explore/${poemId}`);
  };

  // Background images for poem cards
  const backgroundImages = [
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
=======
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
<<<<<<< HEAD
              className="text-3xl font-normal text-gray-800 mb-8"
              style={{ fontFamily: "'Crimson Text', serif" }}
=======
              className="text-4xl font-normal text-white mb-8"
              style={{ fontFamily: "'Indie Flower', cursive" }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            >
              Explore Poems
            </h1>
          </motion.div>

          {/* Poetry cards */}
          <motion.div 
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {explorePoems.map((poem, index) => (
              <motion.div 
                key={poem.id}
                className="cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handlePoemClick(poem.id)}
              >
<<<<<<< HEAD
                <div className="rounded-2xl p-6 h-20 flex items-center justify-between relative overflow-hidden bg-white border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                  <div className="flex items-center flex-1">
                    <h3 
                      className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200 mr-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {poem.title}
                    </h3>
                    <span 
                      className="text-sm text-gray-500"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      by {poem.author}
                    </span>
                  </div>
                  
                  <div 
                    className="text-sm text-gray-600 font-normal"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {poem.date}
=======
                <div 
                  className="poem-card p-6 h-20 flex items-center justify-between relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Background overlay */}
                  <div 
                    className="absolute inset-0 texture-bg"
                    style={{
                      backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
                      filter: 'blur(1px)',
                      opacity: 0.3,
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div className="flex items-center flex-1">
                      <h3 
                        className="text-xl font-normal text-white mr-4"
                        style={{ fontFamily: "'Indie Flower', cursive" }}
                      >
                        {poem.title}
                      </h3>
                      <span 
                        className="text-sm text-white/60"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        by {poem.author}
                      </span>
                    </div>
                    
                    <div 
                      className="text-white/80 font-normal"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {poem.date}
                    </div>
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Create your own poetry page button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => navigate('/signin')}
<<<<<<< HEAD
              className="bg-white px-6 py-3 rounded-2xl font-normal text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
=======
              className="glass-button px-6 py-3 font-normal flex items-center space-x-2 mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            >
              <GiButterfly size={18} className="text-gray-700" />
              <span>Create Your Own Poetry Page</span>
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePoems;