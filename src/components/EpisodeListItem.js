'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var GotStore = require('../stores/GotStore');
var getChapterBook = require('../helpers/utils').getChapterBook;

var ChaptersListItem = React.createClass({
  mixins: [Reflux.connect(GotStore, 'active')],
  _isActive: function () {
    return this.state.active &&
      this.state.active.relation.episode.id === this.props.episode.id &&
      this.state.active.show;
  },
  render: function () {
    var classes = "episode-title";
    if (this._isActive()) {
      classes += " book-" + getChapterBook(this.props.episode.id);
    }
    return (
      <div className={classes}>
        {this.props.episode.title}
      </div>
    );
  }
});

module.exports = ChaptersListItem;