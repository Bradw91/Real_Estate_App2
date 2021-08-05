import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

//remove or change
export class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Home />
      </div>
    );
  }
}

export default App;
