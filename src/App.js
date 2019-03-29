import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import AuctionContainer from './Components/AuctionContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AuctionContainer />
      </div>
    );
  }
}

export default App;
