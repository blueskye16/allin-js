import React from 'react';


// kasih read more ke deskripsi aktif catatan -> deskripsi
function NoteList({ id, tittle, body, createdAt, archived }) {
  return (
    <div className="note-list_container">
      <h2>Catatan Aktif</h2>
      <div className="note-list_wrap">
        {/* <div className="note-list_item_container">
          <h3>Judul</h3>
          <p className='note-list_item_date'>10/01/2025</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate fugiat vitae rem porro sint, omnis architecto dolorum quidem nemo?</p>
          <div className="note-list_item_button_container">
            <button className="note-list_item_delete">Hapus</button>
            <button className="note-list_item_archive">Arsipkan</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NoteList;
