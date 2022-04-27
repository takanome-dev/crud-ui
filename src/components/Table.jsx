import React, { useContext } from "react";
import { Context } from "../context/Context";
import styles from "./styles/table.module.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table({ setOpenModal }) {
	const { users } = useContext(Context);

	return (
		<>
			{users.length > 0 ? (
				<table className={styles.table}>
					<TableHeader />
					<TableBody users={users} setOpenModal={setOpenModal} />
				</table>
			) : (
				<div className={styles.empty}>
					<p>You haven't added any user yet.</p>
				</div>
			)}
		</>
	);
}
