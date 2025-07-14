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

	function handleUpdateRagload({ updatedRagload, previousRagload }): void {
		/**
		 * 	Copy Ragloads[]
		 *  Find the initial ragload in the array of ragloads
		 * 	Check that previous ragload is the same as entry in arry
		 * 	Change the data of ragload
		 * 	Put the updated ragload in the same position as the previous ragload
		 * 	Remove the previous ragload from the ragload array.
		 */

		const ragloadsCopy = JSON.parse(JSON.stringify(ragloads));

		const ragloadIndex = ragloadsCopy.findIndex((ragload) => {
			const query =
				ragload.ticketNumber === previousRagload.ticketNumber &&
				ragload.deliveryDate === previousRagload.deliveryDate;
			return query;
		});

		const ragloadToEdit = ragloadsCopy[ragloadIndex];

		const compareObject = {
			originalRagload: previousRagload,
			ragloadToEdit,
		};

		if (compareRagloads(compareObject)) {
			ragloadsCopy.splice(ragloadIndex, 1, updatedRagload);
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

	function handleDeleteRagload({ condemnedRagload }): void {
		console.log("RAGLOAD DELETED");
		/**
		 * when call put confirm() before running this handler
		 *
		 * Copy ragloads[] state
		 * find condemnedRagload
		 * Remove from ragloadCopy[]
		 * update ragloads[] state with edited ragloadCopy[]
		 */
		const ragloadsCopy = JSON.parse(JSON.stringify(ragloads));
		const ragloadIndex = ragloadsCopy.findIndex((ragload) => {
			const query =
				ragload.ticketNumber === condemnedRagload.ticketNumber &&
				ragload.deliveryDate === condemnedRagload.deliveryDate;
			return query;
		});
		const ragloadToDelete = ragloadsCopy[ragloadIndex];
		const compareObject = {
			originalRagload: condemnedRagload,
			ragloadToDelete,
		};

		if (compareRagloads(compareObject)) {
			alert(
				`Ragload ${condemnedRagload.ticketNumber} brought by ${condemnedRagload.vendor} has been deleted`
			);
			ragloadsCopy.splice(ragloadIndex, 1);
			setRagloads(ragloadsCopy);
		} else {
			alert("The ragload doesn't appear to be in memory");
		}

		function compareRagloads({ originalRagload, ragloadToDelete }) {
			return (
				originalRagload.ticketNumber === ragloadToDelete.ticketNumber &&
				originalRagload.deliveryDate === ragloadToDelete.deliveryDate
			);
		}
	}

	return (
		<div className="App">
			<DisplayViewer
				screenState={{ screen, setScreen }}
				ragloadState={{ ragloads, setRagloads }}
				handlers={{
					handleAddRagload,
					handleUpdateRagload,
					handleDeleteRagload,
				}}
			/>
			{/* <Navbar screenState={{ screen, setScreen }} /> */}
		</div>
	);
}

export default App;
