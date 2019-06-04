import React from "react";
import { hydrate, render } from "react-dom";
import Home from "../pages/containers/home";
// import Playlist from './src/playlist/components/playlist';
import data from "../api.json";
// console.log('Hola mundo!' )
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/data";
import normalizedData from "../schemas";
const initialState = {
	data: {
		...data
	},
	normalizedData: {
		...normalizedData.entities
	},
	search: []
};
const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(initialState);
const homeContainer = document.getElementById("home-container");

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
const toRender = (
	<Provider store={store}>
		<Home />
	</Provider>
);
render(toRender, homeContainer);
