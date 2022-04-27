import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import formatPhoneNumber from "../utils/formatPhoneNumber";
import Button from "./Button";
import Options from "./Options";
import OptionsModal from "./OptionsModal";
import Status from "./Status";
import UserAvatar from "./UserAvatar";

export default function TableBody({ users }) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentUserId, setCurrentUserId] = useState(0);
	const { onDeleteUser, onSetCurrentUser, dispatch } = useContext(Context);

	const handleEdit = (id) => {
		setIsOpen(false);
		onSetCurrentUser(id);
		dispatch({ type: "SET_OPEN_MODAL", payload: true });
	};

	const handleDelete = (id) => {
		setIsOpen(false);
		onDeleteUser(id);
	};

	const handleClose = () => setIsOpen(false);

	return (
		<tbody>
			{users.map((u) => (
				<tr key={u.id}>
					<td>
						<UserAvatar name={u.name} email={u.email} />
					</td>
					<td>
						<Status status={u.status} />
					</td>
					<td>{u.location}</td>
					<td>{formatPhoneNumber(u.phone)}</td>
					<td>
						<Button title="Contact" />
					</td>
					<td id={u.id}>
						<Options
							setIsOpen={setIsOpen}
							setCurrentUserId={setCurrentUserId}
						/>
						{isOpen && currentUserId === u.id && (
							<OptionsModal
								handleClose={handleClose}
								handleDelete={() => handleDelete(u.id)}
								handleEdit={() => handleEdit(u.id)}
							/>
						)}
					</td>
				</tr>
			))}
		</tbody>
	);
}
