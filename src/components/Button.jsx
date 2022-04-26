import React from "react";
import styles from "./styles/button.module.css";

const Button = ({ icon, handleClick, title }) => {
	return (
		<button className={styles.button} onClick={handleClick}>
			{icon && <i className={`fa-solid ${icon}`}></i>}
			{title}
		</button>
	);
};

export default Button;
