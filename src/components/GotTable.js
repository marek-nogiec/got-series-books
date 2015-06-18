'use strict';

var React = require('react/addons');
var RelationBlock = require('./RelationBlock');
var ChaptersList = require('./ChaptersList');
var BooksList = require('./BooksList');
var RelationsTable = require('./RelationsTable');
var EpisodesList = require('./EpisodesList');

// CSS
require('styles/GotTable.scss');

// Static
var books = require('../static/chapters.json');
var episodes = require('../static/episodes.json');
var relations = require('../static/relations.json');

function getData () {
  return {
    books: books,
    episodes: episodes
  };
}

class GotTable extends React.Component {
  constructor () {
    super();
    this.state = getData();
  }
  render () {
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
}

module.exports = GotTable;
