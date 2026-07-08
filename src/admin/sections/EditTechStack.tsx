import React, { useState, useEffect } from 'react';
import { TechItem, genId } from '../../data/defaultData';

interface Props {
  data: TechItem[];
  onSave: (data: TechItem[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditTechStack: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  const [newName, setNewName] = useState('');
  const [newIcon, setNewIcon] = useState('');
  useEffect(() => setItems(data), [data]);

  const save = (updated: TechItem[]) => { setItems(updated); onSave(updated); };

  const add = () => {
    if (!newName.trim()) return;
    save([...items, { id: genId(), name: newName.trim(), icon: newIcon || '🔧' }]);
    setNewName(''); setNewIcon('');
  };

  const remove = (id: string) => save(items.filter(i => i.id !== id));

  const update = (id: string, key: keyof TechItem, value: string) => {
    save(items.map(item => item.id === id ? { ...item, [key]: value } : item));
  };

  return (
    <div className="space-y-6">
      {/* Add new */}
      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-5">
        <h3 className="text-[#D7E2EA] font-bold text-base mb-4">Add Technology</h3>
        <div className="flex gap-3 items-end">
          <div className="w-20">
            <label className="text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block">Icon</label>
            <input className={inputClass} value={newIcon} onChange={e => setNewIcon(e.target.value)} placeholder="🔧" />
          </div>
          <div className="flex-1">
            <label className="text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block">Name</label>
            <input className={inputClass} value={newName} onChange={e => setNewName(e.target.value)} placeholder="e.g. Python" onKeyDown={e => e.key === 'Enter' && add()} />
          </div>
          <button onClick={add} className="px-6 py-3 rounded-xl text-white font-medium text-sm cursor-pointer hover:scale-105 active:scale-95 transition-transform flex-shrink-0" style={btnGradient}>Add</button>
        </div>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-4 group relative">
            <button onClick={() => remove(item.id)} className="absolute top-2 right-2 text-red-400/0 group-hover:text-red-400/60 hover:!text-red-400 text-xs cursor-pointer transition-colors">✕</button>
            <div className="text-center">
              <input className="text-3xl bg-transparent text-center w-full outline-none mb-1 cursor-text" value={item.icon} onChange={e => update(item.id, 'icon', e.target.value)} />
              <input className="text-[#D7E2EA] font-medium text-sm bg-transparent text-center w-full outline-none focus:bg-[#D7E2EA]/5 rounded px-1 transition-colors" value={item.name} onChange={e => update(item.id, 'name', e.target.value)} />
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#D7E2EA]/30 text-xs text-center">
        💡 Tip: Click on any icon or name to edit inline. Use emoji for icons (Win+. on Windows).
      </p>
    </div>
  );
};

export default EditTechStack;
