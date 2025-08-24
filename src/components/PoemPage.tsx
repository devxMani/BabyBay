import { useParams, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
=======
import { motion } from 'framer-motion';
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { poems } from '@/data/poems';
import Navigation from './Navigation';
<<<<<<< HEAD
=======
import { GiButterfly } from 'react-icons/gi';
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e

const PoemPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const poem = poems.find(p => p.id === id);
  
  if (!poem) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Poem not found</h1>
          <Button onClick={() => navigate('/')} className="bg-gray-800 hover:bg-gray-700 text-white">
=======
      <div className="min-h-screen bg-gray-900 flex items-center justify-center" style={{ background: '#1a1a1a' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Poem not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="glass-button px-6 py-3 flex items-center space-x-2 mx-auto"
          >
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to all poems</span>
          </button>
        </div>
      </div>
    );
  }

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-50">
=======
  // Background image for the poem
  const backgroundImages = [
    'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const backgroundImage = backgroundImages[poem.textureIndex % backgroundImages.length];

  return (
    <div className="min-h-screen" style={{ background: '#1a1a1a' }}>
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all poems
            </Button>
          </motion.div>

          {/* Poem card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-3xl mx-auto border border-gray-100"
          >
            {/* Poem header */}
            <div className="text-center mb-8 border-b border-gray-200 pb-6">
              <p className="text-sm text-gray-500 mb-2 font-medium">
                {poem.date}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                {poem.title}
              </h1>
            </div>

            {/* Poem content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              {poem.content.split('\n').map((line, index) => (
                <p 
                  key={index} 
                  className={`${line.trim() === '' ? 'mb-6' : 'mb-3'} leading-relaxed text-lg`}
                  style={{ 
                    textAlign: line.trim() === '' ? 'center' : 'left',
                    fontStyle: line.trim() === '' ? 'italic' : 'normal',
                    fontFamily: "'Inter', sans-serif"
                  }}
=======
          <motion.button 
            onClick={() => navigate('/')}
            className="glass-button px-4 py-2 mb-8 flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Indie Flower', cursive" }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to all poems</span>
          </motion.button>

          {/* Poem card */}
          <motion.div 
            className="glass p-8 sm:p-12 max-w-3xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Background overlay */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                filter: 'blur(2px)',
                opacity: 0.2,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Poem header */}
              <div className="text-center mb-8 border-b border-white/20 pb-6">
                <p 
                  className="text-sm text-white/70 mb-2 font-normal"
                  style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
                >
                  {poem.date}
                </p>
                <h1 
                  className="text-3xl sm:text-4xl font-normal text-white mb-4"
                  style={{ fontFamily: "'Indie Flower', cursive" }}
                >
                  {poem.title}
                </h1>
              </div>

              {/* Poem content */}
              <div className="prose prose-lg max-w-none text-white">
                {poem.content.split('\n').map((line, index) => (
                  <p 
                    key={index} 
                    className={`${line.trim() === '' ? 'mb-6' : 'mb-3'} leading-relaxed text-lg`}
                    style={{ 
                      fontFamily: "'Indie Flower', cursive",
                      textAlign: line.trim() === '' ? 'center' : 'left',
                      fontStyle: line.trim() === '' ? 'italic' : 'normal'
                    }}
                  >
                    {line.trim() || '\u00A0'}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Create your own poetry page button */}
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              className="bg-white hover:bg-gray-50 border-gray-300 text-gray-700 hover:text-gray-800"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a2 2 0 0 1-3 0 2 2 0 0 1-3 0" />
              </svg>
              Create Your Own Poetry Page
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 pt-8 border-t border-gray-200"
          >
            <div className="inline-block mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a2 2 0 0 1-3 0 2 2 0 0 1-3 0" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">
              by <span className="underline cursor-pointer hover:text-gray-700 transition-colors">tulip</span> <span className="underline cursor-pointer hover:text-gray-700 transition-colors">donate me</span>
=======
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => navigate('/signin')}
              className="glass-button px-6 py-3 flex items-center space-x-2 mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <GiButterfly size={18} className="text-white" />
              <span>Create Your Own Poetry Page</span>
            </button>
          </motion.div>

          {/* Footer */}
          <motion.footer 
            className="text-center mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center justify-center mb-4">
              <GiButterfly className="text-white/60" size={24} />
            </div>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              by <span className="underline cursor-pointer hover:text-white/80 transition-colors">tulip</span> • 
              <span className="underline cursor-pointer hover:text-white/80 transition-colors ml-2">donate me</span>
>>>>>>> 441101f3e0159d71e293a33297f6a9b74af64c6e
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
};

export default PoemPage;