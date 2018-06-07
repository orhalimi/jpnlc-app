import React, { Component } from 'react';
import Header from './header/Header';

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
