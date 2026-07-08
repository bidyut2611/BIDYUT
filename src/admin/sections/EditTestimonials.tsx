import React, { useState, useEffect } from 'react';
import { TestimonialItem, genId } from '../../data/defaultData';

interface Props {
  data: TestimonialItem[];
  onSave: (data: TestimonialItem[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditTestimonials: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  useEffect(() => setItems(data), [data]);

  const save = (updated: TestimonialItem[]) => { setItems(updated); onSave(updated); };

  const add = () => {
    save([...items, { id: genId(), quote: '', name: '', role: '', initials: '' }]);
  };

  const update = (id: string, key: keyof TestimonialItem, value: string) => {
    save(items.map(item => {
      if (item.id !== id) return item;
      const updated = { ...item, [key]: value };
      // Auto-generate initials from name
      if (key === 'name') {
        updated.initials = value.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
      }
      return updated;
    }));
  };

  const remove = (id: string) => save(items.filter(i => i.id !== id));

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={item.id} className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg, #B600A8 0%, #7621B0 100%)' }}>
                {item.initials || `#${idx + 1}`}
              </div>
              <span className="text-[#D7E2EA]/60 text-sm">{item.name || 'New Testimonial'}</span>
            </div>
            <button onClick={() => remove(item.id)} className="text-red-400/60 hover:text-red-400 text-sm cursor-pointer">✕ Delete</button>
          </div>
          <div className="space-y-3">
            <div><label className={labelClass}>Quote</label><textarea className={`${inputClass} min-h-[80px] resize-y`} value={item.quote} onChange={e => update(item.id, 'quote', e.target.value)} placeholder="What did they say about you?" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div><label className={labelClass}>Full Name</label><input className={inputClass} value={item.name} onChange={e => update(item.id, 'name', e.target.value)} placeholder="John Doe" /></div>
              <div><label className={labelClass}>Role / Title</label><input className={inputClass} value={item.role} onChange={e => update(item.id, 'role', e.target.value)} placeholder="Professor, IIT Delhi" /></div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={add} className="w-full py-3 rounded-xl text-white font-medium text-sm uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform" style={btnGradient}>
        + Add Testimonial
      </button>
    </div>
  );
};

export default EditTestimonials;
