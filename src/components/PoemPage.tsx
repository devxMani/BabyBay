import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { poems } from '@/data/poems';
import Navigation from './Navigation';

const PoemPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const poem = poems.find(p => p.id === id);
  
  if (!poem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Poem not found</h1>
          <Button onClick={() => navigate('/')} className="bg-gray-800 hover:bg-gray-700 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all poems
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
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
                >
                  {line.trim() || '\u00A0'}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Create your own poetry page button */}
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
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
};

export default PoemPage;