import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { ProjectItem } from '../data/defaultData';

interface Props {
  projects: ProjectItem[];
}

const ProjectCard: React.FC<{ project: ProjectItem; index: number; totalCards: number }> = ({
  project, index, totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div style={{ scale }} className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col origin-top">
        <div className="flex items-start justify-between mb-4 sm:mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[#D7E2EA] leading-none" style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}>
              {project.number}
            </span>
            <div>
              <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl md:text-2xl uppercase tracking-wide">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4">
            <img src={project.images.col1Top} alt={`${project.name} preview 1`} className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full" style={{ height: 'clamp(130px, 16vw, 230px)' }} loading="lazy" />
            <img src={project.images.col1Bottom} alt={`${project.name} preview 2`} className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full flex-1" style={{ height: 'clamp(160px, 22vw, 340px)' }} loading="lazy" />
          </div>
          <div className="w-[60%]">
            <img src={project.images.col2} alt={`${project.name} preview 3`} className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </FadeIn>
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
