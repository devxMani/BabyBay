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
      className="poetry-card cursor-pointer group overflow-hidden"
      onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(
          135deg, 
          hsla(42, 25%, 92%, 0.85), 
          hsla(35, 20%, 88%, 0.85)
        ), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="p-4 sm:p-6 flex items-center justify-between relative z-10">
        <div className="flex-1">
          <h3 className="poetry-title group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </div>
        <div className="ml-4">
          <span className="poetry-date text-xs sm:text-sm">
            {date}
          </span>
        </div>
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
    </Card>
  );
};

export default PoetryCard;