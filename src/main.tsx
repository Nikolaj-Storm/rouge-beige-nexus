
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Debug logging for GitHub Pages
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Mode:', import.meta.env.MODE);
console.log('Current location:', window.location.href);

// GitHub Pages SPA hack
if (typeof window !== 'undefined') {
  const isGitHubPages = window.location.hostname.includes('github.io');
  console.log('Is GitHub Pages:', isGitHubPages);
  if (isGitHubPages && window.location.search.includes('/?/')) {
    const path = window.location.search.slice(3).replace(/&/g, '?').replace(/~and~/g, '&');
    console.log('Redirecting to path:', path);
    window.history.replaceState(null, '', window.location.pathname + path + window.location.hash);
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log('Root element found, rendering app...');
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
