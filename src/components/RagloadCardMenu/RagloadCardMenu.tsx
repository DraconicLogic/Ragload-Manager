import { useState, Fragment } from "react";
import RagloadEntry from "../RagloadEntry/RagloadEntry";
import Modal from "../Modal/Modal";

function RagloadCardMenu({ ragload, handlers, key }) {
	const [showModal, setShowModal] = useState(false);

	function handleModalVisibility(): void {
		setShowModal(!showModal);
	}
	return (
		<Fragment>
			<div className="ragload-card__menu">
				<div
					className="ragload-card__menu__item"
					onClick={handleModalVisibility}>
					edit Ragload
				</div>
				<div className="ragload-card__menu__item">rate Ragload</div>
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
