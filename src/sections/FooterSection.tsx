import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ProfileData } from '../data/defaultData';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

interface Props { profile: ProfileData; }

const FooterSection: React.FC<Props> = ({ profile }) => {
  const contactInfo = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: profile.location, href: '#' },
  ];
  const socialLinks = [
    { icon: GithubIcon, label: 'GitHub', href: profile.githubUrl },
    { icon: LinkedinIcon, label: 'LinkedIn', href: profile.linkedinUrl },
  ];

  return (
    <footer id="contact" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-8">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}>Let&apos;s Talk</h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p className="text-[#D7E2EA]/50 text-center font-light max-w-lg mx-auto leading-relaxed mb-12 sm:mb-16" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}>
          {profile.contactText || "Got a project in mind or just want to chat about AI and tech? I'd love to hear from you."}
        </p>
      </FadeIn>
      <FadeIn delay={0.25} y={20}>
        <div className="flex justify-center mb-20 sm:mb-28">
          <a href={`mailto:${profile.email}`} className="group relative inline-flex items-center gap-3 rounded-full font-medium uppercase tracking-widest text-white px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform duration-200" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset', outline: '2px solid white', outlineOffset: '-3px' }}>
            Get in Touch
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-[#D7E2EA]/10">
        <FadeIn delay={0.1} y={20}>
          <div>
            <h3 className="text-[#D7E2EA] font-black text-2xl sm:text-3xl uppercase tracking-tight mb-3">
              {profile.name.split(' ')[0]}<span className="text-[#B600A8]">.</span>
            </h3>
            <p className="text-[#D7E2EA]/40 font-light text-sm leading-relaxed max-w-xs">
              {profile.footerBio || `AI Engineer & Researcher based in ${profile.location}. Passionate about building intelligent solutions that make a difference.`}
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <div>
            <h4 className="text-[#D7E2EA] font-bold text-sm uppercase tracking-widest mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}><a href={item.href} className="flex items-center gap-3 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors duration-200 group">
                  <item.icon className="w-4 h-4 flex-shrink-0 group-hover:text-[#B600A8] transition-colors duration-200" /><span className="font-light text-sm">{item.label}</span>
                </a></li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.3} y={20}>
          <div>
            <h4 className="text-[#D7E2EA] font-bold text-sm uppercase tracking-widest mb-4 sm:mb-6">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 flex items-center justify-center hover:border-[#B600A8]/40 hover:bg-[#B600A8]/10 transition-all duration-300 group" aria-label={link.label}>
                  <link.icon className="w-5 h-5 text-[#D7E2EA]/60 group-hover:text-[#D7E2EA] transition-colors duration-200" />
                </a>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/5">
              <p className="text-[#D7E2EA]/40 font-light text-xs uppercase tracking-widest mb-1">Education</p>
              <p className="text-[#D7E2EA] font-medium text-sm">{profile.education}</p>
              <p className="text-[#D7E2EA]/50 font-light text-xs">{profile.educationDetails}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8">
        <p className="text-[#D7E2EA]/30 font-light text-xs sm:text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="text-[#D7E2EA]/30 font-light text-xs sm:text-sm flex items-center gap-1">Made with <Heart className="w-3 h-3 text-[#B600A8] fill-[#B600A8]" /> in {profile.location.split(',')[0]}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
