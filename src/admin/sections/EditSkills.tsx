import React, { useState, useEffect } from 'react';
import { SkillCategory, genId } from '../../data/defaultData';

interface Props {
  data: SkillCategory[];
  onSave: (data: SkillCategory[]) => void;
}

const inputClass = 'w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30';
const labelClass = 'text-[#D7E2EA]/60 font-medium text-xs uppercase tracking-widest mb-2 block';
const btnGradient = { background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' };

const EditSkills: React.FC<Props> = ({ data, onSave }) => {
  const [items, setItems] = useState(data);
  useEffect(() => setItems(data), [data]);

  const save = (updated: SkillCategory[]) => { setItems(updated); onSave(updated); };

  const addCategory = () => {
    save([...items, { id: genId(), title: '', icon: '📊', skills: [{ name: '', level: 50 }] }]);
  };

  const updateCategory = (id: string, key: 'title' | 'icon', value: string) => {
    save(items.map(cat => cat.id === id ? { ...cat, [key]: value } : cat));
  };

  const removeCategory = (id: string) => save(items.filter(c => c.id !== id));

  const addSkill = (catId: string) => {
    save(items.map(cat => cat.id === catId ? { ...cat, skills: [...cat.skills, { name: '', level: 50 }] } : cat));
  };

  const updateSkill = (catId: string, idx: number, key: 'name' | 'level', value: string | number) => {
    save(items.map(cat => {
      if (cat.id !== catId) return cat;
      const skills = [...cat.skills];
      skills[idx] = { ...skills[idx], [key]: value };
      return { ...cat, skills };
    }));
  };

  const removeSkill = (catId: string, idx: number) => {
    save(items.map(cat => {
      if (cat.id !== catId) return cat;
      return { ...cat, skills: cat.skills.filter((_, i) => i !== idx) };
    }));
  };

  return (
    <div className="space-y-6">
      {items.map((cat) => (
        <div key={cat.id} className="rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.02] p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <input className="text-2xl bg-transparent w-12 text-center outline-none cursor-text" value={cat.icon} onChange={e => updateCategory(cat.id, 'icon', e.target.value)} />
              <input className="text-[#D7E2EA] font-bold text-base bg-transparent outline-none focus:bg-[#D7E2EA]/5 rounded px-2 py-1 transition-colors" value={cat.title} onChange={e => updateCategory(cat.id, 'title', e.target.value)} placeholder="Category Name" />
            </div>
            <button onClick={() => removeCategory(cat.id)} className="text-red-400/60 hover:text-red-400 text-sm cursor-pointer">✕ Delete Category</button>
          </div>

          <div className="space-y-3">
            {cat.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <input className={`${inputClass} w-40 flex-shrink-0`} value={skill.name} onChange={e => updateSkill(cat.id, idx, 'name', e.target.value)} placeholder="Skill name" />
                <div className="flex-1 flex items-center gap-3">
                  <input
                    type="range"
                    min="0" max="100"
                    value={skill.level}
                    onChange={e => updateSkill(cat.id, idx, 'level', parseInt(e.target.value))}
                    className="flex-1 accent-[#B600A8] cursor-pointer"
                  />
                  <span className="text-[#D7E2EA]/50 text-xs w-10 text-right font-mono">{skill.level}%</span>
                </div>
                {cat.skills.length > 1 && (
                  <button onClick={() => removeSkill(cat.id, idx)} className="text-red-400/40 hover:text-red-400 text-sm cursor-pointer flex-shrink-0">✕</button>
                )}
              </div>
            ))}
            <button onClick={() => addSkill(cat.id)} className="text-[#B600A8]/60 hover:text-[#B600A8] text-xs cursor-pointer py-1">+ Add Skill</button>
          </div>
        </div>
      ))}
      <button onClick={addCategory} className="w-full py-3 rounded-xl text-white font-medium text-sm uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform" style={btnGradient}>
        + Add Skill Category
      </button>
    </div>
  );
};

export default EditSkills;
