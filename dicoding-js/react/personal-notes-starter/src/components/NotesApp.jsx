import React from 'react';
import NotesHeader from './noteHeader/NoteHeader';
import NoteCreate from './noteCreate/NoteCreate';
// import { NoteCreate } from './noteCreate/NoteCreate';
// import { getInitialData, showFormattedDate } from '../utils/index';

/* class NotesApp extends _React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }
  }

  render() {
    return (
      <div>
        <NotesHeader />
        <h1>tester</h1>
      </div>
    );
  }
} */

  function NotesApp() {
    return (
      <div>
        <NotesHeader />
        <NoteCreate />
      </div>
    )
  }

export default NotesApp;