import {CiDeliveryTruck} from 'react-icons/ci';
import {GoPackageDependencies } from 'react-icons/go';
import { BiStore } from 'react-icons/bi'
import {FaShopify} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link } from "react-router-dom";



const NavBar = () => {
  return (
    <aside className="admin-nav">
        <ul className="admin-menu-items">
            <li className="admin-list-items"><Link to="/">Home <FaShopify size="2em"/></Link></li>
            <li className="admin-list-items"><Link to="/new">New product <CiDeliveryTruck size="2em"/></Link></li>
            <li><Link to="/management">Product Managements <BiStore size="2em"/></Link></li>
            <li><Link to="/orders">View Orders <GoPackageDependencies size="2em" /></Link></li> {/* can cancel orders too*/}
            <li><Link to="/cart">Cart <AiOutlineShoppingCart size="2em" /></Link></li>
        </ul>
    </aside>
  )
}

export default NavBar