import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      title: '',
      body: '',
      maxTitleLength: 20,
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDetailChangeEventHandler =
      this.onDetailChangeEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({ title: '', body: '' }); // Clear the form after submission
  }

  onTitleChangeEventHandler(event) {
    // this.setState({ title: event.target.value });
    const value = event.target.value;
    if (value.length <= this.state.maxTitleLength) {
      this.setState({ title: value });
      const remainingTitleChars = this.state.maxTitleLength - value.length;
      // Call the callback to send remainingTitleChars to the parent component
      this.props.onRemainingTitleChange(remainingTitleChars);
    }
  }

  onDetailChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  render() {
    return (
      <form className="note-create_input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Tulis judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength={this.state.maxTitleLength}
        />
        <textarea
          name="noteDetail"
          id="noteDetail"
          placeholder="Masukan detail catatan.."
          value={this.state.body}
          onChange={this.onDetailChangeEventHandler}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteCreateForm;
