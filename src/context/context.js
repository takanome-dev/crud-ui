import { createContext, useEffect, useReducer } from "react";
import storage from "../services/storage";
import { GET_USERS, SET_CURRENT_USER, SET_OPEN_MODAL } from "./constants";
import reducer from "./reducer";

const initialState = {
	currentUser: {
		id: "",
		name: "",
		email: "",
		status: "Active",
		location: "",
		phone: "",
	},
	users: [],
	openModal: false,
};

export const Context = createContext(initialState);

export default function Provider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const loadUsers = async () => {
		const users = await storage.getUsers();
		dispatch({ type: GET_USERS, payload: users });
	};

	const handleAddUser = async (user) => {
		const users = await storage.addUser(user);
		dispatch({ type: GET_USERS, payload: users });
	};

	const handleUpdateUser = async (updatedUser) => {
		const users = await storage.updateUser(updatedUser);
		dispatch({ type: GET_USERS, payload: users });
		dispatch({ type: SET_CURRENT_USER, payload: initialState.currentUser });
	};

	const handleDeleteUser = async (id) => {
		const users = await storage.deleteUser(id);
		dispatch({ type: GET_USERS, payload: users });
	};

	const handleCurrentUser = (id) => {
		const user = state.users.find((u) => u.id === id);
		dispatch({ type: SET_CURRENT_USER, payload: user });
	};

	const handleOpenModal = (booleanState) => {
		dispatch({ type: SET_OPEN_MODAL, payload: booleanState });

		if (!booleanState) {
			dispatch({ type: SET_CURRENT_USER, payload: initialState.currentUser });
		}
	};

	useEffect(() => {
		loadUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const value = {
		users: state.users,
		currentUser: state.currentUser,
		openModal: state.openModal,
		dispatch,
		onSetCurrentUser: handleCurrentUser,
		onAddUser: handleAddUser,
		onUpdateUser: handleUpdateUser,
		onDeleteUser: handleDeleteUser,
		onOpenModal: handleOpenModal,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
