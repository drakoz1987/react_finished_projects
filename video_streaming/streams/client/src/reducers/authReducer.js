const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

export default (state = INITIAL_STATE, action) => {
	let newState;
	switch (action.type) {
		case "SIGN_IN":
			newState = {
				...state,
				isSignedIn: true,
				userId: action.payload.id
			};
			break;
		case "SIGN_OUT":
			newState = { ...state, isSignedIn: false, userId: null };
			break;
		default:
			newState = { ...state };
	}
	return newState;
};
