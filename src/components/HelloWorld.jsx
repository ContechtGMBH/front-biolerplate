import React, {Component} from 'react';
import {connect} from 'react-redux';
import { SubmissionError } from 'redux-form';
import {bindActionCreators} from 'redux';
import io from 'socket.io-client';
import {testAction} from '../actions/index';
import LoginForm from './forms/LoginForm'

import TestService from '../services/testService'

class HelloWorld extends Component {

  componentDidMount(){

    this.api = new TestService();

    //this.testing();

  }

  async testing() {

    const data = {
      query: 'mutation uploadFile($file: Upload){ uploadFile(file: $file){ success } }',
      variables: {
        file:  new File([1,2,3], "file.txt"),
      }
    }
    const u = await this.api.callGraphql(data);

    console.log(u)

  }

  handleSubmit(values) {

    console.log(values)

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    return sleep(1000) // simulate server latency
    .then(() => {

      throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' })

    })

  }

  render() {
    return (
      <div>

        <h2>
          Hello World!
        </h2>

        <p onClick={()=>this.props.testAction('Success!')}>{this.props.testing.testing}</p>

        <LoginForm onSubmit={this.handleSubmit} />

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
