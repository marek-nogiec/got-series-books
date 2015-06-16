'use strict';

var React = require('react/addons');
var RelationBlock = require('./RelationBlock');

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

function checkForRelation (chapter, episode, callback) {
  relations.filter(function (item, index, array) {
    if (item.chapter === chapter && item.episode === episode) {
      callback(array, index);
      return true;
    }
  });
  return false;
}

class GotTable extends React.Component {
  constructor () {
    super();
    this.state = getData();
  }
  render () {
    var books = this.state.books.map(function(book, i){
      var styles = {
        width: book.chapters.length * 20 + "px",
        borderBottomColor: book.color
      };
      return (
        <div className="book-title" key={i} style={styles}>
          {book.title}
        </div>
      );
    });
    var mergedChapters = this.state.books.reduce(function(prev, next){
      return {chapters: prev.chapters.concat(next.chapters)};
    }, {chapters: []}).chapters;

    var chapters = mergedChapters.map(function (chapter, i) {
      return (
        <div className="chapter-title" key={i}>
          <span>{chapter}</span>
        </div>
      );
    });

    var mergedEpisodes = this.state.episodes.reduce(function(prev, next){
      return {episodes: prev.episodes.concat(next.episodes)};
    }, {episodes: []}).episodes;

    var relationsTable = mergedChapters.map(function (chapterTitle, chapterId) {
      var relations = [];
      mergedEpisodes.forEach(function (episodeTitle, episodeId) {
        checkForRelation(chapterId, episodeId, function (array, index) {
          relations.push((
            <RelationBlock
               chapter={{title: chapterTitle, id: chapterId}}
               episode={{title: episodeTitle, id: episodeId}} />
          ));
          array.splice(index, 1);
        }.bind(this));

      });
      return relations;
    });

    var episodes = mergedEpisodes.map(function (episode, i) {
      return (
        <div className="episodes-info">
          <div className="episode-title">
            {episode}
          </div>
        </div>
        );
    }, this);
    var styles = {height: mergedEpisodes.length * 20 + 180 + "px"};
    return (
      <div className="got-table">
        <div className="episodes-list">{episodes}</div>
        <div className="scrolling-data" style={styles}>
          <div className="books-row">{books}</div>
          <div className="chapters-row">{chapters}</div>
          <div className="relations-table">{relationsTable}</div>
        </div>
      </div>
    );
  }
}

module.exports = GotTable;
