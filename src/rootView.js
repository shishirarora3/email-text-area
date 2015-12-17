var React = require('react' ),
  $ = require('jquery'),
  Backbone = require("backbone"),
  _ = require('lodash'),
  BackboneMarionette = require("backbone.marionette"),
  reactBackbone = require("react-backbone"),
 backboneReactComponent = require("backbone-react-component");

module.exports = BackboneMarionette.LayoutView.extend({
  initialize:function(){
      this.render();
  },
  regions:{
    sidebar: '.sidebar' ,
    main :'.title',
    footer: 'footer'
  },
  render: function(){
   return this;
  }
    
});