function Navbar({ screenState }) {
	function selectScreen(event) {
		console.log(event.target.value);
		screenState.setScreen(event.target.value);
	}

	return (
		<ul id="Navbar">
			<li value="0" onClick={selectScreen}>
				DELIVERED
			</li>
			<li value="2" onClick={selectScreen} id="AddRagload">
				+
			</li>
			<li value="1" onClick={selectScreen}>
				SORTED
			</li>
		</ul>
	);
}

export default Navbar;
