export default (state = [], action) => {
	let newState = [];
	switch (action.type) {
		case "FETCH_POSTS":
			newState = action.payload;
			break;
		default:
			newState = state;
			break;
	}
	return newState;
};
