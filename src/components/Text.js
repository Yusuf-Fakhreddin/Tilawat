import React from "react";
import { useSelector } from "react-redux";

const Text = () => {
	const data = useSelector((state) => state.AyahSelection);
	const { ayah, loading } = data;

	return (
		<div className="surah">
			{loading ? null : (
				<div>
					<h1>{ayah && ayah.surah.name}</h1>
					<h2 className="ayah">{ayah && ayah.text}</h2>
				</div>
			)}
		</div>
	);
};

export default Text;
