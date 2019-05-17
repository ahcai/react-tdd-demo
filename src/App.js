import React, { Component } from 'react';
import './App.css';

const ENGLISH_TITLE = 'Hello, Paraguay!';
const SPANISH_TITLE = '¡Hola, Paraguay!';

class App extends Component {
  state = {
    title: ENGLISH_TITLE,
  };

  handleTitleOnClick = () => {
    // toggle between the title language by updating the state
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
