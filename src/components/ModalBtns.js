import React from "react";

const ModalBtns = ({ setModal, modal }) => {
	return (
		<div className="btns">
			<button
				className={`btn ${modal === "Sheikhs" ? "active" : null}`}
				onClick={() => setModal("Sheikhs")}
			>
				Sheikhs
			</button>
			<button
				className={`btn ${modal === "Surahs" ? "active" : null}`}
				onClick={() => setModal("Surahs")}
			>
				Surahs
			</button>
		</div>
	);
};

export default ModalBtns;
