import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as utils from "../../utils"

function CalendarComponent({ ragloads, onDateChange }) {
  const groupedRagloads = utils.groupRagloadsByDate(ragloads);
	console.log(groupedRagloads)

	const tileContent = ({ date }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    
    return groupedRagloads[year]?.[month]?.[day] ? <span className="calendar__ragload-marker" /> : null;
  };

	return (
		<div>
			<Calendar tileContent={tileContent} onChange={onDateChange}/>
		</div>
	);
}

export default CalendarComponent;
