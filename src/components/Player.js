import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ayahSelect, getAyah } from "../redux/actions";

const Player = () => {
	const audioRef = useRef(null);
	const [playing, setPlaying] = useState(false);

	const dispatch = useDispatch();
	const data = useSelector((state) => state.AyahSelection);
	// const Number = useSelector((state) => state.AyahNumber);
	// const sheikhName = useSelector((state) => state.Sheikh);
	// const { sheikh } = sheikhName;
	// const { ayahNumber } = Number;
	const { loading, error, ayah } = data;

	useEffect(() => {
		dispatch(getAyah());
		console.log(ayah);
	}, []);

	useEffect(() => {
		if (playing) audioRef.current.play();
	}, [ayah]);

	// const onPlayy = () => {
	// 	dispatch(changeAyahNumber(ayahNumber + 1));
	// };
	const onEndd = () => {
		dispatch(ayahSelect(false));
	};
	const playHandler = () => {
		if (playing) {
			audioRef.current.pause();
			setPlaying(!playing);
		} else {
			audioRef.current.play();
			setPlaying(!playing);
		}
	};

	return (
		<>
			{loading ? (
				<div className="loader"></div>
			) : (
				<>
					{" "}
					{ayah && (
						<audio
							ref={audioRef}
							src={ayah.audio}
							// onPlay={onPlayy}
							onEnded={onEndd}
						></audio>
					)}
					<div className="player">
						<div className="play-control">
							<i
								className="fas fa-angle-left"
								// onClick={() => nextAyahHandler("left")}
							></i>
							{playing ? (
								<i className="fas fa-pause" onClick={playHandler}></i>
							) : (
								<i className="fas fa-play" onClick={playHandler}></i>
							)}

							<i
								className="fas fa-angle-right"
								// onClick={() => nextAyahHandler("right")}
							></i>
							{/* <i onClick={() => setActiveVolume(!activeVolume)} icon={faVolumeDown} />
				{activeVolume && (
					<input
						onChange={changeVolume}
						value={songInfo.volume}
						max="1"
						min="0"
						step="0.01"
						type="range"
					/>
				)} */}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Player;
