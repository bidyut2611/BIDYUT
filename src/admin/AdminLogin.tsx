import React, { useState } from 'react';

const ADMIN_PASSWORD = 'bidyut2026';

interface Props {
  onAuth: () => void;
}

const AdminLogin: React.FC<Props> = ({ onAuth }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true');
      onAuth();
    } else {
      setError('Incorrect password');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center px-4 font-kanit">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="hero-heading font-black uppercase text-center text-4xl sm:text-5xl mb-2">Admin</h1>
        <p className="text-[#D7E2EA]/50 text-center font-light text-sm mb-10">Enter password to access the dashboard</p>

        <div className="relative mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-[#D7E2EA]/5 border border-[#D7E2EA]/15 rounded-xl px-5 py-4 text-[#D7E2EA] font-light text-sm outline-none focus:border-[#B600A8]/50 transition-colors placeholder:text-[#D7E2EA]/30"
            autoFocus
          />
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-xl font-medium uppercase tracking-widest text-white py-4 text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
          style={{
            background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          }}
        >
          Enter Dashboard
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
