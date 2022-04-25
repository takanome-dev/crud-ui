import React from "react";
import styles from "./styles/user-avatar.module.css";

const UserAvatar = ({ name, email }) => {
	return (
		<div className={styles.user_avatar}>
			<div className={styles.user_img}>
				<img
					src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
					alt=""
				/>
			</div>
			<div className={styles.user_info}>
				<p className={styles.user_name}>{name}</p>
				<p className={styles.user_mail}>{email}</p>
			</div>
		</div>
	);
};
export default UserAvatar;
