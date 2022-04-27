import React, { useContext } from "react";
import { Context } from "../context/context";
import Overlay from "./Overlay";
import styles from "./styles/modal.module.css";

export default function Modal({ children }) {
	const { openModal, onOpenModal } = useContext(Context);

	if (!openModal) return null;

	return (
		<div className={styles.container}>
			<Overlay
				handleClose={() => onOpenModal(false)}
				bgColor="var(--overlay-bg)"
			/>
			<div className={styles.modal}>{children}</div>
		</div>
	);
}
