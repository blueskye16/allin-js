// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// styling
import './style.css';

// const element = <h1>Hello World!</h1>;

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);
