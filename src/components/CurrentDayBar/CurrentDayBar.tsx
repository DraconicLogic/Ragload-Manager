import React from "react";

function CurrentDayBar({ ragloads, selectedDate }) {
	if (!selectedDate) return null;

	// Helper function to compare dates
	function isSameDay(date1, date2) {
		return (
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	}

	// Total weight for the selected day
	const dayWeight = ragloads
		.filter((r) => isSameDay(new Date(r.deliveryDate), selectedDate))
		.reduce((sum, r) => sum + r.weight, 0);

	// Total weight for the selected week (naive version: same week number)
	const weekStart = new Date(selectedDate);
	weekStart.setDate(selectedDate.getDate() - selectedDate.getDay()); // Sunday
	const weekEnd = new Date(weekStart);
	weekEnd.setDate(weekStart.getDate() + 6); // Saturday

	const weekWeight = ragloads
		.filter((r) => {
			const date = new Date(r.deliveryDate);
			return date >= weekStart && date <= weekEnd;
		})
		.reduce((sum, r) => sum + r.weight, 0);

	const dayName = selectedDate.toLocaleDateString("en-US", { weekday: "long" });

	return (
		<div id="current-day-bar">
			<div>
				{dayName} Ragload: {dayWeight}kg
			</div>
			<div>Week Ragloads: {weekWeight}kg</div>
		</div>
	);
}

export default CurrentDayBar;
