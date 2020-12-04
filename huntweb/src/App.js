import React, {Component} from 'react';
import Header from './components/Header/index';
import './styles.css';
import api from './services/api';
import Main from './pages/main'

class App extends Component{
  render () {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
  }


export default App;
