const initialState = {
	token: null,
	errorMsg: "",
	details: {},
	genres_details: {},
};

const genreReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_GENRE": {
			return {
				...state,
				token: action.payload,
			};
		}
		case "GET_ALL_GENRES": {
			return {
				...state,
				details: action.payload,
			};
		}
		
		case "GET_GENRES_BY_ID": {
			return {
				...state,
				genres_details: action.payload,
			};
		}
		case "SET_CREATE_GENRE_MESSAGE": {
			return {
				...state,
				errorMsg: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default genreReducer;
