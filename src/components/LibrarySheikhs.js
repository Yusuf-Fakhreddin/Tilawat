import React from "react";
import { useDispatch } from "react-redux";

import { changeSheikh } from "../redux/actions";

const LibrarySurah = ({ key, name, englishName, identifier }) => {
	const dispatch = useDispatch();

	return (
		<div
			className="library-element"
			onClick={() => dispatch(changeSheikh(identifier))}
		>
			<h1>{name}</h1>
			<h2>{englishName}</h2>
		</div>
	);
};

export default LibrarySurah;
