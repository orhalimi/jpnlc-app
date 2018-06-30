import React, { Component } from 'react';
import Header from './header/Header';
import Content from './Content';

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header /> {console.log(process.env.NODE_ENV)}
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
