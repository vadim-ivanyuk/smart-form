import React from 'react';
import './App.css';
import MainForm from './components/MainForm'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <MainForm />
    );
  }
}

export default App;