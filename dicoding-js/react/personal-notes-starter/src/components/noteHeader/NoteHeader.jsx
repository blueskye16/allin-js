import React from 'react';

function NotesHeader({ onSearch }) {
  return (
    <header>
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}

export default NotesHeader;
