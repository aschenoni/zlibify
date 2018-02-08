import React from 'react';
import '../assets/styles/button.scss';

export default class Button extends React.Component {
	handleClick () {
		this.props.clickHandler(this.props.label);
	}

	render () {
		return (<div className="button button-primary ripple" onClick={this.handleClick.bind(this)} >{this.props.label}</div>)
	}
}