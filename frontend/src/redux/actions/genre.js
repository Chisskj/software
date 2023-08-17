import http from "../../helpers/http";

export const genre = (name) => {
	return async (dispatch) => {
		const params = new URLSearchParams();
		params.append("name", name);
		try {
			dispatch({
				type: "SET_CREATE_GENRE_MESSAGE",
				payload: "",
			});
			const results = await http().post(`genres`, params);
			localStorage.setItem("token", results.data.token);
			dispatch({
				type: "CREATE_GENRE",
				payload: results.data.token,
			});
		} catch (err) {
			const { message } = err.response.data;
			dispatch({
				type: "SET_CREATE_GENRE_MESSAGE",
				payload: message,
			});
		}
	};
};



export const all_genres = () => {
	return async (dispatch) => {
		const response = await http().get(`/all-genres`);
		console.log("responseresponseresponse: ", response.data.results)
		dispatch({
			type: "GET_ALL_GENRES",
			payload: response.data.results,
		});
		dispatch({
			type: "TOGGLE_CART_LOADING",
		});
	};
};


export const getGenresById = (id) => {
	return async (dispatch) => {
		const response = await http().get(`genres/${id}`);
		// console.log("responseresponseresponse: ", response.data.results)
		dispatch({
			type: "GET_GENRES_BY_ID",
			payload: response.data.results,
		});
		dispatch({
			type: "TOGGLE_CART_LOADING",
		});
	};
};