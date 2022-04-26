import React from "react";
import styles from "./styles/status.module.css";

export default function Status({ status }) {
	const isActive = status === "Active";

	return (
		<div className={styles.status_container}>
			<div
				className={styles.status_state}
				style={
					isActive
						? { backgroundColor: "var(--green)" }
						: { backgroundColor: "var(--red)" }
				}
			></div>
			<p className={styles.status_name}>{status}</p>
		</div>
	);
}
