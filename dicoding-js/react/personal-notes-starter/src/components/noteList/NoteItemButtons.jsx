import React from 'react';

function NoteItemButtons({ id, onDelete, archived, onArchived }) {
  return (
    <div className="note-list_item_button_container">
      <button onClick={() => onDelete(id)}>Hapus</button>
      <button onClick={() => onArchived(id)}>
        {archived ? 'Pindah ke Aktif' : 'Arsipkan'}
      </button>
    </div>
  );
}

export default NoteItemButtons;
