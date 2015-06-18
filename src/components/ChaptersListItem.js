'use strict';

var React = require('react/addons');

class ChaptersListItem extends React.Component {
  constructor (props) {
    super();
    this.state = props;
  }
  render () {
    return (
      <div className="chapter-title">
        <span>{this.state.chapter}</span>
      </div>
    );
  }
}

module.exports = ChaptersListItem;