import React from "react";

const Preview = props => {
	return (
		<div className="Preview-Container">
			<div
				id="preview"
				className="Preview"
				dangerouslySetInnerHTML={{ __html: props.renderedHtml }}
			/>
		</div>
	);
};
export default Preview;
