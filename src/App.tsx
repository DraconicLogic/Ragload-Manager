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

	function handleUpdateRagload({
		updatedRagload,
		previousRagload,
		previousRagloadIndex,
	}): void {
		/**
		 * 	Copy Ragloads[]
		 *  Find the initial ragload in the array of ragloads
		 * 	Check that previous ragload is the same as entry in arry
		 * 	Change the data of ragload
		 * 	Put the updated ragload in the same position as the previous ragload
		 * 	Remove the previous ragload from the ragload array.
		 */
		console.log("handleUpdateRagload Args");
		console.log("updatedRagload: ", updatedRagload);
		console.log("previousRagload", previousRagload);
		console.log("previousRagloadIndex", previousRagloadIndex);

		const ragloadsCopy = JSON.parse(JSON.stringify(ragloads));

		const ragloadToEdit = ragloadsCopy[previousRagloadIndex];

		const compareObject = {
			originalRagload: previousRagload,
			ragloadToEdit,
		};

		if (compareRagloads(compareObject)) {
			ragloadsCopy.splice(previousRagloadIndex, 1, updatedRagload);
			setRagloads(ragloadsCopy);
		} else {
			alert("The ragload doesn't appear to be in memory");
		}

		function compareRagloads({ originalRagload, ragloadToEdit }) {
			return (
				originalRagload.ticketNumber === ragloadToEdit.ticketNumber &&
				originalRagload.deliveryDate === ragloadToEdit.deliveryDate
			);
		}
	}

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
