import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './router/index.jsx';
import UserContext from './contexts/UserProvider/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <AppRouter />
    </UserContext>
  </StrictMode>,
);
