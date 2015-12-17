var React = require('react');
var closeStyle = {
    padding: '2px',
    color: 'white',
    backgroundColor: 'rgb(43,123,169)',
    opacity: '0.8',
    display: 'table-cell',
    padding: '4px 11px 7px 11px',
    border: '5px solid transparent'
  };
  var closeIconStyle = {
    color: 'white',
    opacity: 1,
    color: 'white',
    lineHeight: 'inherit',
    fontSize: '13px'
  };
  var labelStyle = {
    verticalAlign: 'middle',
    display: 'table-cell'
  }
module.exports = React.createClass({

  render: function(){
    var that =this,
    props = that.props,
    tagStyle = {
                float: 'left',
                fontSize: '12px',
                padding: '2px',
                background: props.color || 'rgb(223,223,223)',
                margin: '2px',
                display: 'table',
                border: '1px solid ' + (props.isValid?'transparent':'red')
              },
    icon = function(){
      if( props.whenClicked ){
        return <div style={closeStyle}><span style={closeIconStyle} 
                onClick={props.whenClicked} 
                className='close'>x</span></div>
            
      }
      
    }
    return <div 
                 className='tag' style={tagStyle}><span style={labelStyle}>{props.label} </span>
                {icon()}
           </div>
  }
});