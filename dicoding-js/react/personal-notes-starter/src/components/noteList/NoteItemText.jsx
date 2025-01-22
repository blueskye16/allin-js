import React, { useState } from 'react';
import { showFormattedDate } from '../../utils';

function NoteItemText({ title, createdAt, body }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 200;
  const shortBody = body.length > maxLength ? `${body.slice(0, maxLength)}...` : body;

  return (
    <React.Fragment>
      <h3>{title}</h3>
      <p className="note-list_item_date">{showFormattedDate(createdAt)}</p>
      <p>
        {isExpanded ? body : shortBody}
        {body.length > maxLength && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="expand-button"
          >
            {isExpanded ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lainnya'}
          </button>
        )}
      </p>
    </React.Fragment>
  );
}

export default NoteItemText;
