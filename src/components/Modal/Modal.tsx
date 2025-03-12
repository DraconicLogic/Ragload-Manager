import React from "react";

function Modal({ modalContent, modalVisibleState, modalHandler }) {
	const { modalVisible, setModalVisible } = modalVisibleState;

	const isModalVisible = modalVisible ? "modal-revealed" : "modal-hidden";

	const exampleModalContent = (
		<div className="modal-content">
			<span className="close" onClick={modalHandler}>
				&times;
			</span>
			<p>Some text in the Modal..</p>
		</div>
	);
	return <div id={isModalVisible}>{exampleModalContent}</div>;
}

export default Modal;
