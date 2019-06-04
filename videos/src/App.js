import React, { Component } from "react";
import youtube from "./api/youtube";
import VideoList from "./Components/VideoList/VideoList";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import VideoDetail from "./Components/VideoDetail/VideoDetail";

class App extends Component {
	state = {
		videoList: [],
		selectedVideo: null
	};
	onTermSubmit = async term => {
		const list = await youtube.get("/search", {
			params: {
				q: term
			}
		});
		this.setState({
			videoList: list.data.items,
			selectedVideo: list.data.items[0]
		});
	};
	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};
	render() {
		let renderized = "";
		if (this.state.selectedVideo) {
			renderized = (
				<div className="eleven wide column">
					<VideoDetail video={this.state.selectedVideo} />
				</div>
			);
		}
		return (
			<div className="App ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						{renderized}
						<div className={renderized !== "" ? "five wide column" : ""}>
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videoList={this.state.videoList}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
