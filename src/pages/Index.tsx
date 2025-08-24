import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import PoetryCard from '@/components/PoetryCard';
import VisitorCounter from '@/components/VisitorCounter';
import { poems } from '@/data/poems';
import { IoBookOutline, IoHeartOutline, IoSparklesOutline } from 'react-icons/io5';
import { GiButterfly, GiFeather } from 'react-icons/gi';

const Index = () => {
  const navigate = useNavigate();

  const handlePoemClick = (poemId: string) => {
    navigate(`/poems/${poemId}`);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Visitor counter */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass inline-flex items-center px-6 py-3 rounded-full">
              <IoSparklesOutline className="mr-2 text-blue-400" size={18} />
              <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Visitors: 39,649
              </span>
            </div>
          </motion.div>

          {/* Page title with butterfly logo */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <GiButterfly 
                size={48} 
                className="text-blue-400 mr-4 animate-pulse" 
              />
              <h1 
                className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg"
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                My Poems
              </h1>
              <GiFeather 
                size={36} 
                className="text-purple-300 ml-4 transform rotate-12" 
              />
            </div>
            <p className="text-white/80 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Where words dance and emotions come alive
            </p>
          </motion.div>

          {/* Poetry cards as horizontal blocks */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {poems.map((poem, index) => (
              <motion.div 
                key={poem.id}
                className="cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handlePoemClick(poem.id)}
              >
                <div 
                  className="glass rounded-3xl p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl group"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)), url(${poems.find(p => p.id === poem.id)?.textureIndex !== undefined ? 
                      ['/src/assets/texture-vintage-1.jpg', '/src/assets/texture-romantic.jpg', '/src/assets/texture-mystical.jpg', '/src/assets/texture-moonlit.jpg'][poem.textureIndex] : 
                      '/src/assets/texture-vintage-1.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="glass p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <IoBookOutline size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 
                          className="text-xl font-semibold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300"
                          style={{ fontFamily: 'Dancing Script, cursive' }}
                        >
                          {poem.title}
                        </h3>
                        <div className="flex items-center text-white/70 text-sm">
                          <IoHeartOutline className="mr-1" size={14} />
                          <span style={{ fontFamily: 'Inter, sans-serif' }}>Personal Collection</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-white/80 font-medium text-lg"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {poem.date}
                      </div>
                      <div className="flex items-center justify-end mt-1 text-white/60">
                        <GiFeather size={12} className="mr-1" />
                        <span className="text-xs">Poetry</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Create your own poetry page button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button 
              onClick={() => navigate('/signin')}
              className="glass px-8 py-4 rounded-2xl font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl group" 
            >
              <div className="flex items-center justify-center">
                <GiButterfly 
                  size={24} 
                  className="mr-3 text-blue-400 group-hover:animate-bounce" 
                />
                <span 
                  className="text-lg text-white"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  Create Your Own Poetry Page
                </span>
              </div>
            </button>
          </motion.div>

          {/* Footer */}
          <motion.footer 
            className="text-center mt-16 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="glass inline-flex items-center px-6 py-3 rounded-full mb-4">
              <GiButterfly className="text-blue-400 mr-2" size={20} />
              <span className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                Where creativity meets inspiration
              </span>
            </div>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              by <span className="underline cursor-pointer hover:text-blue-300 transition-colors">tulip</span> • 
              <span className="underline cursor-pointer hover:text-blue-300 transition-colors ml-2">support the project</span>
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
