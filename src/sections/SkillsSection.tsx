import React from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { SkillCategory, CertificationItem } from '../data/defaultData';

interface Props {
  skillCategories: SkillCategory[];
  certifications: CertificationItem[];
}

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div ref={ref} className="mb-4 sm:mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#D7E2EA] font-medium text-sm sm:text-base">{name}</span>
        <span className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm">{level}%</span>
      </div>
      <div className="w-full h-2 sm:h-2.5 rounded-full bg-[#D7E2EA]/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #B600A8 0%, #7621B0 50%, #BE4C00 100%)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
};

const SkillsSection: React.FC<Props> = ({ skillCategories, certifications }) => {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-6 sm:mb-8" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Skills</h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="text-[#0C0C0C]/50 text-center font-light uppercase tracking-widest mb-16 sm:mb-24" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
          Expertise & proficiency levels
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        {skillCategories.map((category, catIndex) => (
          <FadeIn key={category.id} delay={catIndex * 0.15} y={30}>
            <div className="rounded-3xl border border-[#0C0C0C]/10 bg-[#0C0C0C]/[0.03] p-6 sm:p-8 hover:border-[#B600A8]/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-[#0C0C0C] font-bold text-lg sm:text-xl uppercase tracking-wide">{category.title}</h3>
              </div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={catIndex * 0.1 + skillIndex * 0.08} />
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      {certifications.length > 0 && (
        <FadeIn delay={0.3} y={30}>
          <div className="max-w-4xl mx-auto mt-16 sm:mt-24">
            <h3 className="text-[#0C0C0C] font-bold text-xl sm:text-2xl uppercase tracking-wide text-center mb-8 sm:mb-12">
              Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-center gap-4 p-5 rounded-2xl border border-[#0C0C0C]/10 bg-[#0C0C0C]/[0.02] hover:border-[#B600A8]/20 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)' }}>✓</div>
                  <div>
                    <p className="text-[#0C0C0C] font-medium text-sm sm:text-base">{cert.title}</p>
                    <p className="text-[#0C0C0C]/50 font-light text-xs sm:text-sm">{cert.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
};

export default SkillsSection;
