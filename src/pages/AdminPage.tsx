import React, { useState } from 'react';
import AdminLogin from '../admin/AdminLogin';
import AdminLayout from '../admin/AdminLayout';
import { PortfolioData } from '../data/defaultData';

interface Props {
  data: PortfolioData;
  updateSection: <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => void;
  exportData: () => void;
  importData: (file: File) => void;
  resetToDefaults: () => void;
}

const AdminPage: React.FC<Props> = (props) => {
  const [isAuthed, setIsAuthed] = useState(() => sessionStorage.getItem('admin_auth') === 'true');

  if (!isAuthed) {
    return <AdminLogin onAuth={() => setIsAuthed(true)} />;
  }

  return <AdminLayout {...props} />;
};

export default AdminPage;
