import React, { useContext } from "react";
import { Context } from "../context/context";
import Button from "./Button";

export default function Header() {
	const { onOpenModal } = useContext(Context);

	return (
		<div className="header">
			<h1>Users Table</h1>
			<Button
				title="Add user"
				icon="fa-pencil"
				handleClick={() => onOpenModal(true)}
			/>
		</div>
	);
}
