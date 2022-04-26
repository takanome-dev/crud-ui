import React from "react";
import useForm from "../hooks/useForm";
import storage from "../services/storage";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import SelectInput from "./SelectInput";

const initialState = {
	name: "",
	email: "",
	status: "Active",
	location: "",
	phone: "",
};

export default function Form({ openModal, setIsOpen, setUsers }) {
	const { clearForm, inputs, handleChange } = useForm(initialState);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const users = await storage.addUser(inputs);
		setUsers(users);
		setIsOpen(false);
		clearForm();
	};

	return (
		<Modal isOpen={openModal} handleClose={() => setIsOpen(false)}>
			<form onSubmit={handleSubmit}>
				<Input
					label="Name"
					name="name"
					type="text"
					placeholder="John"
					value={inputs.name}
					onChange={handleChange}
					required
				/>
				<Input
					label="Email"
					name="email"
					type="email"
					placeholder="Doe"
					value={inputs.email}
					onChange={handleChange}
					required
				/>
				<SelectInput
					name="status"
					label="Status"
					value={inputs.status}
					onChange={handleChange}
					required
				/>
				<Input
					label="Location"
					name="location"
					type="text"
					placeholder="US"
					value={inputs.location}
					onChange={handleChange}
					required
				/>
				<Input
					label="Phone"
					name="phone"
					type="number"
					placeholder="+97 7 123456"
					value={inputs.phone}
					onChange={handleChange}
					required
				/>
				<Button title="Add a new user" />
			</form>
		</Modal>
	);
}
