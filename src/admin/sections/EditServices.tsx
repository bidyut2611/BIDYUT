import React, { useState, useEffect } from 'react';
import { ServiceItem, genId } from '../../data/defaultData';

interface Props {
  data: ServiceItem[];
  onSave: (data: ServiceItem[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditServices: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  useEffect(() => setItems(data), [data]);

  const save = (updated: ServiceItem[]) => { setItems(updated); onSave(updated); };

  const add = () => {
    const num = String(items.length + 1).padStart(2, '0');
    save([...items, { id: genId(), number: num, name: '', description: '' }]);
  };

  const update = (id: string, key: keyof ServiceItem, value: string) => {
    save(items.map(item => item.id === id ? { ...item, [key]: value } : item));
  };

  const remove = (id: string) => {
    const updated = items.filter(i => i.id !== id).map((item, idx) => ({ ...item, number: String(idx + 1).padStart(2, '0') }));
    save(updated);
  };

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const arr = [...items];
    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
    save(arr.map((item, i) => ({ ...item, number: String(i + 1).padStart(2, '0') })));
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={item.id} className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#B600A8] font-black text-2xl">{item.number}</span>
            <div className="flex gap-2">
              {idx > 0 && <button onClick={() => moveUp(idx)} className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-sm cursor-pointer px-2">↑</button>}
              {idx < items.length - 1 && <button onClick={() => moveUp(idx + 1)} className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] text-sm cursor-pointer px-2">↓</button>}
              <button onClick={() => remove(item.id)} className="text-red-400/60 hover:text-red-400 text-sm cursor-pointer px-2">✕ Delete</button>
            </div>
          </div>
          <div className="space-y-3">
            <div><label className={labelClass}>Service Name</label><input className={inputClass} value={item.name} onChange={e => update(item.id, 'name', e.target.value)} placeholder="e.g. AI/ML Solutions" /></div>
            <div><label className={labelClass}>Description</label><textarea className={`${inputClass} min-h-[80px] resize-y`} value={item.description} onChange={e => update(item.id, 'description', e.target.value)} placeholder="Describe this service..." /></div>
          </div>
        </div>
      ))}
      <button onClick={add} className="w-full py-3 rounded-xl text-white font-medium text-sm uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform" style={btnGradient}>
        + Add Service
      </button>
    </div>
  );
};

export default EditServices;
