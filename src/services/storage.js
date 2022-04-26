let users;
const key = "users";

const getItem = () => JSON.parse(localStorage.getItem(key));
const setItem = (items) => localStorage.setItem(key, JSON.stringify(items));

const getUsers = () => {
	return new Promise((resolve, reject) => {
		if (!getItem()) {
			users = [];
		} else {
			users = getItem();
		}

		return resolve(users);
	});
};

const getUserById = (id) => {
	return new Promise((resolve, reject) => {
		users = getItem();
		const user = users.find((u) => u.id === id);
		if (!user) return reject(new Error("User not found"));
		return resolve(user);
	});
};

const addUser = (user) => {
	return new Promise((resolve, reject) => {
		if (!localStorage.getItem(key)) {
			users = [];
			users.push({ ...user, id: users.length + 1 });
			setItem(users);
		} else {
			users = getItem();
			users.push({ ...user, id: users.length + 1 });
			setItem(users);
		}

		return resolve(users);
	});
};

const updateUser = (updatedUser) => {
	return new Promise((resolve, reject) => {
		users = getItem();
		users.forEach((user, index) => {
			if (user.id === updatedUser.id) {
				users.splice(index, 1, updateUser);
			}
		});
		setItem(users);
		return resolve();
	});
};

const deleteUser = (id) => {
	return new Promise((resolve, reject) => {
		users = getItem();
		users.forEach((user, index) => {
			if (user.id === id) {
				users.splice(index, 1);
			}
		});
		setItem(users);
		return resolve();
	});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getUsers,
	getUserById,
	addUser,
	updateUser,
	deleteUser,
};
