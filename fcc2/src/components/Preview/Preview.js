import React from "react";
import { connect } from "react-redux";
import { convertText } from "../../actions";

const Preview = props => {
	console.log(props);
	return (
		<div className="preview-container">
			<div id="preview">{}</div>
		</div>
	);
};

const mapStateToProps = state => {
	console.log(state);
	return { convertedText: state.convertedText };
};

export default connect(
	mapStateToProps,
	{ convertText: convertText }
)(Preview);
