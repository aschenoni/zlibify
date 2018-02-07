import React from 'react';

export default class Button extends React.Component {
	constructor(props){
		super(props);
		this.label = props.label;
	}

	render () {
		return (<div className="btn">{this.label}</div>)
	}
}