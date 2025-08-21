// Create Modal component with open and close tag. Make chosen modal content a child of this component

function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<div id="modal-revealed" onClick={onClose}>
			<div
				className="modal-content"
				onClick={(event) => event.stopPropagation()}>
				<span className="close" onClick={onClose}>
					&times;
				</span>
				{children}
			</div>
		</div>
	);
}

export default Modal;
