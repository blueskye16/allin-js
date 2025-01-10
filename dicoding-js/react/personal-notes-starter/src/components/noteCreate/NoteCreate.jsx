import React from 'react';
import NoteList from '../noteList/NoteList';

function NoteCreate() {
  return (
    <main>
      <div className="note-create_container">
        <div className="note-create_header">
          <h2>Buat Catatan</h2>
          <p>sisa karakter: --</p>
        </div>
        <div className="note-create_input">
          <input type="text" placeholder="Tulis judul" />
          <textarea name="noteDetail" id="noteDetail" placeholder='Masukan detail catatan..'></textarea>
        </div>
        <button>Buat</button>
      </div>
      <NoteList />
    </main>
  );
}

export default NoteCreate;
