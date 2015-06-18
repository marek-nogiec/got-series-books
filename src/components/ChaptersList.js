'use strict';

var React = require('react/addons');

var ChaptersListItem = require('./ChaptersListItem');
var GotData = require('../services/GotData');

var ChaptersList = React.createClass({
  render: function () {
    var chapters = GotData.getMergedChapters().map(function (chapter, i) {
      return <ChaptersListItem chapter={{id: i, title: chapter}} key={i} />;
    });
    return (
      <div className="chapters-list">
        {chapters}
      </div>
    );
  }
});

module.exports = ChaptersList;