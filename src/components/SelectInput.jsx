import React from "react";
import styles from "./styles/input.module.css";

export default function SelectInput({ name, label, ...rest }) {
	return (
		<div className={styles.container}>
			<label htmlFor={name} className={styles.label}>
				{label}
			</label>
			<select name={name} {...rest} id={name} className={styles.select}>
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
			</select>
		</div>
	);
}
