import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
	let renderedView = () => {
		if (props.selectedSong) {
			return (
				<div>
					<h3>Details For:</h3>
					<p>Title: {props.selectedSong.title}</p>
					<p>Duration:{props.selectedSong.duration}</p>
				</div>
			);
		} else {
			return <div>Please Select a Song From The List</div>;
		}
	};
	return renderedView();
};
const mapStateToProps = state => {
	return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
