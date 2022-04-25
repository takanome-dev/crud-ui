import React from "react";
import styles from "./styles/modal.module.css";

export default function Modal({
	bgColor = "var(--overlay-bg)",
	children,
	left = "50%",
	top = "50%",
	width,
}) {
	return (
		<>
			<div
				className={styles.overlay}
				style={{ backgroundColor: bgColor }}
			></div>
			<div className={styles.modal} style={{ width, top, left }}>
				{children}
			</div>
		</>
	);
}
