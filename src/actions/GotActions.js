'use strict';

var Reflux = require('reflux');

var GotActions = Reflux.createActions([
  'showRelationInfo',
  'hideRelationInfo'
]);

module.exports = GotActions;