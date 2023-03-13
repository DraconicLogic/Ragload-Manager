import * as React from "react";
// @ts-ignore
import RagloadTable from "../RagloadTable/RagloadTable.tsx";
import { Ragload } from "../../types";
// @ts-ignore
import { formatISOString } from "../../utils.ts";

function DayAccordion({ day, ragloads }) {
	const [isOpen, setIsOpen] = React.useState(false);

	const ragloadsWeight: number = ragloads.reduce((weight, ragload: Ragload) => {
		console.log("Ragload Weight: ", ragload.weight, typeof ragload.weight);
		return weight + ragload.weight;
	}, 0);

	return (
		<div className="sorted-ragloads__day-accordion">
			<div className="sorted-ragloads__day-accordion__info">
				<div>{day}</div>
				<div>{ragloadsWeight} kg</div>
				<div onClick={() => setIsOpen(!isOpen)}>{isOpen ? "∆" : "∇"}</div>
			</div>
			{isOpen && <RagloadTable ragloads={ragloads} />}
		</div>
	);
}

export default DayAccordion;
