import React from "react";

const Editor = props => {
	return (
		<div className="Editor-Container">
			<h2 className="editor-title">MarkDown Previewer</h2>
			<textarea
				id="editor"
				className="Editor"
				value={props.markdown}
				onChange={props.captureMarkdown}
			/>
		</div>
	);
};
export default Editor;
