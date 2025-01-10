import React from 'react';
import NoteItemButtons from './NoteItemButtons';

function NoteItemTextInput({ title, body, createdAt }) {
  return (
    <div className="note-list_item_container">
      <h3>{title}</h3>
      <p className="note-list_item_date">{createdAt}</p>
      <p>
        {body}
      </p>
      <NoteItemButtons />
    </div>
  );
}

export default NoteItemTextInput;
