import React, { useState } from 'react';
import Header from './components/Header'
import Liste from './components/Liste'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
        <Liste/>
        </div>
      </div>
    )
  }
}

export default App;
