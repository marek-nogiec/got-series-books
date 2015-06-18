'use strict';

var React = require('react/addons');
var GotData = require('../services/GotData');

var _books = GotData.getBooks();

var BooksList = React.createClass({
  render: function () {
    var books = _books.map(function(book, i){
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
});

module.exports = BooksList;