import React from "react";
import Overlay from "./Overlay";
import styles from "./styles/options.module.css";

const OptionsModal = ({ handleEdit, handleDelete, handleClose }) => {
	return (
		<>
			<Overlay handleClose={handleClose} bgColor="transparent" />
			<div className={styles.content}>
				<div className={styles.item} onClick={handleEdit}>
					<i className="fa-solid fa-pencil"></i>
					<p className={styles.item_name}>Edit</p>
				</div>
				<div className={`${styles.item} danger`} onClick={handleDelete}>
					<i className="fa-regular fa-trash-can"></i>
					<p className={styles.item_name}>Delete</p>
				</div>
			</div>
		</>
	);
};

export default OptionsModal;
