'use strict';

var React = require('react/addons');

// Static
var booksData = require('../static/chapters.json');
var episodes = require('../static/episodes.json');
var relations = require('../static/relations.json');

class BooksList extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  render () {
    var books = booksData.map(function(book, i){
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
    return (
      <div className="books-row">
        {books}
      </div>
    );
  }
}

module.exports = BooksList;