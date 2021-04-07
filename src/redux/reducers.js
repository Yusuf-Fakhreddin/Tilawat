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

export const ayahFetchReducer = (
	state = { loading: true, ayah: {} },
	action
) => {
	switch (action.type) {
		case AYAH_FETCH_REQUEST:
			return { loading: true };
		case AYAH_FETCH_SUCCESS:
			return {
				loading: false,
				ayah: action.payload,
			};
		case AYAH_FETCH_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const nextAyahFetchReducer = (
	state = { loading: true, ayah: {} },
	action
) => {
	switch (action.type) {
		case NEXT_AYAH_FETCH_REQUEST:
			return { loading: true };
		case NEXT_AYAH_FETCH_SUCCESS:
			return {
				loading: false,
				ayah: action.payload,
			};
		case NEXT_AYAH_FETCH_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const ayahNumberChangeReducer = (state = {}, action) => {
	switch (action.type) {
		case AYAH_NUMBER_CHANGE:
			return { ayahNumber: action.payload };

		default:
			return state;
	}
};

export const sheikhChangeReducer = (state = {}, action) => {
	switch (action.type) {
		case SHEIKH_CHANGE:
			return { sheikh: action.payload };

		default:
			return state;
	}
};

export const ayahSelectionReducer = (state = {}, action) => {
	switch (action.type) {
		case AYAH_SELECTION:
			return { ayah: action.payload.ayah, loading: false };

		default:
			return state;
	}
};
export const qualitySelectionReducer = (state = {}, action) => {
	switch (action.type) {
		case QUALITY_CHANGE:
			return { quality: action.payload };

		default:
			return state;
	}
};
