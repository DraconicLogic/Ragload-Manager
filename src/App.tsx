import "./App.css";
import { useState } from "react";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx";
// @ts-ignore
import DisplayViewer from "./components/DisplayViewer/DisplayViewer.tsx";

function App() {
	const [screen, setScreen] = useState(0);
	const [ragloads, setRagloads] = useState([]);
	return (
		<div className="App">
			<DisplayViewer screenState={{ screen, setScreen }} />
			<Navbar screenState={{ screen, setScreen }} />
		</div>
	);
}

export default App;
