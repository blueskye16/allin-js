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
      searchKeyword: '',
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
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

  onSearchHandler(keyword) {
    this.setState({ searchKeyword: keyword.toLowerCase() }); // Simpan kata kunci dalam huruf kecil
  }

  render() {
    /*const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);*/

    const { notes, searchKeyword } = this.state;

    // Jika searchKeyword kosong, tampilkan semua catatan (aktif dan arsip)
    const filteredActiveNotes = notes.filter(
      (note) =>
        !note.archived &&
        (searchKeyword === '' ||
          note.title.toLowerCase().includes(searchKeyword) ||
          note.body.toLowerCase().includes(searchKeyword))
    );

    const filteredArchivedNotes = notes.filter(
      (note) =>
        note.archived &&
        (searchKeyword === '' ||
          note.title.toLowerCase().includes(searchKeyword) ||
          note.body.toLowerCase().includes(searchKeyword))
    );

    return (
      <div>
        <NotesHeader onSearch={this.onSearchHandler} />
        <NoteCreate addNotes={this.addNotesHandler} /> {/* Pass the handler */}
        <NoteList
          notes={filteredActiveNotes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchiveHandler}
          containerTitle="Catatan Aktif"
        />
        <NoteList
          notes={filteredArchivedNotes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchiveHandler}
          containerTitle="Catatan Arsip"
        />
      </div>
    );
  }
}

export default NotesApp;
