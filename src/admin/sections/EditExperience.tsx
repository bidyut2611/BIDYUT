import React, { useState, useEffect } from 'react';
import { ExperienceItem, genId } from '../../data/defaultData';

interface Props {
  data: ExperienceItem[];
  onSave: (data: ExperienceItem[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditExperience: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  useEffect(() => setItems(data), [data]);

  const save = (updated: ExperienceItem[]) => { setItems(updated); onSave(updated); };

  const add = () => {
    save([...items, { id: genId(), role: '', organization: '', period: '', highlights: [''] }]);
  };

  const update = (id: string, key: keyof ExperienceItem, value: string) => {
    save(items.map(item => item.id === id ? { ...item, [key]: value } : item));
  };

  const updateHighlight = (id: string, idx: number, value: string) => {
    save(items.map(item => {
      if (item.id !== id) return item;
      const highlights = [...item.highlights];
      highlights[idx] = value;
      return { ...item, highlights };
    }));
  };

  const addHighlight = (id: string) => {
    save(items.map(item => item.id === id ? { ...item, highlights: [...item.highlights, ''] } : item));
  };

  const removeHighlight = (id: string, idx: number) => {
    save(items.map(item => {
      if (item.id !== id) return item;
      return { ...item, highlights: item.highlights.filter((_, i) => i !== idx) };
    }));
  };

  const remove = (id: string) => save(items.filter(i => i.id !== id));

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const arr = [...items];
    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
    save(arr);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={item.id} className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-[#B600A8]" style={{ boxShadow: '0 0 8px rgba(182,0,168,0.5)' }} />
              <span className="text-[#D7E2EA]/60 text-sm">{item.role || 'New Position'}</span>
            </div>
            <div className="flex gap-2">
              {idx > 0 && <button onClick={() => moveUp(idx)} className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-sm cursor-pointer px-2">↑</button>}
              {idx < items.length - 1 && <button onClick={() => moveUp(idx + 1)} className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-sm cursor-pointer px-2">↓</button>}
              <button onClick={() => remove(item.id)} className="text-red-400/60 hover:text-red-400 text-sm cursor-pointer">✕ Delete</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div><label className={labelClass}>Role / Title</label><input className={inputClass} value={item.role} onChange={e => update(item.id, 'role', e.target.value)} placeholder="Research Fellow" /></div>
            <div><label className={labelClass}>Organization</label><input className={inputClass} value={item.organization} onChange={e => update(item.id, 'organization', e.target.value)} placeholder="IIT Guwahati" /></div>
            <div><label className={labelClass}>Period</label><input className={inputClass} value={item.period} onChange={e => update(item.id, 'period', e.target.value)} placeholder="Jan 2024 — Present" /></div>
          </div>
          <label className={labelClass}>Key Highlights</label>
          <div className="space-y-2">
            {item.highlights.map((h, hIdx) => (
              <div key={hIdx} className="flex gap-2">
                <input className={`${inputClass} flex-1`} value={h} onChange={e => updateHighlight(item.id, hIdx, e.target.value)} placeholder="Describe an achievement..." />
                {item.highlights.length > 1 && (
                  <button onClick={() => removeHighlight(item.id, hIdx)} className="text-red-400/40 hover:text-red-400 text-sm cursor-pointer px-2 flex-shrink-0">✕</button>
                )}
              </div>
            ))}
            <button onClick={() => addHighlight(item.id)} className="text-[#B600A8]/60 hover:text-[#B600A8] text-xs cursor-pointer py-1">+ Add Highlight</button>
          </div>
        </div>
      ))}
      <button onClick={add} className="w-full py-3 rounded-xl text-white font-medium text-sm uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform" style={btnGradient}>
        + Add Experience
      </button>
    </div>
  );
};

export default EditExperience;
