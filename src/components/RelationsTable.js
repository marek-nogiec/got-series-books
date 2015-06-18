'use strict';

var React = require('react/addons');

var RelationBlock = require('./RelationBlock');

// Static
var books = require('../static/chapters.json');
var episodes = require('../static/episodes.json');
var relations = require('../static/relations.json');

var mergedChapters = books.reduce(function(prev, next){
  return {chapters: prev.chapters.concat(next.chapters)};
}, {chapters: []}).chapters;

var mergedEpisodes = episodes.reduce(function(prev, next){
  return {episodes: prev.episodes.concat(next.episodes)};
}, {episodes: []}).episodes;

function checkForRelation (chapter, episode, callback) {
  relations.filter(function (item, index, array) {
    if (item.chapter === chapter && item.episode === episode) {
      callback(array, index);
      return true;
    }
  });
  return false;
}

class RelationsTable extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  render () {
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
    return <div className="relations-table">{relationsTable}</div>;
  }
}

module.exports = RelationsTable;