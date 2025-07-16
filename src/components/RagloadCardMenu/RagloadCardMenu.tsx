import { useState, Fragment } from "react";
import RagloadEntry from "../RagloadEntry/RagloadEntry";
import Rating from "../Rating/Rating";
import Modal from "../Modal/Modal";

function RagloadCardMenu({ ragload, handlers, key }) {
	const [showModal, setShowModal] = useState(false);

	function handleModalVisibility(): void {
		setShowModal(!showModal);
	}

	function handleDeleteRagload() {
		if (
			window.confirm(
				"Are you sure you want to delete this ragload? This action cannot be undone."
			)
		) {
			handlers.handleDeleteRagload({ condemnedRagload: ragload });
		}
	}
	return (
		<Fragment>
			<div className="ragload-card__menu">
				<Rating ragload={ragload} handlers={handlers} />
				<div
					className="ragload-card__menu__item"
					onClick={handleModalVisibility}>
					EDIT Ragload
				</div>
				<div className="ragload-card__menu__item" onClick={handleDeleteRagload}>
					DELETE Ragload
				</div>
			</div>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<RagloadEntry
					ragload={ragload}
					handlers={{ ...handlers, handleModalVisibility }}
					key={key}
				/>
			</Modal>
		</Fragment>
	);
}

export default RagloadCardMenu;
