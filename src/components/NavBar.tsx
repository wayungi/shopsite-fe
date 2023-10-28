import {CiDeliveryTruck} from 'react-icons/ci';
import {GoPackageDependencies, GoPackageDependents} from 'react-icons/go';
import { BiStore } from 'react-icons/bi'
import {FaShopify} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';



const NavBar = () => {
  return (
    <aside className="admin-nav">
        <ul className="admin-menu-items">
            <li className="admin-list-items">Home <FaShopify size="2em"/></li>
            <li className="admin-list-items">New product <CiDeliveryTruck size="2em"/></li>
            <li>Product Managements <BiStore size="2em"/></li>
            <li>View Orders <GoPackageDependencies size="2em" /></li> {/* can cancel orders too*/}
            <li>View dispatched Orders <GoPackageDependents size="2em" /></li>
            <li>Cart <AiOutlineShoppingCart size="2em" /></li>
        </ul>
    </aside>
  )
}

export default NavBar