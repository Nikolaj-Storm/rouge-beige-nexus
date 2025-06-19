
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// GitHub Pages SPA hack
if (typeof window !== 'undefined') {
  const isGitHubPages = window.location.hostname.includes('github.io');
  if (isGitHubPages && window.location.search.includes('/?/')) {
    const path = window.location.search.slice(3).replace(/&/g, '?').replace(/~and~/g, '&');
    window.history.replaceState(null, '', window.location.pathname + path + window.location.hash);
  }
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
