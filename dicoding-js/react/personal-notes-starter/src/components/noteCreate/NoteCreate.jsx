import React, { useState } from 'react';
import NoteCreateForm from './NoteCreateForm';

function NoteCreate({ addNotes }) {
  const [remainingTitleChars, setRemainingTitleChars] = useState(50);

  // Callback to update remaining title characters
  const handleRemainingTitleChange = (remainingChars) => {
    setRemainingTitleChars(remainingChars);
  };

  return (
    <main>
      <div className="note-create_container">
        <div className="note-create_header">
          <h2>Buat Catatan</h2>
          <p>Sisa karakter: {remainingTitleChars}</p>
        </div>
        <NoteCreateForm addNotes={addNotes} onRemainingTitleChange={handleRemainingTitleChange} />
      </div>
    </main>
  );
}

export default NoteCreate;
