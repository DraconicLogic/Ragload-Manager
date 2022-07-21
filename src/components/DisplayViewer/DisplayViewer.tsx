// @ts-ignore
import DeliveredRagloads from "../DeliveredRagloads/DeliveredRagloads.tsx";
// @ts-ignore
import SortedRagloads from "../SortedRagloads/SortedRagloads.tsx";
// @ts-ignore
import RagloadEntry from "../RagloadEntry/RagloadEntry.tsx";

function DisplayViewer({ screenState, handlers }) {
	let display;
	const { screen } = screenState;
	switch (screen) {
		case 0:
			display = <DeliveredRagloads />;
			break;
		case 1:
			display = <SortedRagloads />;
			break;
		case 2:
			display = <RagloadEntry handlers={handlers} screenState={screenState} />;
			break;
		default:
	}

	return (
		<div>
			<h1>Display Viewer</h1>
			{display}
		</div>
	);
}

export default DisplayViewer;
