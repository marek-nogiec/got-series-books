'use strict';

var React = require('react/addons');

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

class RelationsTable extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  render () {
    var episodes = mergedEpisodes.map(function (episode, i) {
      return (
        <div className="episodes-info" key={i}>
          <div className="episode-title">
            {episode}
          </div>
        </div>
      );
    }, this);
    return <div className="episodes-list">{episodes}</div>;
  }
}

module.exports = RelationsTable;