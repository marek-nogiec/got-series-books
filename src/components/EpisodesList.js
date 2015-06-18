'use strict';

var React = require('react/addons');

var EpisodesListItem = require('./EpisodeListItem');
var GotData = require('../services/GotData');

var RelationsTable = React.createClass({
  render: function () {
    var episodes = GotData.getMergedEpisodes().map(function (episode, i) {
      return <EpisodesListItem episode={{title: episode, id: i}} key={i} />;
    }, this);
    return <div className="episodes-list">{episodes}</div>;
  }
});

module.exports = RelationsTable;