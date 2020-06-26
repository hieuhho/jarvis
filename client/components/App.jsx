import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>
          Hello World
        </div>
        <input
          type="text"
          placeholder="ask a question"
          id="text"
          value={text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
