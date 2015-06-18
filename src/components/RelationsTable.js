'use strict';

var React = require('react/addons');

var RelationBlock = require('./RelationBlock');
var GotData = require('../services/GotData');




var RelationsTable = React.createClass({
  render: function () {
    var relationsTable = GotData.getRelations().map(function (relation, i) {
        return <RelationBlock key={i}
                              chapterId={relation.chapter}
                              episodeId={relation.episode}/>;
    });
    return <div className="relations-table">{relationsTable}</div>;
  }
});

module.exports = RelationsTable;