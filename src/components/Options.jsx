import React from "react";
import styles from "./styles/options.module.css";

export default function Options({ isOpen, setIsOpen }) {
	return (
		<>
			<span className={styles.options_container}>
				<i class="fa-regular fa-ellipsis-vertical"></i>
			</span>
			{/* <Modal width="150px">
				<div className={styles.options_item}>
					<i class="fa-solid fa-pencil"></i>
					<p className={styles.options_item_name}>Edit</p>
				</div>
				<div className={`${styles.options_item} danger`}>
					<i class="fa-regular fa-trash-can"></i>
					<p className={styles.options_item_name}>Delete</p>
				</div>
			</Modal> */}
		</>
	);
}
