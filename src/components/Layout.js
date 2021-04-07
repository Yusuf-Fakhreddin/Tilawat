import React, { useState, useRef } from "react";
import Player from "./Player";
import Text from "./Text";
import Modal from "./Modal";
import ModalBtns from "./ModalBtns";
import Quality from "./QualityBtns";

const Layout = () => {
	const [modal, setModal] = useState("");
	const modalRef = useRef(null);

	const handleClick = (e) => {
		if (modalRef.current.contains(e.target) || e.target.nodeName === "I")
			return;
		else if (e.target.className !== "App" && e.target.nodeName !== "BUTTON") {
			setModal("");
		}
	};
	return (
		<div onClick={handleClick}>
			<div className="body">
				<div className="container">
					<h1>Tilawat</h1>
					<Text />
					<Player />
					{/* {modal && <Modal modal={modal} />} */}
					<div className="modal" ref={modalRef}>
						{modal === "Surahs" ? (
							<Modal modal="Surahs" />
						) : (
							modal === "Sheikhs" && <Modal modal="Sheikhs" />
						)}
					</div>
					<Quality />
					<ModalBtns setModal={setModal} modal={modal} />
				</div>
			</div>
		</div>
	);
};

export default Layout;
