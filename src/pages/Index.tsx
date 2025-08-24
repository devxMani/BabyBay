import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
<<<<<<< HEAD
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
=======
import { poems } from '@/data/poems';
import { GiButterfly } from 'react-icons/gi';

const Index = () => {
  const navigate = useNavigate();

  const handlePoemClick = (poemId: string) => {
    navigate(`/poems/${poemId}`);
  };

  // Background images for poem cards
  const backgroundImages = [
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="min-h-screen bg-gray-900" style={{ background: '#1a1a1a' }}>
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Visitor counter */}
          <motion.div 
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
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
=======
            <div className="visitor-glass inline-block">
              Visitors: 39,672
            </div>
          </motion.div>

          {/* Page title */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 
              className="text-4xl font-normal text-white mb-4"
              style={{ fontFamily: "'Indie Flower', cursive" }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            >
              My Poems
            </h1>
          </motion.div>

<<<<<<< HEAD
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
=======
          {/* Poetry cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {poems.map((poem, index) => (
              <motion.div 
                key={poem.id}
                className="cursor-pointer"
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
<<<<<<< HEAD
                  className="rounded-2xl h-20 flex items-center justify-between relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(${poem.backgroundImage})`,
=======
                  className="poem-card p-6 h-20 flex items-center justify-between relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${backgroundImages[index % backgroundImages.length]})`,
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
<<<<<<< HEAD
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
=======
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
                    <h3 
                      className="text-xl font-normal text-white"
                      style={{ fontFamily: "'Indie Flower', cursive" }}
                    >
                      {poem.title}
                    </h3>
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
<<<<<<< HEAD
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
=======
          </div>

          {/* Create your own poetry page button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => navigate('/signin')}
              className="glass-button px-6 py-3 font-normal flex items-center space-x-2 mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <GiButterfly size={18} className="text-white" />
              <span>Create Your Own Poetry Page</span>
            </button>
          </motion.div>

          {/* Footer */}
          <motion.footer 
            className="text-center mt-12 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center justify-center mb-4">
              <GiButterfly className="text-white/60 mr-2" size={20} />
            </div>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              by <span className="underline cursor-pointer hover:text-white/80 transition-colors">tulip</span> • 
              <span className="underline cursor-pointer hover:text-white/80 transition-colors ml-2">donate me</span>
            </p>
          </motion.footer>
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
        </div>
      </main>
    </div>
  );
};

export default Index;