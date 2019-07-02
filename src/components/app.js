import React, { Component } from 'react';
import _moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Sarah Choe Portfolio</h1>
        <div>
          {_moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
