import React from "react";
// @ts-ignore
import DeliveredRagloads from "../DeliveredRagloads/DeliveredRagloads.tsx";
// @ts-ignore
import SortedRagloads from "../SortedRagloads/SortedRagloads.tsx";
// @ts-ignore
import RagloadEntry from "../RagloadEntry/RagloadEntry.tsx";
// @ts-ignore
import MonthView from "../../views/MonthView/MonthView";
// @ts-ignore
import YearView from "../../views/YearView/YearView";

function DisplayViewer({ ragloadState, screenState, handlers }) {
	let display;

	const { screen } = screenState;
	switch (screen) {
		case 0:
			display = (
				<MonthView ragloadState={ragloadState} screenState={screenState} />
			);
			break;
		case 1:
			display = (
				<YearView ragloadState={ragloadState} screenState={screenState} />
			);
			break;
		case 2:
			display = <RagloadEntry handlers={handlers} screenState={screenState} />;
			break;
		default:
	}

	return <div>{display}</div>;
}

export default DisplayViewer;
