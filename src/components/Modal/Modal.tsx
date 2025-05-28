import React from "react";
import RagloadEntry from "../RagloadEntry/RagloadEntry";
import RagloadCardMenu from "../RagloadCardMenu/RagloadCardMenu";
// TODO: Import the RagloadCardMenu and RagloadEntry components into Modal.tsx. Conditionally render the correct modal content based on where it's opened.
function Modal({ modalContent, modalVisibleState, handlers }) {
	const { handleModalVisibility } = handlers;
	const { modalVisible } = modalVisibleState;

	function renderContent(contentString) {
		const contentObject = {
			RagloadEntry: <RagloadEntry handlers={handlers} />,
			RagloadCardMenu: <RagloadCardMenu />,
		};
		return contentObject[contentString];
	}

	const isModalVisible = modalVisible ? "modal-revealed" : "modal-hidden";
	// Consider importing Ragload Entry form into this component instead of passing through props.
	return (
		<div id={isModalVisible}>
			<div className="modal-content">
				<span className="close" onClick={handleModalVisibility}>
					&times;
				</span>
				{renderContent(modalContent)}
			</div>
		</div>
	);
}

export default Modal;
