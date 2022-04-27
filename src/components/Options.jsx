import React from "react";
import styles from "./styles/options.module.css";

export default function Options({ setIsOpen, setCurrentUserId }) {
	const handleClick = (e) => {
		const currentId = e.target.parentNode.parentNode.parentNode.id;
		setCurrentUserId(+currentId);
		setIsOpen(true);
	};

	return (
		<div className={styles.container}>
			<button className={styles.button} onClick={handleClick}>
				<i className="fa-regular fa-ellipsis-vertical"></i>
			</button>
		</div>
	);
}
