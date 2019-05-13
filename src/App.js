import React, { Component } from 'react';
import './App.css';

const ENGLISH_TITLE = 'Hello, Paraguay!';
const SPANISH_TITLE = '¡Hola, Paraguay!';

class App extends Component {
  state = {
    title: ENGLISH_TITLE,
  };

  handleTitleOnClick = () => {
    let newTitle = '';

    if (this.state.title === ENGLISH_TITLE) {
      newTitle = SPANISH_TITLE;
    } else {
      newTitle = ENGLISH_TITLE;
    }

    this.setState({ title: newTitle });
  }

  render() {
    return (
      <div className="App">
          <h1 id="title" onClick={this.handleTitleOnClick}>
              {this.state.title}
          </h1>
      </div>
    );
  }
}

export default App;
