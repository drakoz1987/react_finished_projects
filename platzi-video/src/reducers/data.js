const data = (state, action) => {
	let newState;
	switch (action.type) {
		case "SEARCH_VIDEO":
			let query = action.payload.query.toUpperCase();

			let searchArray = state.data.categories.map(item => {
				return item.playlist;
			});
			let newSearch = [];
			for (let i = 0; i < searchArray.length; i++) {
				for (let j = 0; j < searchArray[i].length; j++) {
					newSearch.push(searchArray[i][j]);
				}
			}
			let ed = newSearch.map(item => {
				let newItem = {
					title: item.title,
					author: item.author.toUpperCase(),
					type: item.type,
					cover: item.cover,
					src: item.src,
					id: item.id
				};
				return newItem;
			});

			let searchResult = ed.filter(item => {
				return item.author.includes(query);
			});

			const capitalize = s => {
				if (typeof s !== "string") return "";
				return s.charAt(0).toUpperCase() + s.slice(1);
			};
			let searched = searchResult.map(item => {
				let newItem = {
					title: item.title,
					author: capitalize(item.author.toLowerCase()),
					type: item.type,
					cover: item.cover,
					src: item.src,
					id: item.id
				};
				return newItem;
			});
			console.log(searched);
			newState = { ...state, search: searched };
			break;
		default:
			newState = { ...state };
	}
	return newState;
};

const data2 = (state, action) => {
	let newState;
	switch (action.type) {
		case "SEARCH_VIDEO":
			console.log(state);
			let query = action.payload.query.toUpperCase();
			let searchArray = [...state["normalizedData"]["media"]];
			console.log(searchArray);
			let ed = searchArray.map(item => {
				let newItem = {
					title: item.title,
					author: item.author.toUpperCase(),
					type: item.type,
					cover: item.cover,
					src: item.src,
					id: item.id
				};
				return newItem;
			});
			let searchResult = ed.filter(item => {
				return item.author.includes(query);
			});
			const capitalize = s => {
				if (typeof s !== "string") return "";
				return s.charAt(0).toUpperCase() + s.slice(1);
			};
			let searched = searchResult.map(item => {
				let newItem = {
					title: item.title,
					author: capitalize(item.author.toLowerCase()),
					type: item.type,
					cover: item.cover,
					src: item.src,
					id: item.id
				};
				return newItem;
			});
			newState = { ...state, search: searched };
			break;
		default:
			newState = [...state];
	}
};
export default data;
