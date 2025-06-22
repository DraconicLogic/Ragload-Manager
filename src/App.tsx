import "./App.css";
import { useState, useEffect } from "react";
import DisplayViewer from "./components/DisplayViewer/DisplayViewer";
// @ts-ignore
import * as data from "./data.ts";
import { Ragload } from "./types";

function App() {
	const [screen, setScreen] = useState<Number>(0);
	const [ragloads, setRagloads] = useState<Ragload[]>([]);

	useEffect(() => {
		(function startUp() {
			const localRagloads: Ragload[] = data.getLocalRagloads();
			const ragloadsHasEntries = localRagloads.length > 0;
			if (ragloadsHasEntries) setRagloads(localRagloads);
		})();

		// (function cloudSync(){
		// 	const cloudRagloads: Ragload[] = data.getCloudRagloads();
		// })()
	}, []);

	useEffect(() => {
		(function updateLocalData() {
			const ragloadsHasEntries = ragloads.length > 0;
			if (ragloadsHasEntries) {
				data.saveLocalRagloads(ragloads);
			}
		})();
	}, [ragloads]);

	function handleAddRagload(ragload: Ragload): void {
		const updatedRagloads = [...ragloads, ragload];
		setRagloads(updatedRagloads);
	}

	function handleUpdateRagload({ updatedRagload, previousRagload }): void {}

	return (
		<div className="App">
			<DisplayViewer
				screenState={{ screen, setScreen }}
				ragloadState={{ ragloads, setRagloads }}
				handlers={{ handleAddRagload, handleUpdateRagload }}
			/>
			{/* <Navbar screenState={{ screen, setScreen }} /> */}
		</div>
	);
}

export default App;
