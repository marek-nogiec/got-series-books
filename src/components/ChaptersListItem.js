'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var GotStore = require('../stores/GotStore');

var getChapterBook = require('../helpers/utils').getChapterBook;

var ChaptersListItem = React.createClass({
  mixins: [Reflux.connect(GotStore, 'active')],
  _isActive: function () {
    return this.state.active &&
      this.state.active.relation.chapter.id === this.props.chapter.id &&
      this.state.active.show;
  },
  render: function () {
    var classes = "chapter-title";
    if (this._isActive()) {
      classes += " book-" + getChapterBook(this.props.chapter.id);
    }
    return (
      <div className={classes}>
        <span>{this.props.chapter.title}</span>
      </div>
    );
  }
});

module.exports = ChaptersListItem;