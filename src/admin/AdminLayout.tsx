import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioData } from '../data/defaultData';
import EditProfile from './sections/EditProfile';
import EditServices from './sections/EditServices';
import EditProjects from './sections/EditProjects';
import EditTechStack from './sections/EditTechStack';
import EditTestimonials from './sections/EditTestimonials';
import EditExperience from './sections/EditExperience';
import EditSkills from './sections/EditSkills';
import EditCertifications from './sections/EditCertifications';

type SectionKey = 'profile' | 'services' | 'projects' | 'techStack' | 'testimonials' | 'experiences' | 'skillCategories' | 'certifications';

const navItems: { key: SectionKey; label: string; icon: string }[] = [
  { key: 'profile', label: 'Profile / Hero', icon: '👤' },
  { key: 'services', label: 'Services', icon: '⚙️' },
  { key: 'projects', label: 'Projects', icon: '📁' },
  { key: 'techStack', label: 'Tech Stack', icon: '🎡' },
  { key: 'testimonials', label: 'Voices', icon: '💬' },
  { key: 'experiences', label: 'Journey', icon: '📅' },
  { key: 'skillCategories', label: 'Skills', icon: '⚡' },
  { key: 'certifications', label: 'Certifications', icon: '🏆' },
];

interface Props {
  data: PortfolioData;
  updateSection: <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => void;
  exportData: () => void;
  importData: (file: File) => void;
  resetToDefaults: () => void;
}

const AdminLayout: React.FC<Props> = ({ data, updateSection, exportData, importData, resetToDefaults }) => {
  const [activeSection, setActiveSection] = useState<SectionKey>('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { importData(file); e.target.value = ''; }
  };

  const handleReset = () => {
    if (window.confirm('Reset all data to defaults? This cannot be undone.')) {
      resetToDefaults();
    }
  };

  const renderEditor = () => {
    switch (activeSection) {
      case 'profile': return <EditProfile data={data.profile} onSave={(d) => updateSection('profile', d)} />;
      case 'services': return <EditServices data={data.services} onSave={(d) => updateSection('services', d)} />;
      case 'projects': return <EditProjects data={data.projects} onSave={(d) => updateSection('projects', d)} />;
      case 'techStack': return <EditTechStack data={data.techStack} onSave={(d) => updateSection('techStack', d)} />;
      case 'testimonials': return <EditTestimonials data={data.testimonials} onSave={(d) => updateSection('testimonials', d)} />;
      case 'experiences': return <EditExperience data={data.experiences} onSave={(d) => updateSection('experiences', d)} />;
      case 'skillCategories': return <EditSkills data={data.skillCategories} onSave={(d) => updateSection('skillCategories', d)} />;
      case 'certifications': return <EditCertifications data={data.certifications} onSave={(d) => updateSection('certifications', d)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] font-kanit flex">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed lg:static z-40 top-0 left-0 h-full w-[260px] bg-[#111] border-r border-[#D7E2EA]/10 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 border-b border-[#D7E2EA]/10">
          <h2 className="text-[#D7E2EA] font-black text-lg uppercase tracking-tight">
            Admin<span className="text-[#B600A8]">.</span>
          </h2>
          <p className="text-[#D7E2EA]/40 font-light text-xs mt-1">Portfolio Dashboard</p>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => { setActiveSection(item.key); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-5 py-3 text-left text-sm font-medium transition-colors cursor-pointer ${
                activeSection === item.key
                  ? 'text-white bg-[#B600A8]/20 border-r-2 border-[#B600A8]'
                  : 'text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/5'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#D7E2EA]/10 space-y-2">
          <button onClick={exportData} className="w-full text-xs text-[#D7E2EA]/50 hover:text-[#D7E2EA] py-2 px-3 rounded-lg hover:bg-[#D7E2EA]/5 transition-colors text-left cursor-pointer">📥 Export Data</button>
          <button onClick={() => fileInputRef.current?.click()} className="w-full text-xs text-[#D7E2EA]/50 hover:text-[#D7E2EA] py-2 px-3 rounded-lg hover:bg-[#D7E2EA]/5 transition-colors text-left cursor-pointer">📤 Import Data</button>
          <button onClick={handleReset} className="w-full text-xs text-red-400/60 hover:text-red-400 py-2 px-3 rounded-lg hover:bg-red-400/5 transition-colors text-left cursor-pointer">🔄 Reset to Defaults</button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-16 border-b border-[#D7E2EA]/10 flex items-center justify-between px-5 bg-[#111] sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-[#D7E2EA] text-xl cursor-pointer">☰</button>
            <h1 className="text-[#D7E2EA] font-medium text-sm uppercase tracking-widest">
              {navItems.find(n => n.key === activeSection)?.icon} {navItems.find(n => n.key === activeSection)?.label}
            </h1>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-xs text-[#D7E2EA]/50 hover:text-[#D7E2EA] px-4 py-2 rounded-lg border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/30 transition-colors cursor-pointer"
          >
            ← Back to Site
          </button>
        </header>

        {/* Editor area */}
        <main className="flex-1 p-5 sm:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
