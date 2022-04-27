import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Table from "./components/Table";
import Provider from "./context/Context";

export default function App() {
	const [openModal, setOpenModal] = useState(false);

	return (
		<Provider>
			<div className="container">
				<div className="header">
					<h1>Users Table</h1>
					<Button
						title="Add user"
						icon="fa-pencil"
						handleClick={() => setOpenModal(true)}
					/>
				</div>
				<Table setOpenModal={setOpenModal} />
				<Form openModal={openModal} setOpenModal={setOpenModal} />
			</div>
		</Provider>
	);
}
