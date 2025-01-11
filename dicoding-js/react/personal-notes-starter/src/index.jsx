import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/NotesApp'

// import style

import './styles/vin-style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);
