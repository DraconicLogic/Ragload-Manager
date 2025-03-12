import React from "react";

function Toolbar({ modalVisibleState, modalHandler }) {
	const { modalVisible, setModalVisible } = modalVisibleState;

	return (
		<div id="tool-bar">
			<div>search</div>
			<div id="tool-bar__add" onClick={modalHandler}>
				add
			</div>
			<div>undefined</div>
		</div>
	);
}

export default Toolbar;
