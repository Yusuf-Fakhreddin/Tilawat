import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	ayahFetchReducer,
	ayahNumberChangeReducer,
	ayahSelectionReducer,
	nextAyahFetchReducer,
	sheikhChangeReducer,
} from "./redux/reducers";

const reducer = combineReducers({
	AyahData: ayahFetchReducer,
	AyahNumber: ayahNumberChangeReducer,
	Sheikh: sheikhChangeReducer,
	NextAyah: nextAyahFetchReducer,
	AyahSelection: ayahSelectionReducer,
});

const initialState = {
	Sheikh: { sheikh: "ar.abdurrahmaansudais" },
	AyahNumber: { ayahNumber: 1 },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
