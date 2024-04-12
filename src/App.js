import React, {Component} from 'react';
import NavBar from './components/Navbar';
import Landing from './pages/Landing';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return (
      <div>
        {/* Need a switch routing path such that the navbar grows dynamically */}
        <NavBar/>
        <Landing/>
      </div>
    );
  }
}

export default App;
