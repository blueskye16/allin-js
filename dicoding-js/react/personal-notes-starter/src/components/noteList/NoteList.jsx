import React from 'react';
import NoteItem from './NoteItem';

// kasih read more ke deskripsi aktif catatan
function NoteList({ notes }) {
/*   if (!Array.isArray(notes)) {
    return <div>Loading notes..</div>;

  } */
  return (
    <div className="note-list_container">
      <h2>Catatan Aktif</h2>
      {console.log(notes)}
      <div className="note-list_wrap">
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
