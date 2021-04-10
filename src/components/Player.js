import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	ayahSelect,
	getAyah,
	SelectNextAyah,
	selectPrevAyah,
} from "../redux/actions";

const Player = () => {
	const [volume, setVolume] = useState(0.5);

	const audioRef = useRef(null);
	const [playing, setPlaying] = useState(false);

	const dispatch = useDispatch();
	const data = useSelector((state) => state.AyahSelection);
	const Quality = useSelector((state) => state.Quality);
	const { quality } = Quality;
	const { loading, error, ayah } = data;

	useEffect(() => {
		dispatch(getAyah());
		console.log(ayah);
	}, [quality]);

	useEffect(() => {
		if (playing) audioRef.current.play();
		if (ayah) audioRef.current.volume = volume;
	}, [ayah, volume]);

	const repeat = () => {
		audioRef.current.currentTime = 0;
		audioRef.current.play();
	};
	const onEndd = () => {
		dispatch(ayahSelect(false));
	};
	const playHandler = () => {
		console.log(audioRef);
		if (playing) {
			audioRef.current.pause();
			setPlaying(!playing);
		} else {
			audioRef.current.play();
			setPlaying(!playing);
		}
	};

	const increaseVolume = () => {
		if (volume + 0.1 <= 1) setVolume(volume + 0.1);
	};
	const decreaseVolume = () => {
		if (volume - 0.1 >= 0) setVolume(volume - 0.1);
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
							src={ayah.audio + quality}
							onEnded={onEndd}
						></audio>
					)}
					<div className="player">
						<div className="play-control">
							<i
								className="fas fa-angle-left"
								onClick={() => dispatch(selectPrevAyah())}
							></i>
							<i className="fas fa-redo" onClick={() => repeat()}></i>
							{playing ? (
								<i className="fas fa-pause" onClick={playHandler}></i>
							) : (
								<i className="fas fa-play" onClick={playHandler}></i>
							)}

							<i
								className="fas fa-angle-right"
								onClick={() => dispatch(SelectNextAyah())}
							></i>
						</div>
						<div className="volume-control">
							<i
								className="fas fa-volume-down"
								onClick={() => decreaseVolume()}
							></i>
							<input
								onChange={(event) => {
									setVolume(event.target.valueAsNumber);
								}}
								className="slider"
								value={volume}
								max="1"
								min="0"
								step="0.01"
								type="range"
							/>
							<i
								className="fas fa-volume-up"
								onClick={() => increaseVolume()}
							></i>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Player;
