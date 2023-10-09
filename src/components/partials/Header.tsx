import { AiOutlineShoppingCart } from 'react-icons/ai';
import {CgMenuGridR} from 'react-icons/cg';
import Login  from './Login';
import SearchForm from './SearchForm';



type HeadingProps = { title: String } 

const Header = ({ title }: HeadingProps) => {

    return (
        <header>
            <nav className="main-nav">
                <CgMenuGridR size="2.5em"/>
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
        </header>
    )
        
    
}

export default Header;
