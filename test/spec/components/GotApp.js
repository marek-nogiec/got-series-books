'use strict';

describe('GotApp', function () {
  var React = require('react/addons');
  var GotApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GotApp = require('components/GotApp.js');
    component = React.createElement(GotApp);
  });

  it('should create a new instance of GotApp', function () {
    expect(component).toBeDefined();
  });
});
