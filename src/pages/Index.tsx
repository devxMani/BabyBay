import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
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
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
            >
              My Poems
            </h1>
          </motion.div>

          {/* Poetry cards */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {poems.map((poem, index) => (
              <motion.div 
                key={poem.id}
                className="cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handlePoemClick(poem.id)}
              >
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
                  </div>
                </div>
              </motion.div>
            ))}
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
        </div>
      </main>
    </div>
  );
};

export default Index;