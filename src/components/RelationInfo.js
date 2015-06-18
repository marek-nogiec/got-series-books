'use strict';

var React = require('react/addons');

function getPrettyEpisodeFormat (episodeId) {
  var episodesInSeason = 10;
  var season = Math.floor(episodeId / episodesInSeason) + 1;
  var episode = episodeId % episodesInSeason + 1;
  return season + "x" + episode;
}

var RelationInfo = React.createClass({
  render: function () {
    return (
      <div className="relation-info">
        <div className="relation-info-episode">
          Chapter: {this.props.chapter.title}
        </div>
        <div className="relation-info-chapter">
          Episode: {this.props.episode.title} ({getPrettyEpisodeFormat(this.props.episode.id)})
        </div>
      </div>
    );
  }
});

module.exports = RelationInfo;