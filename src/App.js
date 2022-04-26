import { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Table from "./components/Table";
import storage from "./services/storage";

export default function App() {
	const [openModal, setOpenModal] = useState(false);
	const [users, setUsers] = useState([]);

	const loadUsers = async () => {
		const users = await storage.getUsers();
		setUsers(users);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div className="container">
			<div className="header">
				<h1>Users Table</h1>
				<Button
					title="Add user"
					icon="fa-pencil"
					handleClick={() => setOpenModal(true)}
				/>
			</div>
			<Table users={users} />
			<Form
				openModal={openModal}
				setIsOpen={setOpenModal}
				setUsers={setUsers}
			/>
		</div>
	);
}
