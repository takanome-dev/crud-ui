import { GET_USERS, SET_CURRENT_USER } from "./constants";

export default function reducer(state, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
}
