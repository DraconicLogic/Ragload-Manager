import StarIcon from "@mui/icons-material/Star";
import { Fragment } from "react";

function SmallRating({ ragload }) {
	const { rating } = ragload;
	console.log("Rating: ", rating);
	const iconSize = "small";

	const oneStar = (
		<Fragment>
			<StarIcon fontSize={iconSize} />
		</Fragment>
	);
	const twoStar = (
		<Fragment>
			<StarIcon fontSize={iconSize} />
			<StarIcon fontSize={iconSize} />
		</Fragment>
	);
	const threeStar = (
		<Fragment>
			<StarIcon fontSize={iconSize} />
			<StarIcon fontSize={iconSize} />
			<StarIcon fontSize={iconSize} />
		</Fragment>
	);

	const ratingObject = {
		1: oneStar,
		2: twoStar,
		3: threeStar,
	};

	return ratingObject[rating];
}

export default SmallRating;
