import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div
			className="item VideoItem"
			onClick={() => {
				onVideoSelect(video);
			}}>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				key={video.id.videoId}
				alt={video.snippet.description}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};
export default VideoItem;
