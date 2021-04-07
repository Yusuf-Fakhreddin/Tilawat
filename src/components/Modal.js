import React from "react";
import Library from "./Library";

const Modal = ({ modal }) => {
	return (
		<div className="library">
			<Library modal={modal} />
		</div>
	);
};

export default Modal;
