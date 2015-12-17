var React = require('react'),
_ = require('lodash'),
Tag = require('./tag'),
containerStyle = {
                    'width': '80%',
                    'minHeight': '100px',
                    border: '1px solid black',
                    fontSize: '12px'
              }
module.exports =   React.createClass({
  getInitialState:function(){ //will run once only
      return {
          editable: true,
          emailList: []
          
      };
    },
  update: function (e) {
    var that=this, emails;
     
     that.setState(
          {
            editable: true,
            emailList : []
            
          }
        );
      var textNodes = Array.prototype.slice.call(e.target.childNodes).filter(function(n){
        if( n.nodeType === 3 ){
          return true;
        }
        return false;
      }) || [];

      
      textNodes[0]  && ( emails = textNodes[0].textContent.split(/(\s+)/).filter(function(n,i){
        n=n.trim();
        if( n != ""){
          return true;
        }
      }),that.state.emailList.push( emails[0] ), that.setState(
          {
            editable: true,
            emailList : that.state.emailList
          }
        ),
      textNodes[0].textContent = ""); 
      
      
      
  },
  onSpace: function (e) {
    var that=this;
     if(e.keyCode !== 32){
      return false;
     }
     that.update.call(that,e);
  },
  onBlur: function (e) {
    var that=this;
     that.update.call(that,e);
  },
  isValidEmail: function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
      
      return true;
    }
    return false;
  },
  removeEmail: function(email){
    var that = this;
    var newEmailList = _.pull(that.state.emailList,email);
    that.setState(
          {
            editable: true,
            emailList : newEmailList
          }
        );
    return false;
  },
  render: function() {
    var that =this;
      
     var  getEmailListHtml = function(){
        var that = this;
        return  that.state.emailList.map(function(email){
          return <Tag 
            label={email}
            whenClicked = {that.removeEmail.bind(that,email)}
            isValid = {that.isValidEmail.call(that,email)}/>
        }) || [];
      };
     return (
      <div>
          <div editable={that.state.editable}
                  style = {containerStyle}
                  onKeyUp= {that.onSpace.bind(that)}
                  onBlur= {that.onBlur.bind(that)}
                  contentEditable= {undefined === that.state.editable ? true: that.state.editable}>{getEmailListHtml.call(that)}</div>
      </div>
    );
  }
});