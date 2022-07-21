import "./App.css";
import { useState } from "react";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx";
// @ts-ignore
import DisplayViewer from "./components/DisplayViewer/DisplayViewer.tsx";
import { Ragload } from "./types";

function App() {
	const [screen, setScreen] = useState(0);
	const [ragloads, setRagloads] = useState<Ragload[]>([]);

	function handleAddRagload(ragload: Ragload) {
		console.log("Ragload Arg: ", ragload);
		const updatedRagloads = [...ragloads, ragload];
		setRagloads(updatedRagloads);
	}

	return (
		<div className="App">
			<DisplayViewer
				screenState={{ screen, setScreen }}
				handlers={{ handleAddRagload }}
			/>
			<Navbar screenState={{ screen, setScreen }} />
		</div>
	);
}

export default App;
