import React from "react";

export default function Overlay({ bgColor, handleClose }) {
	return (
		<div
			className="overlay"
			onClick={handleClose}
			style={{ backgroundColor: bgColor }}
		></div>
	);
}
