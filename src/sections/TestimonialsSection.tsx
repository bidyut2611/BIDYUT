import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { TestimonialItem } from '../data/defaultData';

interface Props {
  testimonials: TestimonialItem[];
}

const TestimonialsSection: React.FC<Props> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-10 overflow-hidden">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6 sm:mb-8" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Voices
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="text-[#D7E2EA]/60 text-center font-light uppercase tracking-widest mb-16 sm:mb-24" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
          What people say about working with me
        </p>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-[30px] sm:rounded-[40px] border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 backdrop-blur-md p-8 sm:p-10 md:p-12"
            >
              <div className="text-5xl sm:text-6xl text-[#B600A8]/40 font-black leading-none mb-4">"</div>
              <p className="text-[#D7E2EA] font-light leading-relaxed mb-8" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-white text-sm sm:text-base flex-shrink-0" style={{ background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)' }}>
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <p className="text-[#D7E2EA] font-medium text-sm sm:text-base">{testimonials[activeIndex].name}</p>
                  <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8 sm:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeIndex ? 'w-10 h-3 sm:w-12 sm:h-3.5' : 'w-3 h-3 sm:w-3.5 sm:h-3.5 hover:bg-[#D7E2EA]/40'}`}
              style={{ background: i === activeIndex ? 'linear-gradient(123deg, #B600A8 0%, #7621B0 100%)' : 'rgba(215, 226, 234, 0.2)' }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
