import React from 'react';
import AdSpace from './Adspace.jsx';
import Editor from './Editor.jsx';
import OptionPanel from './OptionPanel.jsx';
import Support from './Support.jsx';
import Button from './Button.jsx';

export default class Body extends React.Component {
	render(){
		return (
		<div className="body">
			<AdSpace/>
			<Editor/>
			<Button label="test"/>
			<OptionPanel/>
			<Support/>
		</div>);
	}
}
