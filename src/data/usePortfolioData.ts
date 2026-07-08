import { useState, useEffect, useCallback } from 'react';
import {
  PortfolioData,
  defaultPortfolioData,
} from './defaultData';

const STORAGE_KEY = 'bidyut_portfolio_data';

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with defaults to handle new fields added later
        return { ...defaultPortfolioData, ...parsed };
      }
    } catch {
      // ignore parse errors
    }
    return defaultPortfolioData;
  });

  // Persist to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore storage errors
    }
  }, [data]);

  const updateSection = useCallback(
    <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const resetToDefaults = useCallback(() => {
    setData(defaultPortfolioData);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportData = useCallback(() => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [data]);

  const importData = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        const merged = { ...defaultPortfolioData, ...parsed };
        setData(merged);
      } catch {
        alert('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
  }, []);

  return { data, updateSection, resetToDefaults, exportData, importData };
}
