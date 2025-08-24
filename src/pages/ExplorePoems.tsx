import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { GiButterfly } from 'react-icons/gi';

// Sample explore poems data matching light theme
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

  return (
    <div className="min-h-screen bg-gray-50">
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
              className="text-3xl font-normal text-gray-800 mb-8"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Explore Poems
            </h1>
          </motion.div>

          {/* Poetry cards as horizontal blocks */}
          <motion.div 
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {explorePoems.map((poem, index) => (
              <motion.div 
                key={poem.id}
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePoemClick(poem.id)}
              >
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
            <motion.button 
              onClick={() => navigate('/signin')}
              className="bg-white px-6 py-3 rounded-2xl font-normal text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <GiButterfly size={18} className="text-gray-700" />
              <span>Create Your Own Poetry Page</span>
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePoems;
