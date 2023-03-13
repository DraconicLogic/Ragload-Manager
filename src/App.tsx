import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
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
	const [ragloads, setRagloads] = useState<Ragload[]>([]);

	function startUp() {
		// Get Local data and put in state
		const localRagloads = data.getLocalRagloads();
		console.log("Local Ragloads before setState: ", localRagloads);
		setRagloads(localRagloads);
		console.log("Local Ragloads after setState: ", localRagloads);

		// Get Cloud data and compare to local data. If cloud data newer than replace state and local data
		const cloudRagloads = data.getCloudRagloads();
		console.log("cloud ragload: ", cloudRagloads);
	}
	useEffect(startUp, []);

	function updateRagloads() {}
	function handleAddRagload(ragload: Ragload): void {
		console.log("Ragload Arg: ", ragload, typeof ragload.weight);
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
