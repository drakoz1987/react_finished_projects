import React from "react";
import "./App.css";
import SongList from "./SongList/SongList";
import SongDetails from "./SongDetails/SongDetail";

const App = props => {
	return (
		<div className="App ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongDetails />
				</div>
			</div>
		</div>
	);
}; 

export default App;
