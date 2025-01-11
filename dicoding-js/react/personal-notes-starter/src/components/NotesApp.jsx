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

  render() {
    return (
      <div>
        <NotesHeader />
        <NoteCreate addNotes={this.addNotesHandler} /> {/* Pass the handler */}
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesApp;
