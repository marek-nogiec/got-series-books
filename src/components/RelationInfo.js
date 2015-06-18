'use strict';

var React = require('react/addons');

function getPrettyEpisodeFormat (episodeId) {
  var episodesInSeason = 10;
  var season = Math.floor(episodeId / episodesInSeason) + 1;
  var episode = episodeId % episodesInSeason + 1;
  return season + "x" + episode;
}

class RelationInfo extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  render () {
    return (
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
}

module.exports = RelationInfo;