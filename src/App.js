import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import BandsInput from './components/BandInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
        <BandsInput />
      </div>
    );
  }
};

export default App;
