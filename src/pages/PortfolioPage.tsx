import React from 'react';
import { PortfolioData } from '../data/defaultData';
import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProjectsSection from '../sections/ProjectsSection';
import RotatingGallerySection from '../sections/RotatingGallerySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ExperienceSection from '../sections/ExperienceSection';
import SkillsSection from '../sections/SkillsSection';
import FooterSection from '../sections/FooterSection';

interface Props {
  data: PortfolioData;
}

const PortfolioPage: React.FC<Props> = ({ data }) => {
  return (
    <main style={{ overflowX: 'clip' }} className="font-kanit">
      <HeroSection profile={data.profile} />
      <MarqueeSection />
      <AboutSection profile={data.profile} />
      <ServicesSection services={data.services} />
      <ProjectsSection projects={data.projects} />
      <RotatingGallerySection techStack={data.techStack} />
      <TestimonialsSection testimonials={data.testimonials} />
      <ExperienceSection experiences={data.experiences} />
      <SkillsSection skillCategories={data.skillCategories} certifications={data.certifications} />
      <FooterSection profile={data.profile} />
    </main>
  );
};

export default PortfolioPage;
