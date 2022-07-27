import "./App.css";
import { useState } from "react";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx";
// @ts-ignore
import DisplayViewer from "./components/DisplayViewer/DisplayViewer.tsx";
import { Ragload } from "./types";
import tempTestData from "./tempTestData.json";

function App() {
	const [screen, setScreen] = useState<Number>(0);
	const [ragloads, setRagloads] = useState<Ragload[]>(tempTestData);

	function handleAddRagload(ragload: Ragload) {
		console.log("Ragload Arg: ", ragload);
		const updatedRagloads = [...ragloads, ragload];
		setRagloads(updatedRagloads);
	}

	return (
		<div className="App">
			<DisplayViewer
				screenState={{ screen, setScreen }}
				ragloadState={{ ragloads, setRagloads }}
				handlers={{ handleAddRagload }}
			/>
			<Navbar screenState={{ screen, setScreen }} />
		</div>
	);
}

export default App;
