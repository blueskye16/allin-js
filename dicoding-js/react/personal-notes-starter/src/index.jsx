import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/NotesApp'

// import style
// import './styles/style.css';
import './styles/vin-style.css';

const root = createRoot(document.getElementById('root'));
// root.render(<h1>tester</h1>);
root.render(<NotesApp />);
