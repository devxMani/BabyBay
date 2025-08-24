import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import PoetryCard from '@/components/PoetryCard';
import VisitorCounter from '@/components/VisitorCounter';
import { poems } from '@/data/poems';

const Index = () => {
  const navigate = useNavigate();

  const handlePoemClick = (poemId: string) => {
    navigate(`/poems/${poemId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Visitor counter */}
          <VisitorCounter />

          {/* Page title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-serif">
              My Poems
            </h1>
          </div>

          {/* Poetry cards */}
          <div className="space-y-4 animate-fade-in">
            {poems.map((poem, index) => (
              <div 
                key={poem.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PoetryCard
                  title={poem.title}
                  date={poem.date}
                  textureIndex={poem.textureIndex}
                  onClick={() => handlePoemClick(poem.id)}
                />
              </div>
            ))}
          </div>

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

export default Index;
