//Third Party Imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
//
//My Own Dependencies
import App from "./Components/App";
import reducers from "./reducers";
//

let whereToRender = document.getElementById("root");

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	whereToRender
);
