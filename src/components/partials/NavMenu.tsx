import { Dispatch, SetStateAction } from "react";

type NavMenuProps = {
    setShowNav: Dispatch<SetStateAction<Boolean>>
}

const NavMenu = ({setShowNav}:NavMenuProps) => {

    const handleMenuClose = () => {
        setShowNav(false);
    }

    return (
        <ul className="nav-menu" onClick={handleMenuClose}>
            <li className="menu-item">Add product</li>
            <li className="menu-item">Category</li>
            <li className="menu-item">test</li>
            <li className="menu-item">test</li>
        </ul>
        )
};

export default NavMenu;
