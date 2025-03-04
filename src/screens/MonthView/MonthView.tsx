import React from "react";
import { Ragload } from "../../types";
// @ts-ignore
import Calendar from "react-calendar";
import RagloadTable from "../../components/RagloadTable/RagloadTable";
import CurrentMonthBar from "../../components/CurrentMonthBar/CurrentMonthBar";
// @ts-ignore

function MonthView({ ragloadState, screenState }) {
	const { ragloads, setRagloads } = ragloadState;
	const { screen, setScreen } = screenState;

	return (
		<div id="month-view">
			<div id="month-view__current-month-bar">
				<CurrentMonthBar />
			</div>
			<div id="month-view__calendar-month">
				<Calendar />
			</div>
			<div id="month-view__current-day-bar">current day bar</div>
			<div id="month-view__ragload-table">
				<RagloadTable ragloads={ragloads} handleRagload={null} />
			</div>
			<div id="month-view__tool-bar">tool bar</div>
		</div>
	);
}

export default MonthView;
