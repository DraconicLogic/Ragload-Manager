import React from "react";
// @ts-ignore
import DeliveredRagloads from "../DeliveredRagloads/DeliveredRagloads.tsx";
// @ts-ignore
import SortedRagloads from "../SortedRagloads/SortedRagloads.tsx";
// @ts-ignore
import RagloadEntry from "../RagloadEntry/RagloadEntry.tsx";

function DisplayViewer({ ragloadState, screenState, handlers }) {
	let display;

	const { screen } = screenState;
	switch (screen) {
		case 0:
			display = <DeliveredRagloads ragloadState={ragloadState} />;
			break;
		case 1:
			display = <SortedRagloads ragloadState={ragloadState} />;
			break;
		case 2:
			display = <RagloadEntry handlers={handlers} screenState={screenState} />;
			break;
		default:
	}

	return <div>{display}</div>;
}

export default DisplayViewer;
