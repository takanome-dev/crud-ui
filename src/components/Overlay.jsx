import React from "react";

const Overlay = ({ bgColor, handleClose }) => {
	return (
		<div
			className="overlay"
			onClick={handleClose}
			style={{ backgroundColor: bgColor }}
		></div>
	);
};

export default Overlay;
