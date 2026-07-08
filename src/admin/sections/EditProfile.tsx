import React, { useState, useEffect } from 'react';
import { ProfileData } from '../../data/defaultData';

interface Props {
  data: ProfileData;
  onSave: (data: ProfileData) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';

const EditProfile: React.FC<Props> = ({ data, onSave }) => {
  const [form, setForm] = useState(data);
  useEffect(() => setForm(data), [data]);

  const update = (key: keyof ProfileData, value: string) => {
    const updated = { ...form, [key]: value };
    setForm(updated);
    onSave(updated);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-6">
        <h3 className="text-[#D7E2EA] font-bold text-base mb-6">Hero Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={labelClass}>Full Name</label><input className={inputClass} value={form.name} onChange={e => update('name', e.target.value)} /></div>
          <div><label className={labelClass}>Hero Heading</label><input className={inputClass} value={form.heroHeading} onChange={e => update('heroHeading', e.target.value)} /></div>
          <div className="sm:col-span-2"><label className={labelClass}>Tagline</label><input className={inputClass} value={form.tagline} onChange={e => update('tagline', e.target.value)} /></div>
          <div className="sm:col-span-2"><label className={labelClass}>Portrait Image URL</label><input className={inputClass} value={form.portraitUrl} onChange={e => update('portraitUrl', e.target.value)} /></div>
          {form.portraitUrl && <div className="sm:col-span-2"><img src={form.portraitUrl} alt="Preview" className="h-40 object-contain rounded-xl bg-[#D7E2EA]/5 p-2" /></div>}
        </div>
      </div>

      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-6">
        <h3 className="text-[#D7E2EA] font-bold text-base mb-6">About Section</h3>
        <div><label className={labelClass}>Bio Text</label><textarea className={`${inputClass} min-h-[120px] resize-y`} value={form.aboutText} onChange={e => update('aboutText', e.target.value)} /></div>
      </div>

      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-6">
        <h3 className="text-[#D7E2EA] font-bold text-base mb-6">Contact Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={labelClass}>Email</label><input className={inputClass} value={form.email} onChange={e => update('email', e.target.value)} /></div>
          <div><label className={labelClass}>Phone</label><input className={inputClass} value={form.phone} onChange={e => update('phone', e.target.value)} /></div>
          <div><label className={labelClass}>Location</label><input className={inputClass} value={form.location} onChange={e => update('location', e.target.value)} /></div>
          <div><label className={labelClass}>GitHub URL</label><input className={inputClass} value={form.githubUrl} onChange={e => update('githubUrl', e.target.value)} /></div>
          <div><label className={labelClass}>LinkedIn URL</label><input className={inputClass} value={form.linkedinUrl} onChange={e => update('linkedinUrl', e.target.value)} /></div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-6">
        <h3 className="text-[#D7E2EA] font-bold text-base mb-6">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className={labelClass}>Degree</label><input className={inputClass} value={form.education} onChange={e => update('education', e.target.value)} /></div>
          <div><label className={labelClass}>Details</label><input className={inputClass} value={form.educationDetails} onChange={e => update('educationDetails', e.target.value)} /></div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-6">
        <h3 className="text-[#D7E2EA] font-bold text-base mb-6">Footer Section</h3>
        <div className="space-y-5">
          <div><label className={labelClass}>Let's Talk Text</label><textarea className={`${inputClass} min-h-[80px] resize-y`} value={form.contactText || ''} onChange={e => update('contactText', e.target.value)} /></div>
          <div><label className={labelClass}>Footer Bio Text</label><textarea className={`${inputClass} min-h-[80px] resize-y`} value={form.footerBio || ''} onChange={e => update('footerBio', e.target.value)} /></div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
