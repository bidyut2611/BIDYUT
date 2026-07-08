import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split text into words to preserve natural wrapping
  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className} style={{ lineHeight: 1.8 }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            // Calculate global character index for animation timing
            const globalIndex = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length + 1, 0) + charIndex;
            const totalChars = text.length;

            return (
              <AnimatedChar
                key={`${wordIndex}-${charIndex}`}
                char={char}
                globalIndex={globalIndex}
                totalChars={totalChars}
                progress={scrollYProgress}
              />
            );
          })}
          {/* Add space after each word except the last */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </p>
  );
};

interface AnimatedCharProps {
  char: string;
  globalIndex: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({
  char,
  globalIndex,
  totalChars,
  progress,
}) => {
  const start = globalIndex / totalChars;
  const end = Math.min((globalIndex + 1) / totalChars + 0.05, 1);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      className="inline-block"
      style={{ opacity }}
    >
      {char}
    </motion.span>
  );
};

export default AnimatedText;
