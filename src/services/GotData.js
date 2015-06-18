'use strict';

var _books = require('../static/chapters.json');
var _episodes = require('../static/episodes.json');
var _relations = require('../static/relations.json');


var _mergedChapters = _books.reduce(function(prev, next){
  return {chapters: prev.chapters.concat(next.chapters)};
}, {chapters: []}).chapters;

var _mergedEpisodes = _episodes.reduce(function(prev, next){
  return {episodes: prev.episodes.concat(next.episodes)};
}, {episodes: []}).episodes;



module.exports = {
  getBooks: function () {
    return _books;
  },
  getEpisodes: function () {
    return _episodes;
  },
  getRelations: function () {
    return _relations;
  },
  getMergedChapters: function () {
    return _mergedChapters;
  },
  getMergedEpisodes: function () {
    return _mergedEpisodes;
  },
  getChapter: function (id) {
    var title = this.getMergedChapters()[id];
    return {
      id: id,
      title: title
    };
  },
  getEpisode: function (id) {
    var title = this.getMergedEpisodes()[id];
    return {
      id: id,
      title: title
    };
  },
  checkForRelation: function (chapter, episode, callback) {
    _relations.filter(function (item, index, array) {
      if (item.chapter === chapter && item.episode === episode) {
        callback(array, index);
        return true;
      }
    });
    return false;
  }
};