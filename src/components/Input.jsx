import React from "react";
import styles from "./styles/input.module.css";

export default function Input({ label, name, ...rest }) {
	return (
		<div className={styles.container}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<input className={styles.input} id={name} name={name} {...rest} />
		</div>
	);
}
