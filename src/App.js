import { render } from '@testing-library/react';
import {Fragment} from 'react';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div>
        <div className="header">
          Phone Directory
        </div>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div>
    </div>
    </Fragment>
    );
  }
}

export default App;
