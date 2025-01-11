import React from 'react';
import { showFormattedDate } from '../../utils';

function NoteItemText({ title, createdAt, body }) {
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p className="note-list_item_date">{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </React.Fragment>
  );
}

export default NoteItemText;
