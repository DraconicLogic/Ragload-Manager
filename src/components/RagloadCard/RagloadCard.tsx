import { useState, Fragment } from "react";
import RagloadCardMenu from "../RagloadCardMenu/RagloadCardMenu";
import Modal from "../Modal/Modal";
import { formatISOString } from "../../utils";
import SmallRating from "../SmallRating/SmallRating";

function RagloadCard({ ragload, handlers, key }) {
	console.log("key", key);
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showMenu, setShowMenu] = useState<Boolean>(false);

	function handleModalVisibility() {
		setShowMenu(!showMenu);
	}
	console.log("Ragload: ", ragload);
	return (
		<Fragment>
			<tr
				className="ragload-card"
				id={showMenu ? "ragload-card--selected" : null}>
				<td>{ticketNumber}</td>
				<td>{vendor}</td>
				<td>{weight}</td>
				<td>{formatISOString(deliveryDate)}</td>
				<td>
					<SmallRating ragload={ragload} />
				</td>
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
					key={key}
				/>
			</Modal>
		</Fragment>
	);
}

export default RagloadCard;
