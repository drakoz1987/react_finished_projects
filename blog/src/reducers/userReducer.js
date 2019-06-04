export default (state = [], action) => {
	let newState = [];
	switch (action.type) {
		case "FETCH_USER":
			newState = [...state, action.payload];
			break;
		default:
			newState = state;
			break;
	}
	return newState;
};
