import { useState, useEffect, Fragment } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function Rating({ ragload, handlers }) {
	let ratingDisplay;
	const [currentRating, setCurrentRating] = useState<Number>();

	useEffect(() => {
		(function initializeCurrentRating() {
			if (ragload.rating) {
				setCurrentRating(ragload.rating);
			} else {
				setCurrentRating(0);
			}
		})();
	}, [ragload]);

	function handleRating(newRating) {
		setCurrentRating(newRating);
		const ragloadCopy = { ...ragload };
		ragloadCopy.rating = newRating;
		const ragloadUpdateObject = {
			updatedRagload: ragloadCopy,
			previousRagload: ragload,
		};
		handlers.handleUpdateRagload(ragloadUpdateObject);
	}

	switch (currentRating) {
		case 0:
			ratingDisplay = (
				<Fragment>
					<StarBorderIcon onClick={() => handleRating(1)} />
					<StarBorderIcon onClick={() => handleRating(2)} />
					<StarBorderIcon onClick={() => handleRating(3)} />
				</Fragment>
			);
			break;
		case 1:
			ratingDisplay = (
				<Fragment>
					<StarIcon onClick={() => handleRating(1)} />
					<StarBorderIcon onClick={() => handleRating(2)} />
					<StarBorderIcon onClick={() => handleRating(3)} />
				</Fragment>
			);
			break;
		case 2:
			ratingDisplay = (
				<Fragment>
					<StarIcon onClick={() => handleRating(1)} />
					<StarIcon onClick={() => handleRating(2)} />
					<StarBorderIcon onClick={() => handleRating(3)} />
				</Fragment>
			);
			break;
		case 3:
			ratingDisplay = (
				<Fragment>
					<StarIcon onClick={() => handleRating(1)} />
					<StarIcon onClick={() => handleRating(2)} />
					<StarIcon onClick={() => handleRating(3)} />
				</Fragment>
			);
		default:
			break;
	}

	return <div>{ratingDisplay}</div>;
}

export default Rating;
