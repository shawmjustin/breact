import React, { Component } from 'react';
import Splash from './components/Splash';
// import logo from './logo.svg';
import './App.css';
import { getCookie } from './components/components';
// import RouterExample from './components/RouterExample';



const token = getCookie('token');
const uid = getCookie('uid');

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <div className="wrapper">
          <Splash token={token} uid={uid} />
        </div>
        
      </div>
    );
  }
}

export default App;
