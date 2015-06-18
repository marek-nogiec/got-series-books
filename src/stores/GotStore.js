'use strict';

var Reflux = require('reflux');

var GotActions = require('../actions/GotActions');
var GotData = require('../services/GotData');

function getRelationData (relation) {
  return {
    episode: GotData.getEpisode(relation.episodeId),
    chapter: GotData.getChapter(relation.chapterId)
  };
}

var GotStore = Reflux.createStore({
  listenables: [GotActions],
  onShowRelationInfo: function (relation) {
    this.trigger({
      relation: getRelationData(relation),
      show: true
    });
  },
  onHideRelationInfo: function (relation) {
    this.trigger({
      relation: getRelationData(relation),
      show: false
    });
  }
});

module.exports = GotStore;