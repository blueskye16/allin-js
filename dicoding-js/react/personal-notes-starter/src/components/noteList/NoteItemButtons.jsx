import React from 'react';

function NoteItemButtons({ id, onDelete, archived, onArchived }) {
  return (
    <div className="note-list_item_button_container">
      <button className="note-list_item_delete" onClick={() => onDelete(id)}>Hapus</button>
      <button className="note-list_item_archive" onClick={() => onArchived(archived)}>Arsipkan</button>
    </div>
  );
}

export default NoteItemButtons;
