import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../styles/index.scss';
import HelloWorld from './components/HelloWorld';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HelloWorld} />
      </Router>
    )
  }
}
