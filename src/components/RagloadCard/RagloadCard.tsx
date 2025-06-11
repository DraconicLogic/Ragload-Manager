import React, { useState, Fragment } from "react";
import RagloadCardMenu from "../RagloadCardMenu/RagloadCardMenu";
import Modal from "../Modal/Modal";
import { formatISOString } from "../../utils";

function RagloadCard({ ragload, handleRagload }) {
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showMenu, setShowMenu] = useState<Boolean>(false);

	function handleModalVisibility() {
		setShowMenu(!showMenu);
	}

	// TODO: Remove the RagloadCardOptions. We are going to use a pop up menu on a modal
	return (
		<Fragment>
			<tr className="ragload-card">
				<td>{ticketNumber}</td>
				<td>{vendor}</td>
				<td>{weight}</td>
				<td>{formatISOString(deliveryDate)}</td>
				<td
					onClick={() => handleModalVisibility()}
					className="ragload-card__option-toggle"
					title="More options">
					⋮
				</td>
			</tr>

			<Modal isOpen={showMenu} onClose={() => setShowMenu(false)}>
				<RagloadCardMenu />
			</Modal>
		</Fragment>
	);

	// return showOptions ? (
	// 	<RagloadCardOptions
	// 		handleRagload={handleRagload}
	// 		optionsState={{ showOptions, setShowOptions }}
	// 		ragload={ragload}
	// 	/>
	// ) : (
	// 	displayCard()
	// );
}

export default RagloadCard;
