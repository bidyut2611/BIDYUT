import React, { useState, useEffect } from 'react';
import { ProjectItem, genId } from '../../data/defaultData';

interface Props {
  data: ProjectItem[];
  onSave: (data: ProjectItem[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditProjects: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  useEffect(() => setItems(data), [data]);

  const save = (updated: ProjectItem[]) => { setItems(updated); onSave(updated); };

  const add = () => {
    const num = String(items.length + 1).padStart(2, '0');
    save([...items, { id: genId(), number: num, category: 'Client', name: '', liveUrl: '#', images: { col1Top: '', col1Bottom: '', col2: '' } }]);
  };

  const update = (id: string, key: string, value: string) => {
    save(items.map(item => {
      if (item.id !== id) return item;
      if (key.startsWith('images.')) {
        const imgKey = key.split('.')[1] as keyof typeof item.images;
        return { ...item, images: { ...item.images, [imgKey]: value } };
      }
      return { ...item, [key]: value };
    }));
  };

  const remove = (id: string) => {
    save(items.filter(i => i.id !== id).map((item, idx) => ({ ...item, number: String(idx + 1).padStart(2, '0') })));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#B600A8] font-black text-2xl">{item.number}</span>
            <button onClick={() => remove(item.id)} className="text-red-400/60 hover:text-red-400 text-sm cursor-pointer">✕ Delete</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div><label className={labelClass}>Project Name</label><input className={inputClass} value={item.name} onChange={e => update(item.id, 'name', e.target.value)} /></div>
            <div><label className={labelClass}>Category</label>
              <select className={inputClass} value={item.category} onChange={e => update(item.id, 'category', e.target.value)}>
                <option value="Client">Client</option><option value="Personal">Personal</option><option value="Research">Research</option>
              </select>
            </div>
            <div className="sm:col-span-2"><label className={labelClass}>Live Project URL</label><input className={inputClass} value={item.liveUrl} onChange={e => update(item.id, 'liveUrl', e.target.value)} /></div>
          </div>
          <h4 className="text-[#D7E2EA]/40 font-medium text-xs uppercase tracking-widest mb-3">Project Images (URLs)</h4>
          <div className="space-y-3">
            <div><label className={labelClass}>Left Column - Top Image</label><input className={inputClass} value={item.images.col1Top} onChange={e => update(item.id, 'images.col1Top', e.target.value)} /></div>
            <div><label className={labelClass}>Left Column - Bottom Image</label><input className={inputClass} value={item.images.col1Bottom} onChange={e => update(item.id, 'images.col1Bottom', e.target.value)} /></div>
            <div><label className={labelClass}>Right Column - Full Image</label><input className={inputClass} value={item.images.col2} onChange={e => update(item.id, 'images.col2', e.target.value)} /></div>
          </div>
          {item.images.col1Top && (
            <div className="flex gap-2 mt-3">
              <img src={item.images.col1Top} alt="" className="h-16 rounded-lg object-cover" />
              {item.images.col1Bottom && <img src={item.images.col1Bottom} alt="" className="h-16 rounded-lg object-cover" />}
              {item.images.col2 && <img src={item.images.col2} alt="" className="h-16 rounded-lg object-cover" />}
            </div>
          )}
        </div>
      ))}
      <button onClick={add} className="w-full py-3 rounded-xl text-white font-medium text-sm uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform" style={btnGradient}>
        + Add Project
      </button>
    </div>
  );
};

export default EditProjects;
