import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchived, containerTitle }) {
  return (
    <div className="note-list_container">
      <h2>{containerTitle}</h2>
      {console.log(notes)}
      <div className="note-list_wrap">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchived={onArchived}
              {...note}
            />
          ))
        ) : (
          <p>Tidak ada catatan.</p>
        )}
      </div>
    </div>
  );
}

export default NoteList;
