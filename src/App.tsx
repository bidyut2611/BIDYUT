import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { usePortfolioData } from './data/usePortfolioData';
import PortfolioPage from './pages/PortfolioPage';
import AdminPage from './pages/AdminPage';

function App() {
  const { data, updateSection, resetToDefaults, exportData, importData } = usePortfolioData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage data={data} />} />
        <Route
          path="/admin"
          element={
            <AdminPage
              data={data}
              updateSection={updateSection}
              exportData={exportData}
              importData={importData}
              resetToDefaults={resetToDefaults}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
