import React from 'react';
import { createRoot } from 'react-dom/client';
import amikomLogo from './Logo Universitas AMIKOM Purwokerto.png';

const element = (
    <div>
      <h1>Biodata Perusahaan</h1>
      <ul>
        <li>Nama: Dicoding Indonesia</li>
        <li>Bidang: Education</li>
        <li>Tagline: Decode Ideas, Discover Potential.</li>
        <img src={amikomLogo} alt="Amikom logo" className="width: 400px;"/>
      </ul>
    </div>
  );

const root = createRoot(document.getElementById('root'));
root.render(element);

/* 
  gambarnya bisa langsung masukin src dari public atau pake modularization (import)
*/