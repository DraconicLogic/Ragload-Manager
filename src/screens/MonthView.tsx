import React from "react";
import { Ragload } from "../types";
// @ts-ignore

function MonthView({ ragloadState, screenState }) {
	const { ragloads, setRagloads } = ragloadState;
	const { screen, setScreen } = screenState;

	return (
		<div id="month-view">
			<div id="month-view__current-month-bar"></div>
			<div id="month-view__calendar-month"></div>
			<div id="month-view__current-day-bar"></div>
			<div id="month-view__ragload-list"></div>
			<div id="month-view__tool-bar"></div>
		</div>
	);
}

export default MonthView;
