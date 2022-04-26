import React from "react";
import Overlay from "./Overlay";
import styles from "./styles/modal.module.css";

export default function Modal({ children, isOpen = false, handleClose }) {
	if (!isOpen) return null;

	return (
		<div className={styles.container}>
			<Overlay handleClose={handleClose} bgColor="var(--overlay-bg)" />
			<div className={styles.modal}>{children}</div>
		</div>
	);
}
