import React from "react";
import styles from "./styles/status.module.css";

export default function Status({ active }) {
	return (
		<div className={styles.status_container}>
			<div
				className={styles.status_state}
				style={
					active
						? { backgroundColor: "var(--green)" }
						: { backgroundColor: "var(--red)" }
				}
			></div>
			<p className={styles.status_name}>{active ? "Active" : "Inactive"}</p>
		</div>
	);
}
