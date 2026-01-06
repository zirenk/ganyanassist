import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Test Firebase initialization
import('./lib/firebase')
  .then(({ app }) => {
    console.log('%c✅ Firebase initialized', 'color: #10b981; font-weight: bold', app.options.projectId);
  })
  .catch((error) => {
    console.error('%c❌ Firebase initialization failed:', 'color: #ef4444; font-weight: bold', error);
  });

// Log version info to console
fetch('/version.json')
  .then(res => res.json())
  .then(data => {
    console.log(`%c🏇 HRAI v${data.version}`, 'color: #f59e0b; font-size: 16px; font-weight: bold');
    console.log(`%c📅 Build: ${data.buildDate}`, 'color: #10b981; font-size: 12px');
    console.log(`%c🚀 ${data.phase}`, 'color: #3b82f6; font-size: 12px');
  })
  .catch(() => console.log('Version info not available'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
