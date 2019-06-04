import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

export default combineReducers({
	//if we are not using any reducer we must put a dummmy variable here to avoid errors in the compilation and execution of the app
	posts: postsReducer,
	user: userReducer
});
 