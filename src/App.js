import React, { Component } from 'react';
import './App.css';
import Flexi from './components/flexi';
import flexiConfig from "./flexi-config";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  onFlexiSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
    if(Object.keys(data).length === 0) {
      alert("Please enter some data");
    }
    else {
      alert("Entered values in JSON are as follows: \n\n" + JSON.stringify(data));
    }
  }

  render() {
    return (
      <div className="App">
        <Flexi onSubmit={(e, data) => this.onFlexiSubmit(e, data)} config={flexiConfig} />
      </div>
    );
  }
}

export default App;
