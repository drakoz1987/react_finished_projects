import { combineReducers } from "redux";
import authReducer from "./authReducer";
//Redux form reducer:
import { reducer as formReducer } from "redux-form";

export default combineReducers({
	auth: authReducer,
	//the redux=form reducer must be linked to a reducer called form within our app
	form: formReducer
});
