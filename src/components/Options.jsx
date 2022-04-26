import React from "react";
import Overlay from "./Overlay";
import styles from "./styles/options.module.css";

export default function Options({ isOpen, setIsOpen }) {
	const handleDelete = async () => {};

	return (
		<>
			<div className={styles.container}>
				<button className={styles.button} onClick={() => setIsOpen(true)}>
					<i className="fa-regular fa-ellipsis-vertical" data-ellipsis-btn></i>
				</button>
			</div>
			{isOpen && (
				<>
					<Overlay
						handleClose={() => setIsOpen(false)}
						bgColor="var(--overlay-bg)"
					/>
					<div className={styles.content}>
						<div className={styles.item}>
							<i className="fa-solid fa-pencil"></i>
							<p className={styles.item_name}>Edit</p>
						</div>
						<div className={`${styles.item} danger`} onClick={handleDelete}>
							<i className="fa-regular fa-trash-can"></i>
							<p className={styles.item_name}>Delete</p>
						</div>
					</div>
				</>
			)}
		</>
	);
}
