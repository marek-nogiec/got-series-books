'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var RelationInfo = require('./RelationInfo');
var GotActions = require('../actions/GotActions');
var GotStore = require('../stores/GotStore');
var GotData = require('../services/GotData');

var getChapterBook = require('../helpers/utils').getChapterBook;
var getChapterColor = require('../helpers/utils').getChapterColor;

function _getStyles (chapter, episode) {
  return {
    left: chapter * 20 + "px",
    top: episode * 20 + "px",
    backgroundColor: getChapterColor(chapter)
  };
}

var RelationBlock = React.createClass({
  mixins: [Reflux.connect(GotStore, 'displayInfo')],
  getInitialState: function () {
    return {displayInfo: {}};
  },
  _handleMouseOver: function () {
    GotActions.showRelationInfo({
      episodeId: this.props.episodeId,
      chapterId: this.props.chapterId
    });
  },
  _handleMouseLeave: function () {
    GotActions.hideRelationInfo({
      episodeId: this.props.episodeId,
      chapterId: this.props.chapterId
    });
  },
  _shouldBeActive: function () {
    return this.state.displayInfo.relation &&
        this.state.displayInfo.relation.chapter.id === this.props.chapterId &&
        this.state.displayInfo.relation.episode.id === this.props.episodeId &&
        this.state.displayInfo.show;
  },
  render: function () {
    this.state.displayInfo = this.state.displayInfo || {};
    var relationInfo = '';
    if (this._shouldBeActive()) {
      var chapter = this.state.displayInfo.relation.chapter;
      var episode = this.state.displayInfo.relation.episode;
      relationInfo = <RelationInfo chapter={chapter} episode={episode} />;
    }
    return (
      <div className="relation-block"
           style={_getStyles(this.props.chapterId, this.props.episodeId)}
           onMouseOver={this._handleMouseOver}
           onMouseLeave={this._handleMouseLeave}>
        {relationInfo}
      </div>
    );
  }
});

module.exports = RelationBlock;
