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
	SHEIKH_CHANGE,
} from "./constants";

export const getAyah = () => async (dispatch, getState) => {
	console.log("getAyah fired");
	const { AyahNumber: ayahNumber } = getState();
	const { Sheikh: sheikh } = getState();
	try {
		dispatch({
			type: AYAH_FETCH_REQUEST,
		});
		const result = await Axios.get(
			`http://api.alquran.cloud/v1/ayah/${ayahNumber.ayahNumber}/${sheikh.sheikh}`
		);
		console.log(result.data.data);
		dispatch({
			type: AYAH_FETCH_SUCCESS,
			payload: result.data.data,
		});
		dispatch(ayahSelect(true));
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
	try {
		dispatch({
			type: NEXT_AYAH_FETCH_REQUEST,
		});
		const result = await Axios.get(
			`http://api.alquran.cloud/v1/ayah/${ayahNumber}/${sheikh}`
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
	dispatch({
		type: AYAH_NUMBER_CHANGE,
		payload: ayahNumber,
	});
};

export const ayahSelect = (First) => async (dispatch, getState) => {
	console.log("ayahSelection fired");
	let ayah = null;
	console.log(First);
	if (First === true) {
		const { AyahData } = getState();
		ayah = AyahData;
	} else {
		console.log("nextAyah");
		const { NextAyah } = getState();
		ayah = NextAyah;
	}
	console.log(ayah);
	dispatch({
		type: AYAH_SELECTION,
		payload: ayah,
	});
};
export const changeSheikh = (sheikh, dispatch) => {
	dispatch({
		type: SHEIKH_CHANGE,
		payload: sheikh,
	});
};
