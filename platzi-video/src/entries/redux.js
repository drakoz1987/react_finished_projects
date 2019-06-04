import redux, { createStore, bindActionCreators } from "redux";
const $form = document.getElementById("form");
//El profesor coloca el signo de dolar en esa variable para denotar que es una variable del DOM, es completamente opcional

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	console.log(event.target.value);
	const data = new FormData($form);
	const title = data.get("title");
	store.dispatch(addSong(title));
}
const initialState = [
	{ title: "despacito" },
	{ title: "one more time" },
	{ title: "echame la culpa" }
];

const reducer = (state, action) => {
	let newState;
	switch (action.type) {
		case "ADD_SONG":
			newState = [...state, action.payload];
			break;
		default:
			newState = state;
	}
	return newState;
};
const store = createStore(
	//reducer
	reducer,
	//initialState
	initialState,
	//enhancer, en este caso el redux dev tools para chrome configurado en nuestra store
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let addSong = title => {
	return {
		type: "ADD_SONG",
		payload: { title }
	};
};
const render = () => {
	const $playlistContainer = document.querySelector("#playlist");
	const playlist = store.getState();
	$playlistContainer.innerHTML = "";
	playlist.map(elem => {
		const $template = document.createElement("p");
		$template.textContent = elem.title;
		$playlistContainer.appendChild($template);
	});
};
render();
const handleChange = () => {
	render();
};
store.subscribe(handleChange);
