'use strict';

var React = require('react/addons');
var GotTable = require('./GotTable');

// CSS
require('normalize.css');
require('../styles/main.css');

var GotApp = React.createClass({
  render: function () {
    return (
      <div className='main'>
        <GotTable></GotTable>
      </div>
    );
  }
});

React.render(<GotApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GotApp;
