import { combineReducers } from "redux";

//Reducers

const songsReducer = () => {
	return [
		{ title: "No Scrubs", duration: "4:05" },
		{ title: "Macarena", duration: "2:30" },
		{ title: "All Star", duration: "3:15" },
		{ title: "I Want It That Way", duration: "1:45" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	let song = "";
	if (action.type === "SONG_SELECTED") {
		song = action.payload;
	} else {
		song = selectedSong;
	}
	return song;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
