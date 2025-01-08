import React from 'react';
import { createRoot } from 'react-dom/client';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.email} onChange={this.onEmailChangeHandler} />
      </form>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<NameForm />);
