import { useState } from "react";
import CalendarComponent from "../../components/Calendar/Calendar";
import RagloadTable from "../../components/RagloadTable/RagloadTable";
import CurrentMonthBar from "../../components/CurrentMonthBar/CurrentMonthBar";
import CurrentDayBar from "../../components/CurrentDayBar/CurrentDayBar";
import Toolbar from "../../components/Toolbar/Toolbar";

function CalendarView({ ragloadState, screenState, handlers }) {
	const { ragloads } = ragloadState;
	const { screen, setScreen } = screenState;

	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	return (
		<div id="month-view">
			<div id="month-view__current-month-bar">
				<CurrentMonthBar ragloads={ragloads} selectedDate={selectedDate} />
			</div>
			<div id="month-view__calendar-month">
				<CalendarComponent ragloads={ragloads} onDateChange={setSelectedDate} />
			</div>
			<div id="month-view__current-day-bar">
				<CurrentDayBar ragloads={ragloads} selectedDate={selectedDate} />
			</div>
			<div id="month-view__ragload-table">
				<RagloadTable
					ragloads={ragloads}
					handlers={handlers}
					selectedDate={selectedDate}
				/>
			</div>
			<div id="month-view__tool-bar">
				<Toolbar handlers={handlers} />
			</div>
		</div>
	);
}

export default CalendarView;
