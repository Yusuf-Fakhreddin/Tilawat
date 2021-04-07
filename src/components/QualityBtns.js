import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuality } from "../redux/actions";

const Quality = () => {
	const dispatch = useDispatch();

	const [active, setActive] = useState("LOW");

	return (
		<div className="quality-btns">
			<button
				className={`btn ${active === "High" ? "active" : null}`}
				onClick={() => {
					setActive("High");
					dispatch(changeQuality("/high"));
				}}
			>
				High
			</button>
			<button
				className={`btn ${active === "LOW" ? "active" : null}`}
				onClick={() => {
					setActive("LOW");
					dispatch(changeQuality(""));
				}}
			>
				LOW
			</button>
		</div>
	);
};

export default Quality;
