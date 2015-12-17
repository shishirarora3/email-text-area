var React = require('react'),
_ = require('lodash');

module.exports = React.createClass({
    displayName: "Editable-Text-Container",

    propTypes: {
        html: React.PropTypes.string
    },
    shouldComponentUpdate: function (nextProps) {
        return nextProps.editable !== this.props.editable;
    },
    componentDidUpdate: function () {
        if (this.props.html !== this.getDOMNode().innerHTML) {
            this.getDOMNode().innerHTML = this.props.html;
        }
    },
    handleChange: function (e) {
        var html = this.getDOMNode().innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            e.target = {value: html};
            this.props.onChange(e);
        }
        this.lastHtml = html;
    },
    render: function () {
        return <div {...props}>
                </div>
        return React.createElement('div', {
                onKeyUp: this.handleChange,
                onBlur: this.handleChange,
                contentEditable: undefined === this.props.editable ? true: this.props.editable,
                dangerouslySetInnerHTML: {__html: this.props.html}});
    }
});