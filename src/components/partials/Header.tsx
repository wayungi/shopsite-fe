import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {CgMenuGridR} from 'react-icons/cg';
import Login  from './Login';
import SearchForm from './SearchForm';
import NavMenu from './NavMenu';
import AddProduct from '../pages/AddProduct';

type HeadingProps = { title: String } 

const Header = ({ title }: HeadingProps) => {
    const [showNav, setShowNav] = useState<Boolean>(false);
    const [showAddProductForm, setShowAddProductForm] = useState<Boolean>(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    }

    return (
        <header>
            <nav className="main-nav">
                <CgMenuGridR size="2.5em" onClick={ handleShowNav }/>
            </nav>
            <h1>{title}</h1>
            <div>
                <SearchForm />
            </div>
            <div>
                <Login />
            </div>
            <div className="cart">
                <AiOutlineShoppingCart size="2.5em" />
            </div>

            {/* nav menu */}
            {showNav && <NavMenu setShowNav={setShowNav} setShowAddProductForm={setShowAddProductForm}/>}
            {/* add product */}
            {showAddProductForm && <AddProduct />}

        </header>
    )  
        
    
}

export default Header;
