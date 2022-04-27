import React, { useContext } from "react";
import { Context } from "../context/Context";
import useForm from "../hooks/useForm";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import SelectInput from "./SelectInput";

export default function Form({ openModal, setOpenModal }) {
	const { currentUser, onAddUser, onUpdateUser } = useContext(Context);
	const { clearForm, inputs, handleChange } = useForm(currentUser);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (currentUser.id) onUpdateUser(inputs);
		else onAddUser(inputs);
		setOpenModal(false);
		clearForm();
	};

	return (
		<Modal openModal={openModal} handleClose={() => setOpenModal(false)}>
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
				<Button title="Add a new user" />
			</form>
		</Modal>
	);
}
