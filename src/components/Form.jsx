import React, { useContext } from "react";
import { Context } from "../context/context";
import useForm from "../hooks/useForm";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import SelectInput from "./SelectInput";

export default function Form() {
	const { currentUser, onAddUser, onUpdateUser, onOpenModal } =
		useContext(Context);
	const { clearForm, inputs, handleChange } = useForm(currentUser);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (currentUser.id) onUpdateUser(inputs);
		else onAddUser(inputs);
		onOpenModal(false);
		clearForm();
	};

	return (
		<Modal>
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
					type="text"
					placeholder="77 123 45 67"
					value={inputs.phone}
					onChange={handleChange}
					required
				/>
				<Button title={currentUser.id ? "Update user" : "Add a new user"} />
			</form>
		</Modal>
	);
}
