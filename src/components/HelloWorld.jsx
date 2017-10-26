import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {testAction} from '../actions/index';

class HelloWorld extends Component {
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
