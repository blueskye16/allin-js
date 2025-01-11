import React from 'react';
import NoteItemText from './NoteItemText';
import NoteItemButtons from './NoteItemButtons';

function NoteItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  archived,
  onArchived,
}) {
  return (
    <div className="note-list_item_container">
      <NoteItemText title={title} body={body} createdAt={createdAt} />
      <NoteItemButtons
        id={id}
        onDelete={onDelete}
        archived={archived}
        onArchived={onArchived}
      />
    </div>
  );
}

export default NoteItem;
