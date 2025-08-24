
import React, { ReactNode, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import textureVintage from '@/assets/texture-vintage-1.jpg';
import textureRomantic from '@/assets/texture-romantic.jpg';
import textureMystical from '@/assets/texture-mystical.jpg';
import textureMoonlit from '@/assets/texture-moonlit.jpg';

interface PoetryCardProps {
  title: string;
  date: string;
  children?: ReactNode;
  textureIndex?: number;
  onClick?: () => void;
}

const textures = [textureVintage, textureRomantic, textureMystical, textureMoonlit];

const PoetryCard: React.FC<PoetryCardProps> = ({ title, date, children, textureIndex = 0, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  const backgroundImage = textures[textureIndex % textures.length];

  return (
    <motion.div
      ref={cardRef}
      className="poetry-card glass cursor-pointer"
      style={{
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "600px",
        fontFamily: "'Indie Flower', cursive",
        color: "inherit",
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)"
      }}
      whileHover={{ scale: 1.03, boxShadow: "0 12px 40px 0 rgba(31,38,135,0.45)" }}
      onClick={onClick}
    >
      <div style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{date}</div>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ fontSize: "1.2rem", lineHeight: "1.7" }}>{children}</div>
    </motion.div>
  );
};

export default PoetryCard;