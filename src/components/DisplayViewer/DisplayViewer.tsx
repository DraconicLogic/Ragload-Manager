import React from "react";
// @ts-ignore
import RagloadEntry from "../RagloadEntry/RagloadEntry.tsx";
// @ts-ignore
import CalendarView from "../../views/CalendarView/CalendarView";
// @ts-ignore
import YearView from "../../views/YearView/YearView";
// TODO: Check if this component is needed. Instead of this component it might make sense to render CalendarView directly
function DisplayViewer({ ragloadState, screenState, handlers }) {
	let display;

	const { screen } = screenState;
	switch (screen) {
		case 0:
			display = (
				<CalendarView
					ragloadState={ragloadState}
					screenState={screenState}
					handlers={handlers}
				/>
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
