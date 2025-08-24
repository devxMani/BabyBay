import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { GiButterfly } from 'react-icons/gi';

// Sample poems data matching the design
const poems = [
  {
    id: 'opposite',
    title: 'Opposite',
    date: '03 Jul 2024',
    backgroundImage: '/src/assets/texture-vintage-1.jpg'
  },
  {
    id: 'escape-to-dreams',
    title: 'Escape to Dreams',
    date: '27 Jun 2024',
    backgroundImage: '/src/assets/texture-romantic.jpg'
  },
  {
    id: 'her',
    title: 'Her',
    date: '27 Jun 2024',
    backgroundImage: '/src/assets/texture-mystical.jpg'
  },
  {
    id: 'my-fictional-hero',
    title: 'My Fictional Hero',
    date: '27 Jun 2024',
    backgroundImage: '/src/assets/texture-moonlit.jpg'
  },
  {
    id: 'the-moon',
    title: 'The Moon',
    date: '23 Jun 2024',
    backgroundImage: '/src/assets/texture-vintage-1.jpg'
  },
  {
    id: 'its-either-you-or-none',
    title: 'It\'s Either You or None',
    date: '25 Jun 2024',
    backgroundImage: '/src/assets/texture-romantic.jpg'
  },
  {
    id: 'moon',
    title: 'Moon',
    date: '07 Jul 2024',
    backgroundImage: '/src/assets/texture-mystical.jpg'
  },
  {
    id: 'the-wind',
    title: 'The Wind',
    date: '08 Jul 2024',
    backgroundImage: '/src/assets/texture-moonlit.jpg'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with visitor count */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center items-center space-x-2 mb-4 text-gray-600">
              <GiButterfly size={20} className="text-gray-500" />
              <span 
                className="text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Visitors: 39,675
              </span>
            </div>
            
            <h1 
              className="text-4xl font-normal text-gray-800 mb-8"
              style={{ fontFamily: 'Crimson Text, serif' }}
            >
              My Poems
            </h1>
          </motion.div>

          {/* Poetry cards as horizontal blocks */}
          <motion.div 
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {poems.map((poem, index) => (
              <motion.div 
                key={poem.id}
                className="cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="rounded-2xl h-20 flex items-center justify-between relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(${poem.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                >
                  <div className="flex items-center flex-1 px-6">
                    <h3 
                      className="text-xl font-normal text-gray-800 group-hover:text-gray-900 transition-colors duration-200"
                      style={{ fontFamily: 'Crimson Text, serif' }}
                    >
                      {poem.title}
                    </h3>
                  </div>
                  
                  <div className="px-6">
                    <span 
                      className="text-sm text-gray-600 font-normal"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {poem.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer text */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              className="px-8 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View More Poems
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
