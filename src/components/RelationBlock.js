'use strict';

var React = require('react/addons');
var books = require('../static/chapters.json');

var bookChapters = [];
books.forEach(function(item, i){
  var prevEnd = i > 0 ? bookChapters[i-1].end : 0;
  bookChapters.push({
    id: i,
    start: prevEnd,
    end: prevEnd + item.chapters.length
  });
});

function getChapterColor (chapterNumber) {
  var bookId = bookChapters.filter(function (item) {
    return chapterNumber >= item.start && chapterNumber < item.end;
  })[0].id;
  return books[bookId].color;
}

function getChapterBook (chapterNumber) {
  var bookId = bookChapters.filter(function (item) {
    return chapterNumber >= item.start && chapterNumber < item.end;
  })[0].id;
  return bookId;
}

function getPrettyEpisodeFormat (episodeId) {
  var episodesInSeason = 10;
  var season = Math.floor(episodeId / episodesInSeason) + 1;
  var episode = episodeId % episodesInSeason + 1;
  return season + "x" + episode;
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
    var bookId = getChapterBook(this.state.chapter.id) + 1;
    document.querySelectorAll('.episode-title')[this.state.episode.id]
      .classList.toggle('book-' + bookId);
    document.querySelectorAll('.chapter-title')[this.state.chapter.id]
      .classList.toggle('book-' + bookId);
  }
  render () {
    var relationInfo = "";
    if (this.state.displayInfo) {
      relationInfo = (
        <div className="relation-info">
          <div className="relation-info-episode">
            Chapter: {this.state.chapter.title}
          </div>
          <div className="relation-info-chapter">
            Episode: {this.state.episode.title} ({getPrettyEpisodeFormat(this.state.episode.id)})
          </div>
        </div>
      );
    }
    var styles = {
      left: this.state.chapter.id * 20 + "px",
      top: this.state.episode.id * 20 + "px",
      backgroundColor: getChapterColor(this.state.chapter.id)
    };
    return (
      <div className="relation-block"
           style={styles}
           onMouseOver={this.toggleInfo.bind(this)}
           onMouseLeave={this.toggleInfo.bind(this)}>
        {relationInfo}
      </div>
    );
  }
}

module.exports = RelationBlock;
