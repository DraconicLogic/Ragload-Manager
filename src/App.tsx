import React from "react";
import "./App.css";
import { useState } from "react";
// @ts-ignore
import Navbar from "./components/Navbar/Navbar.tsx";
// @ts-ignore
import DisplayViewer from "./components/DisplayViewer/DisplayViewer.tsx";
// @ts-ignore
import * as data from "./data.ts";
import { Ragload } from "./types";

// Test Data. Delete before pushing to production
// import tempTestData from "./tempTestData.json";
import testData from "./testData.json";

function App() {
	const [screen, setScreen] = useState<Number>(0);
	const [ragloads, setRagloads] = useState<Ragload[]>(testData);

	function handleAddRagload(ragload: Ragload): void {
		console.log("Ragload Arg: ", ragload, typeof ragload.weight);
		const updatedRagloads = [...ragloads, ragload];
		setRagloads(updatedRagloads);
	}

	function startUpApp() {}

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
