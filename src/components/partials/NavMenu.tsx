import { Dispatch, SetStateAction } from "react";

type NavMenuProps = {
    setShowNav: Dispatch<SetStateAction<Boolean>>
    setShowAddProductForm: Dispatch<SetStateAction<Boolean>>
}

const NavMenu = ({setShowNav, setShowAddProductForm}:NavMenuProps) => {

    const handleMenuClose = () => {
        setShowNav(false);
    }

    const handleShowAddProductFrom = () => {
        setShowAddProductForm(true);
    }

    return (
        <ul className="nav-menu" onClick={handleMenuClose}>
            <li className="menu-item" onClick={handleShowAddProductFrom}>Add product</li>
            <li className="menu-item">Category</li>
            <li className="menu-item">test</li>
            <li className="menu-item">test</li>
        </ul>
        )
};

export default NavMenu;
