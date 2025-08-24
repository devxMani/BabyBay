import { Card } from '@/components/ui/card';
import textureVintage from '@/assets/texture-vintage-1.jpg';
import textureRomantic from '@/assets/texture-romantic.jpg';
import textureMystical from '@/assets/texture-mystical.jpg';
import textureMoonlit from '@/assets/texture-moonlit.jpg';

const textures = [textureVintage, textureRomantic, textureMystical, textureMoonlit];

interface PoetryCardProps {
  title: string;
  date: string;
  textureIndex?: number;
  onClick?: () => void;
}

const PoetryCard: React.FC<PoetryCardProps> = ({ 
  title, 
  date, 
  textureIndex = 0,
  onClick 
}) => {
  const backgroundImage = textures[textureIndex % textures.length];

  return (
    <Card 
      className="poetry-card cursor-pointer group overflow-hidden h-20 sm:h-24"
      onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(
          135deg, 
          hsla(25, 15%, 85%, 0.9), 
          hsla(30, 20%, 82%, 0.9)
        ), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="p-4 sm:p-6 flex items-center justify-between relative z-10 h-full">
        <div className="flex-1 min-w-0">
          <h3 className="poetry-title group-hover:text-primary transition-colors duration-200 truncate text-base sm:text-lg font-medium">
            {title}
          </h3>
        </div>
        <div className="ml-6 flex-shrink-0">
          <span className="poetry-date text-xs sm:text-sm font-normal opacity-70">
            {date}
          </span>
        </div>
      </div>
      
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-card/20 to-card/40 group-hover:from-card/20 group-hover:via-card/10 group-hover:to-card/30 transition-all duration-300" />
    </Card>
  );
};

export default PoetryCard;