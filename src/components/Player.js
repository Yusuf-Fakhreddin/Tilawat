import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseIcon from "@material-ui/icons/Pause";
import {
	ayahSelect,
	changeAyahNumber,
	getAyah,
	getNextAyah,
} from "../redux/actions";

const Player = () => {
	const audioRef = useRef(null);
	const [playing, setPlaying] = useState(false);

	const dispatch = useDispatch();
	const data = useSelector((state) => state.AyahSelection);
	const Number = useSelector((state) => state.AyahNumber);
	const sheikhName = useSelector((state) => state.Sheikh);
	const { sheikh } = sheikhName;
	const { ayahNumber } = Number;
	const { loading, error, ayah } = data;

	useEffect(() => {
		dispatch(getAyah());
		console.log(ayah);
	}, []);

	useEffect(() => {
		if (playing) audioRef.current.play();
	}, [ayah]);

	const onPlayy = () => {
		dispatch(getNextAyah(ayahNumber + 1, sheikh));
		dispatch(changeAyahNumber(ayahNumber + 1));
	};
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
		<div>
			{loading ? (
				<div className="loader"></div>
			) : (
				<div>
					{" "}
					{ayah && (
						<audio
							ref={audioRef}
							src={ayah.audio}
							onPlay={onPlayy}
							onEnded={onEndd}
						></audio>
					)}
					<ButtonGroup
						size="large"
						color="primary"
						aria-label="large outlined primary button group"
					>
						<Button>
							{" "}
							<SkipPreviousIcon />{" "}
						</Button>
						{!playing ? (
							<Button onClick={playHandler}>
								<PlayArrowIcon />{" "}
							</Button>
						) : (
							<Button onClick={playHandler}>
								<PauseIcon />{" "}
							</Button>
						)}
						<Button>
							{" "}
							<SkipNextIcon />{" "}
						</Button>
					</ButtonGroup>
				</div>
			)}
		</div>
	);
};

export default Player;
