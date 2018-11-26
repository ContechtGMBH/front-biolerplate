import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import io from 'socket.io-client';
import {testAction} from '../actions/index';

import TestService from '../services/testService'

class HelloWorld extends Component {

  componentDidMount(){

    this.api = new TestService();

    this.testing();

  }

  async testing() {

    const u = await this.api.getSomething();

    console.log(u)

  }

  render() {
    return (
      <div>
        <h2>
          Hello World!
        </h2>
        <p onClick={()=>this.props.testAction('Success!')}>{this.props.testing.testing}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        testing: state.testing,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        testAction: testAction,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HelloWorld);
