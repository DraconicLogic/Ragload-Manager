import React from "react";

function DayAccordion({ day, ragloads }) {
	const ragloadsWeight = ragloads.reduce((weight, ragload) => {
		return weight + ragload.weight;
	}, 0);

	return (
		<div className="sorted-ragloads__day-accordion">
			<div>{day}</div>
			<div>{ragloadsWeight}</div>
			<div>∨</div>
		</div>
	);
}

export default DayAccordion;
