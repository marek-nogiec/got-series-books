'use strict';

var React = require('react/addons');

var ChaptersListItem = require('./ChaptersListItem');

// Static
var books = require('../static/chapters.json');
var episodes = require('../static/episodes.json');
var relations = require('../static/relations.json');

var mergedChapters = books.reduce(function(prev, next){
  return {chapters: prev.chapters.concat(next.chapters)};
}, {chapters: []}).chapters;

class ChaptersList extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  render () {
    var chapters = mergedChapters.map(function (chapter, i) {
      return <ChaptersListItem chapter={chapter} key={i} />;
    });
    return (
      <div className="chapters-list">
        {chapters}
      </div>
    );
  }
}

module.exports = ChaptersList;