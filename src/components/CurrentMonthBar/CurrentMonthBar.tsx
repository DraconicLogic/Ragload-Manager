import Menu from "../Menu/Menu";

function CurrentMonthBar({ ragloads, selectedDate, screenState }) {
	const { screen, setScreen } = screenState;

	if (!selectedDate) return null;

	const selectedMonth = selectedDate.getMonth();
	const selectedYear = selectedDate.getFullYear();

	const monthWeight = ragloads
		.filter((r) => {
			const date = new Date(r.deliveryDate);
			return (
				date.getMonth() === selectedMonth && date.getFullYear() === selectedYear
			);
		})
		.reduce((sum, r) => sum + r.weight, 0);

	const monthName = selectedDate.toLocaleDateString("en-US", {
		month: "long",
	});

	function switchToYearView() {
		setScreen(1);
	}

	return (
		<div id="current-month-bar">
			<div
				id="current-month-bar__switch-to-year-view"
				// onClick={switchToYearView}
			>
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
