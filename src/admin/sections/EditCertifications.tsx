import React, { useState, useEffect } from 'react';
import { CertificationItem, genId } from '../../data/defaultData';

interface Props {
  data: CertificationItem[];
  onSave: (data: CertificationItem[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditCertifications: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  useEffect(() => setItems(data), [data]);

  const save = (updated: CertificationItem[]) => { setItems(updated); onSave(updated); };

  const add = () => {
    save([...items, { id: genId(), title: '', subtitle: '' }]);
  };

  const update = (id: string, key: keyof CertificationItem, value: string) => {
    save(items.map(item => item.id === id ? { ...item, [key]: value } : item));
  };

  const remove = (id: string) => save(items.filter(i => i.id !== id));

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-4 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1" style={{ background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)' }}>✓</div>
          <div className="flex-1 space-y-2">
            <div><label className={labelClass}>Title</label><input className={inputClass} value={item.title} onChange={e => update(item.id, 'title', e.target.value)} placeholder="GATE 2024 Qualified" /></div>
            <div><label className={labelClass}>Subtitle</label><input className={inputClass} value={item.subtitle} onChange={e => update(item.id, 'subtitle', e.target.value)} placeholder="Graduate Aptitude Test" /></div>
          </div>
          <button onClick={() => remove(item.id)} className="text-red-400/40 hover:text-red-400 text-sm cursor-pointer flex-shrink-0 mt-1">✕</button>
        </div>
      ))}
      <button onClick={add} className="w-full py-3 rounded-xl text-white font-medium text-sm uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform" style={btnGradient}>
        + Add Certification
      </button>
    </div>
  );
};

export default EditCertifications;
