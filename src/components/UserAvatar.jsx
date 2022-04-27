import React from "react";
import avatar from "../assets/avatar.jpg";
import styles from "./styles/user-avatar.module.css";

export default function UserAvatar({ name, email }) {
	return (
		<div className={styles.user_avatar}>
			<div className={styles.user_img}>
				<img src={avatar} alt="" />
			</div>
			<div className={styles.user_info}>
				<p className={styles.user_name}>{name}</p>
				<p className={styles.user_mail}>{email}</p>
			</div>
		</div>
	);
}
