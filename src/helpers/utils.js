'use strict';

var books = require('../static/chapters.json');

var _bookChapters = [];
books.forEach(function(item, i){
  var prevEnd = i > 0 ? _bookChapters[i-1].end : 0;
  _bookChapters.push({
    id: i,
    start: prevEnd,
    end: prevEnd + item.chapters.length
  });
});

module.exports = {
  getChapterBook: function (chapter) {
    return _bookChapters.filter(function (item) {
        return chapter >= item.start && chapter < item.end;
      })[0].id + 1;
  },
  getChapterColor: function (chapter) {
    var bookId = _bookChapters.filter(function (item) {
      return chapter >= item.start && chapter < item.end;
    })[0].id;
    return books[bookId].color;
  }
};