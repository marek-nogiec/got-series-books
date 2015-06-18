'use strict';

var React = require('react/addons');
var RelationBlock = require('./RelationBlock');
var ChaptersList = require('./ChaptersList');
var BooksList = require('./BooksList');
var RelationsTable = require('./RelationsTable');
var EpisodesList = require('./EpisodesList');

// CSS
require('styles/GotTable.scss');

var GotTable = React.createClass({
  render: function () {
    return (
      <div className="got-table">
        <EpisodesList />
        <div className="data-table">
          <BooksList />
          <ChaptersList />
          <RelationsTable />
        </div>
      </div>
    );
  }
});

module.exports = GotTable;
