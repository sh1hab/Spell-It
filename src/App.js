import React, { Component } from 'react';
import Spell from './components/spell';
import Header from './components/Header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header></Header>
        <Spell></Spell>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
