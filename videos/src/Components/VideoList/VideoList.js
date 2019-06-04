import React from "react";
import VideoItem from "../VideoItem/VideoItem";
const VideoList = ({ videoList, onVideoSelect }) => {
	return (
		<div className="VideoList ui relaxed divided list">
			{videoList.map(item => {
				return <VideoItem onVideoSelect={onVideoSelect} video={item} />;
			})}
		</div>
	);
};
export default VideoList;
