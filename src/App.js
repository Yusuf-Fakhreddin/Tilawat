import "./App.css";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store";
function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Layout />
			</Provider>
		</div>
	);
}

export default App;
