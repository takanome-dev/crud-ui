import { createContext, useEffect, useReducer } from "react";
import storage from "../services/storage";
import { GET_USERS } from "./constants";
import reducer from "./reducer";

const initialState = {
	currentUser: {
		name: "",
		email: "",
		status: "Active",
		location: "",
		phone: "",
	},
	users: [],
};

export const Context = createContext(initialState);

export default function Provider({ children }) {
	const [dispatch, state] = useReducer(reducer);

	const loadUsers = async () => {
		const users = await storage.getUsers();
		dispatch({ type: GET_USERS, payload: users });
	};

	useEffect(() => {
		loadUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const value = {
		users: state.users,
		currentUser: state.currentUser,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
