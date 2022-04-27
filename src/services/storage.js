let users;
const key = "users";

const getItem = () => JSON.parse(localStorage.getItem(key));
const setItem = (items) => localStorage.setItem(key, JSON.stringify(items));

const getUsers = () => {
	return new Promise((resolve, reject) => {
		if (!getItem()) {
			users = [];
		} else {
			users = getItem().filter(Boolean);
		}

		return resolve(users);
	});
};

const addUser = (user) => {
	return new Promise((resolve, reject) => {
		if (!getItem()) {
			users = [];
			users.push({ ...user, id: users.length + 1 });
			setItem(users);
		} else {
			users = getItem().filter(Boolean);
			users.push({ ...user, id: users.length + 1 });
			setItem(users);
		}

		return resolve(users);
	});
};

const updateUser = (updatedUser) => {
	return new Promise((resolve, reject) => {
		users = getItem().filter(Boolean);
		users.forEach((user, index) => {
			if (user.id === updatedUser.id) {
				users.splice(index, 1, updatedUser);
			}
		});
		setItem(users);
		return resolve(users);
	});
};

const deleteUser = (id) => {
	return new Promise((resolve, reject) => {
		users = getItem().filter(Boolean);
		const filteredUsers = users.filter((user) => user.id !== id);
		setItem(filteredUsers);
		return resolve(filteredUsers);
	});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getUsers,
	addUser,
	updateUser,
	deleteUser,
};
