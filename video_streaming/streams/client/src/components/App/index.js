import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "../Streams/StreamList";
import StreamCreate from "../Streams/StreamCreate";
import StreamDelete from "../Streams/StreamDelete";
import StreamEdit from "../Streams/StreamEdit";
import StreamShow from "../Streams/StreamShow";
import Header from "../Header";

//Paths to be used in the App with its respective components:
//  '/'		  			----> 		StreamList
//	'/streams/new'		---->		StreamCreate
//  '/streams/edit'		---->		StreamEdit
//	'streams/delete' 	---->		StreamDelete
//	'streams/show'		---->		StreamShow

const App = props => {
	return (
		<div className="App ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
};
export default App;
