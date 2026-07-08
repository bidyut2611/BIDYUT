import React from 'react';
import FadeIn from '../components/FadeIn';
import { ExperienceItem } from '../data/defaultData';

interface Props {
  experiences: ExperienceItem[];
}

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
  return (
    <section className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-10 overflow-hidden">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6 sm:mb-8" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Journey
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="text-[#D7E2EA]/60 text-center font-light uppercase tracking-widest mb-16 sm:mb-24" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
          My professional experience
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] timeline-line hidden sm:block" />
        <div className="absolute left-4 top-0 bottom-0 w-[2px] timeline-line sm:hidden" />

        {experiences.map((exp, i) => {
          const side = i % 2 === 0 ? 'right' : 'left';
          return (
            <FadeIn key={exp.id} delay={i * 0.15} x={side === 'left' ? -50 : 50} y={0}>
              <div className={`relative flex items-start mb-12 sm:mb-16 ${side === 'left' ? 'sm:flex-row-reverse sm:text-right' : 'sm:flex-row sm:text-left'}`}>
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#B600A8] bg-[#0C0C0C] z-10 mt-2" style={{ boxShadow: '0 0 12px rgba(182, 0, 168, 0.5)' }} />
                <div className={`ml-10 sm:ml-0 sm:w-[45%] ${side === 'left' ? 'sm:mr-auto sm:pr-12' : 'sm:ml-auto sm:pl-12'}`}>
                  <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 p-6 sm:p-8 hover:border-[#B600A8]/30 transition-colors duration-300">
                    <span className="text-[#B600A8] font-medium text-xs sm:text-sm uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-[#D7E2EA] font-bold text-lg sm:text-xl mt-2 mb-1">{exp.role}</h3>
                    <p className="text-[#D7E2EA]/50 font-light text-sm mb-4">{exp.organization}</p>
                    <ul className={`space-y-2 ${side === 'left' ? 'sm:text-right' : 'sm:text-left'}`}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-[#D7E2EA]/70 font-light text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-[#B600A8] mt-1 flex-shrink-0">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
