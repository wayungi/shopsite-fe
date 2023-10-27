import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';



const Header = () => {
  return (
    <header className="flex">
        <div className="flex">
            <a className="logo">shopsite</a>
            <form>
                <input type='text' placeholder='search' aria-label="search field"></input>
                <button type='button'>search</button>
            </form>
            <div className="dropdown">
              <div>
                <AiOutlineUser aria-label="user icon"/>
                account
                <RiArrowDropDownLine aria-label="dropdown icon"/>
              </div>
              <div className="dropdown-options">
                <a href="#">Sign in</a>
                <a href="#">Orders</a>
                <a href="#">Saved Items</a>
              </div>
            </div>
            <div>
              <AiOutlineShoppingCart aria-label="cart icon"/>
            </div>
        </div>
    </header>
  )
}

export default Header