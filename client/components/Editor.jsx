import React from 'react';
import AceEditor from 'react-ace';

export default class Editor extends React.Component {
	render(){
		return (<div className="editor-panel">
			<AceEditor
				width="100%"
				height="250px"
				showPrintMargin={false}
			/>			
		</div>)
	}
}