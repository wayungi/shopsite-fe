import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';



const Header = () => {
  return (
    <header className="flex">
        <div className="flex">
            <a className="logo">shopsite</a>
            <form className="flex">
                <input type='text' placeholder='Search' aria-label="search field"></input>
                <button type='button'>Search</button>
            </form>
            <div className="dropdown">
              <div className="flex account">
                <AiOutlineUser size="2em" aria-label="user icon"/>
                <h3>account</h3>
                <RiArrowDropDownLine size="2em" aria-label="dropdown icon"/>
              </div>
              <div className="dropdown-options">
                <ul>
                  <li className="login-link"><a href="#" className="nav-item">Sign in</a></li>
                  <li><a href="#" className="nav-item">Orders</a></li>
                  <li><a href="#" className="nav-item">Saved Items</a></li>
                </ul>
              </div>
            </div>
            <div>
              <AiOutlineShoppingCart size="2em" aria-label="cart icon"/>
            </div>
        </div>
    </header>
  )
}

export default Header