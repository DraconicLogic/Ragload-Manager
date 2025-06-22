import { useState, Fragment } from "react";
import RagloadCardMenu from "../RagloadCardMenu/RagloadCardMenu";
import Modal from "../Modal/Modal";
import { formatISOString } from "../../utils";

function RagloadCard({ ragload, handlers }) {
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showMenu, setShowMenu] = useState<Boolean>(false);

	function handleModalVisibility() {
		setShowMenu(!showMenu);
	}

	return (
		<Fragment>
			<tr
				className="ragload-card"
				id={showMenu ? "ragload-card--selected" : null}>
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
				<RagloadCardMenu
					ragload={ragload}
					handlers={{ ...handlers, handleModalVisibility }}
				/>
			</Modal>
		</Fragment>
	);
}

export default RagloadCard;
