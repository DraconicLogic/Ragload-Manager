import React from "react";

function Toolbar({ modalHandler }) {
	return (
		<div id="tool-bar">
			<div>search</div>
			<div id="tool-bar__add" onClick={() => modalHandler("RagloadEntry")}>
				add
			</div>
			<div>undefined</div>
		</div>
	);
}

export default Toolbar;
