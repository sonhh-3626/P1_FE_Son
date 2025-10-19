import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import './index.css'
import App from './App.tsx'
import { ToastProvider } from './context/ToastContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </I18nextProvider>
  </StrictMode>,
)
