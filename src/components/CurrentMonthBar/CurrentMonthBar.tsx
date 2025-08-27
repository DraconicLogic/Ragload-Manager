import Menu from "../Menu/Menu";

function CurrentMonthBar({ ragloads, selectedDate }) {
	if (!selectedDate) return null;

	const selectedMonth = selectedDate.getMonth();
	const selectedYear = selectedDate.getFullYear();

	const monthWeight = ragloads
		.filter((ragload) => {
			const date = new Date(ragload.deliveryDate);
			return (
				date.getMonth() === selectedMonth && date.getFullYear() === selectedYear
			);
		})
		.reduce((sum, ragload) => sum + ragload.weight, 0);

	const monthName = selectedDate.toLocaleDateString("en-US", {
		month: "long",
	});

	return (
		<div id="current-month-bar">
			<div>
				<Menu />
			</div>
			<div>
				{monthName} {selectedYear}
			</div>
			<div>Ragloads: {monthWeight} kg</div>
		</div>
	);
}

export default CurrentMonthBar;
