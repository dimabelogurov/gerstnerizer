/** @jsx React.DOM */

var _ = require('lodash');
var React = require('react');
var Fluxxor = require("fluxxor");
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var FeelLucky = React.createClass({

  mixins: [FluxChildMixin],

  render: function() {
    return <button onClick={this.generateLines}>Random Lines</button>
  },

  generateLines: function() {
    var lines = [];
    var l = _.random(3, 20);
    var pattern = this.props.grid;
    for (var i = 0; i < l; i++) {
      var p1 = pattern[_.random(pattern.length-1)];
      var p2 = pattern[_.random(pattern.length-1)];
      lines.push([p1, p2]);
    }
    this.getFlux().actions.setPattern(lines);
  }
});

module.exports = FeelLucky;