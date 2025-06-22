import { useState } from "react";
import Modal from "../Modal/Modal";
import RagloadEntry from "../RagloadEntry/RagloadEntry";

function Toolbar({ handlers }) {
	const [showModal, setShowModal] = useState(false);

	function handleModalVisibility(): void {
		setShowModal(!showModal);
	}

	return (
		<div id="tool-bar">
			<div>search</div>
			<div id="tool-bar__add" onClick={() => setShowModal(true)}>
				add
			</div>
			<div>undefined</div>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<RagloadEntry
					ragload={null}
					handlers={{ ...handlers, handleModalVisibility }}
				/>
			</Modal>
		</div>
	);
}

export default Toolbar;
