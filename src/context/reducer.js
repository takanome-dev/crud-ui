import { GET_USERS, SET_CURRENT_USER, SET_OPEN_MODAL } from "./constants";

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
		case SET_OPEN_MODAL:
			return {
				...state,
				openModal: action.payload,
			};
		default:
			return state;
	}
}
