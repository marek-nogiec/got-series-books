'use strict';

var React = require('react/addons');
var books = require('../static/chapters.json');
var RelationInfo = require('./RelationInfo');

var bookChapters = [];
books.forEach(function(item, i){
  var prevEnd = i > 0 ? bookChapters[i-1].end : 0;
  bookChapters.push({
    id: i,
    start: prevEnd,
    end: prevEnd + item.chapters.length
  });
});

function _getChapterColor (chapter) {
  var bookId = bookChapters.filter(function (item) {
    return chapter.id >= item.start && chapter.id < item.end;
  })[0].id;
  return books[bookId].color;
}

function _getChapterBook (chapter) {
  return bookChapters.filter(function (item) {
    return chapter.id >= item.start && chapter.id < item.end;
  })[0].id;
}

function _highlightTitles (chapter, episode) {
  var bookId = _getChapterBook(chapter) + 1;
  document.querySelectorAll('.episode-title')[episode.id]
    .classList.toggle('book-' + bookId);
  document.querySelectorAll('.chapter-title')[chapter.id]
    .classList.toggle('book-' + bookId);
}

function _getStyles (chapter, episode) {
  return {
    left: chapter.id * 20 + "px",
    top: episode.id * 20 + "px",
    backgroundColor: _getChapterColor(chapter)
  };
}

class RelationBlock extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  toggleInfo () {
    this.setState({
      displayInfo: !this.state.displayInfo
    });
    _highlightTitles(this.state.chapter, this.state.episode);
  }
  render () {
    var relationInfo = this.state.displayInfo
      ? <RelationInfo chapter={this.state.chapter} episode={this.state.episode} />
      : "";
    return (
      <div className="relation-block"
           style={_getStyles(this.state.chapter, this.state.episode)}
           onMouseOver={this.toggleInfo.bind(this)}
           onMouseLeave={this.toggleInfo.bind(this)}>
        {relationInfo}
      </div>
    );
  }
}

module.exports = RelationBlock;
