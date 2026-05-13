import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.65'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em 0' }}>
      {words.map((word, index) => {
        const total = words.length;
        // Give extra room so last words fully light up before scroll ends
        const start = (index / total) * 0.85;
        const end = start + (1 / total) * 1.4;
        const opacity = useTransform(scrollYProgress, [Math.min(start, 1), Math.min(end, 1)], [0.12, 1]);

        return (
          <span key={index} style={{ position: 'relative', display: 'inline-flex', marginRight: '0.28em' }}>
            <span style={{ opacity: 0 }}>{word}</span>
            <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
