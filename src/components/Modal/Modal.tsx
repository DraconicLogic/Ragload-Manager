import React from "react";

function Modal({ modalContent, modalVisibleState, handlers }) {
	const { handleModalVisibility, handleAddRagload } = handlers;
	const { modalVisible } = modalVisibleState;
	const Content = modalContent;

	const isModalVisible = modalVisible ? "modal-revealed" : "modal-hidden";
	// Consider importing Ragload Entry form into this component instead of passing through props.
	return (
		<div id={isModalVisible}>
			<div className="modal-content">
				<span className="close" onClick={handleModalVisibility}>
					&times;
				</span>
				<Content handlers={handlers} />
			</div>
		</div>
	);
}

export default Modal;
