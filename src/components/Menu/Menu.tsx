import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Modal from "../Modal/Modal";
import Settings from "../Settings/Settings";
import { useState, useEffect, Fragment } from "react";

function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [menuScreen, setMenuScreen] = useState<string>("menu-list");

	useEffect(() => {
		(function resetMenuScreen() {
			if (isMenuOpen === false) {
				setMenuScreen("menu-list");
			}
		})();
	}, [isMenuOpen]);

	const icon = isMenuOpen ? (
		<MenuOpenIcon
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			className="menu-icon--open"
		/>
	) : (
		<MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
	);

	const menuList = (
		<Fragment>
			<div className="ragload-card__menu">
				<div
					className="ragload-card__menu__item"
					onClick={() => setMenuScreen("settings")}>
					Settings
				</div>
				<div className="ragload-card__menu__item">...coming soon</div>
			</div>
		</Fragment>
	);

	let display = null;
	switch (menuScreen) {
		case "menu-list":
			display = menuList;
			break;
		case "settings":
			display = Settings();
			break;
		default:
			display = null;
	}

	return (
		<Fragment>
			<span>{icon}</span>
			<Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
				{display}
			</Modal>
		</Fragment>
	);
}

export default Menu;
