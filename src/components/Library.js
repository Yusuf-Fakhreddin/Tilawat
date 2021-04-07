import React from "react";
import LibrarySurahs from "./LibrarySurahs";
import LibrarySheikhs from "./LibrarySheikhs";
import { listOfSurahs, englishSurahs, audioEdition } from "../data";

const Library = ({ modal }) => {
	return (
		<div>
			{modal === "Surahs" ? (
				<h1 className="title">Surahs</h1>
			) : (
				<h1 className="title">Sheikhs</h1>
			)}
			{modal === "Surahs"
				? listOfSurahs.map((item, index) => (
						<LibrarySurahs
							key={index}
							start={item.start}
							arabicName={item.name}
							number={item.surah}
							EnglishName={englishSurahs[index].name}
						/>
				  ))
				: audioEdition.map((item, index) => (
						<LibrarySheikhs
							key={index}
							name={item.name}
							identifier={item.identifier}
							englishName={item.englishName}
						/>
				  ))}
		</div>
	);
};

export default Library;
