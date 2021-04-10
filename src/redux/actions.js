import Axios from "axios";
import {
	AYAH_FETCH_FAIL,
	AYAH_FETCH_REQUEST,
	AYAH_FETCH_SUCCESS,
	AYAH_NUMBER_CHANGE,
	AYAH_SELECTION,
	NEXT_AYAH_FETCH_FAIL,
	NEXT_AYAH_FETCH_REQUEST,
	NEXT_AYAH_FETCH_SUCCESS,
	QUALITY_CHANGE,
	SHEIKH_CHANGE,
} from "./constants";

export const getAyah = (ayah) => async (dispatch, getState) => {
	console.log("getAyah fired");
	const { AyahNumber: ayahNumber } = getState();
	const { Sheikh: sheikh } = getState();
	try {
		dispatch({
			type: AYAH_FETCH_REQUEST,
		});
		let newAyah = ayah ? ayah : ayahNumber.ayahNumber;
		const result = await Axios.get(
			`http://api.alquran.cloud/v1/ayah/${newAyah}/${sheikh.sheikh}`
		);
		console.log(result.data.data);
		dispatch({
			type: AYAH_FETCH_SUCCESS,
			payload: result.data.data,
		});
		dispatch(ayahSelect(true, newAyah));
	} catch (error) {
		dispatch({
			type: AYAH_FETCH_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const getNextAyah = (ayahNumber, sheikh) => async (
	dispatch,
	getState
) => {
	const { AyahNumber: ayahNumber } = getState();
	const { Sheikh: sheikh } = getState();
	try {
		dispatch({
			type: NEXT_AYAH_FETCH_REQUEST,
		});
		const result = await Axios.get(
			`http://api.alquran.cloud/v1/ayah/${ayahNumber.ayahNumber}/${sheikh.sheikh}`
		);
		console.log(result.data.data);
		dispatch({
			type: NEXT_AYAH_FETCH_SUCCESS,
			payload: result.data.data,
		});
	} catch (error) {
		dispatch({
			type: NEXT_AYAH_FETCH_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const changeAyahNumber = (ayahNumber) => async (dispatch, getState) => {
	console.log(ayahNumber, typeof ayahNumber);
	let NewAyahNumber;
	if (ayahNumber === 0) {
		NewAyahNumber = 6236;
	} else if (ayahNumber === -1) {
		NewAyahNumber = 6235;
	} else if (Number(ayahNumber) < 6236) NewAyahNumber = Number(ayahNumber);
	else {
		NewAyahNumber = 1;
	}
	dispatch({
		type: AYAH_NUMBER_CHANGE,
		payload: NewAyahNumber,
	});
};

export const ayahSelect = (First, newAyah) => async (dispatch, getState) => {
	console.log("ayahSelection fired");
	let ayah = null;
	const { AyahNumber: ayahNumber } = getState();

	console.log(First);
	if (First === true) {
		const { AyahData } = getState();
		ayah = AyahData;
		dispatch(changeAyahNumber(newAyah + 1));
		dispatch(getNextAyah());
	} else {
		console.log("nextAyah");
		const { NextAyah } = getState();
		ayah = NextAyah;
		dispatch(changeAyahNumber(ayahNumber.ayahNumber + 1));
		dispatch(getNextAyah());
	}
	console.log(ayah);

	dispatch({
		type: AYAH_SELECTION,
		payload: ayah,
	});
};
export const changeSheikh = (sheikh, name) => async (dispatch, getState) => {
	const { AyahNumber: ayahNumber } = getState();
	dispatch(changeAyahNumber(ayahNumber.ayahNumber - 1));
	dispatch({
		type: SHEIKH_CHANGE,
		payload: sheikh,
		name,
	});
	dispatch(getAyah());
};

export const changeQuality = (quality) => async (dispatch, getState) => {
	console.log(quality);
	const { AyahNumber: ayahNumber } = getState();
	dispatch(changeAyahNumber(ayahNumber.ayahNumber - 1));
	dispatch({
		type: QUALITY_CHANGE,
		payload: quality,
	});
	dispatch(getAyah());
};

export const selectPrevAyah = () => async (dispatch, getState) => {
	const { AyahNumber: ayahNumber } = getState();
	dispatch(changeAyahNumber(ayahNumber.ayahNumber - 2));
	dispatch(getAyah());
};

export const SelectNextAyah = () => async (dispatch, getState) => {
	dispatch(getAyah());
};
