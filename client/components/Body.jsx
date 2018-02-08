import React from 'react';
import AdSpace from './Adspace.jsx';
import Editor from './Editor.jsx';
import OptionPanel from './OptionPanel.jsx';
import Support from './Support.jsx';
import Button from './Button.jsx';
import pako from 'pako';
export default class Body extends React.Component {

	constructor(props){
		super(props);
		this.state = {editorValue: 'test'};
	}

	render(){
		return (
		<div className="body">
			<AdSpace/>
			<Editor value={this.state.editorValue} onChange={this.onChange.bind(this)}/>
			<Button label="COMPRESS" clickHandler={this.handleClick.bind(this)}/>
			<Button label="DECOMPRESS" clickHandler={this.handleClick.bind(this)}/>
			<OptionPanel/>
			<Support/>
		</div>);
	}

	handleClick(type){
		if(type === 'COMPRESS'){
			this.compress(this.value);
		} else if(type === 'DECOMPRESS'){
			this.decompress(this.value);
		}
	}

	compress(value){
		let compressed = pako.deflate(value, {to: 'string'});
		this.setState({editorValue: compressed});
		this.onChange(compressed);
	}
	
	decompress(value){
		console.log(value);
		let decompressed = pako.inflate(value, {to: 'string'});
		this.setState({editorValue: decompressed});
		this.onChange(decompressed);
	}

	onChange(value){
		console.log(value);
		this.value = value;
	}


}
