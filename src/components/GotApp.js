'use strict';

var React = require('react/addons');
var GotTable = require('./GotTable');

// CSS
require('normalize.css');
require('../styles/main.css');

class GotApp extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div className='main'>
        <GotTable></GotTable>
      </div>
    );
  }
}

React.render(<GotApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GotApp;
