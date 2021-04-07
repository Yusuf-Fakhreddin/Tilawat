import React from "react";
import { useDispatch } from "react-redux";

import { getAyah } from "../redux/actions";

const LibrarySurah = ({ arabicName, EnglishName, number, start }) => {
	const dispatch = useDispatch();

	return (
		<div className="library-element" onClick={() => dispatch(getAyah(start))}>
			<div className="name">
				<h2>{EnglishName}</h2>
				<h1>{arabicName}</h1>
			</div>
			<h2>{number}</h2>
		</div>
	);
};

export default LibrarySurah;
