import React from 'react';
import NotesHeader from './noteHeader/NoteHeader';
import NoteCreate from './noteCreate/NoteCreate';
import NoteList from './noteList/NoteList';
import { getInitialData } from '../utils';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    // Bind the addNotesHandler function
    this.addNotesHandler = this.addNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  addNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived }; // Toggle archived status
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);
    return (
      <div>
        <NotesHeader />
        <NoteCreate addNotes={this.addNotesHandler} /> {/* Pass the handler */}
        <NoteList
          notes={activeNotes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchiveHandler}
          containerTitle="Catatan Aktif"
        />
        <NoteList
          notes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchiveHandler}
          containerTitle="Catatan Arsip"
        />
      </div>
    );
  }
}

export default NotesApp;
