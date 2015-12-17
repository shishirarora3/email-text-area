var React = require('react' ),
  Backbone = require("backbone"),
  _ = require('lodash'),
  $ = require('jquery'),

 RootViewLayout = require('./rootView'),
  BackboneMarionette = require("backbone.marionette")
 EmailContainer = require('./emailContainer')
 ;





if (window.__agent) {
  window.__agent.start(Backbone, BackboneMarionette);
}
$('.container').html("<div class='title'></div><div class='sidebar'></div><footer></footer>");
  



var EmailContainerView = Backbone.View.extend({
    initialize : function(options){
          this.options = options;
    },
    render: function(){
      var options = this.options;
      var Elem = React.createElement(EmailContainer,{});
      React.render(Elem, this.el);
    }
  });




//view layer
var rootViewLayout = new RootViewLayout( {el:$('.container')} );



var emailContainerView = new EmailContainerView();
//controller layer
var main1Region = rootViewLayout.getRegion('sidebar');

main1Region.show( emailContainerView );






