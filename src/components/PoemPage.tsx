import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { poems } from '@/data/poems';
import Navigation from './Navigation';
import textureVintage from '@/assets/texture-vintage-1.jpg';
import textureRomantic from '@/assets/texture-romantic.jpg';
import textureMystical from '@/assets/texture-mystical.jpg';
import textureMoonlit from '@/assets/texture-moonlit.jpg';

const textures = [textureVintage, textureRomantic, textureMystical, textureMoonlit];

const PoemPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const poem = poems.find(p => p.id === id);
  
  if (!poem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Poem not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all poems
          </Button>
        </div>
      </div>
    );
  }

  const backgroundImage = textures[poem.textureIndex % textures.length];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 nav-button"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all poems
          </Button>

          {/* Poem card */}
          <Card 
            className="p-8 sm:p-12 animate-fade-in"
            style={{
              backgroundImage: `linear-gradient(
                135deg, 
                hsla(42, 25%, 92%, 0.95), 
                hsla(35, 20%, 88%, 0.95)
              ), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'multiply'
            }}
          >
            {/* Poem header */}
            <div className="text-center mb-8 border-b border-border/30 pb-6">
              <p className="text-sm text-muted-foreground mb-2 font-medium">
                {poem.date}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-serif">
                {poem.title}
              </h1>
            </div>

            {/* Poem content */}
            <div className="prose prose-lg max-w-none text-card-foreground">
              {poem.content.split('\n').map((line, index) => (
                <p 
                  key={index} 
                  className={`${line.trim() === '' ? 'mb-6' : 'mb-3'} leading-relaxed font-serif text-lg`}
                  style={{ 
                    textAlign: line.trim() === '' ? 'center' : 'left',
                    fontStyle: line.trim() === '' ? 'italic' : 'normal'
                  }}
                >
                  {line.trim() || '\u00A0'}
                </p>
              ))}
            </div>
          </Card>

          {/* Create your own poetry page button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="bg-background/80 hover:bg-background border-border/50 backdrop-blur-sm"
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
          </div>

          {/* Footer */}
          <footer className="text-center mt-12 pt-8 border-t border-border/30">
            <div className="butterfly-icon inline-block mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a2 2 0 0 1-3 0 2 2 0 0 1-3 0" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">
              by <span className="underline cursor-pointer hover:text-primary transition-colors">tulip</span> <span className="underline cursor-pointer hover:text-primary transition-colors">donate me</span>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default PoemPage;