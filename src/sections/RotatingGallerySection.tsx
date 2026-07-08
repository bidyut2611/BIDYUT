import React from 'react';
import FadeIn from '../components/FadeIn';
import { TechItem } from '../data/defaultData';

interface Props {
  techStack: TechItem[];
}

const RotatingGallerySection: React.FC<Props> = ({ techStack }) => {
  const radius = 340;
  const angleStep = techStack.length > 0 ? 360 / techStack.length : 30;

  return (
    <section className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 overflow-hidden">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8 sm:mb-12" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Tech Stack
        </h2>
      </FadeIn>
      <FadeIn delay={0.2} y={0}>
        <p className="text-[#D7E2EA]/60 text-center font-light uppercase tracking-widest mb-16 sm:mb-24" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
          Technologies I work with daily
        </p>
      </FadeIn>

      <div className="flex justify-center items-center" style={{ perspective: '1200px' }}>
        <div className="relative gallery-carousel" style={{ width: '200px', height: '200px', transformStyle: 'preserve-3d' }}>
          {techStack.map((tech, i) => (
            <div
              key={tech.id}
              className="absolute w-[140px] sm:w-[160px] h-[140px] sm:h-[160px] flex flex-col items-center justify-center rounded-2xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/90 backdrop-blur-sm glow-purple"
              style={{
                transform: `rotateY(${angleStep * i}deg) translateZ(${radius}px)`,
                backfaceVisibility: 'hidden',
                left: '50%', top: '50%', marginLeft: '-70px', marginTop: '-70px',
              }}
            >
              <span className="text-4xl sm:text-5xl mb-2">{tech.icon}</span>
              <span className="text-[#D7E2EA] font-medium text-sm sm:text-base tracking-wide">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 sm:mt-28 flex flex-wrap justify-center gap-4 sm:gap-6 px-6 max-w-4xl mx-auto">
        {techStack.map((tech, i) => (
          <FadeIn key={tech.id} delay={0.05 * i} y={20}>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300 cursor-default group">
              <span className="text-xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
              <span className="text-[#D7E2EA] font-medium text-sm tracking-wide">{tech.name}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default RotatingGallerySection;
