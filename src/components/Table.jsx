import React from "react";
import styles from "./styles/table.module.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table({ users }) {
	return (
		<>
			{users.length > 0 ? (
				<table className={styles.table}>
					<TableHeader />
					<TableBody users={users} />
				</table>
			) : (
				<div className={styles.empty}>
					<p>You haven't added any user yet.</p>
				</div>
			)}
		</>
	);
}
