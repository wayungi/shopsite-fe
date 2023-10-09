import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import Button from './Button';
import SearchForm from './SearchForm';


type HeadingProps = { title: String } 

const Header = ({ title }: HeadingProps) => {

    return (
        <header>
            <nav>nav</nav>
            <h1>{title}</h1>
            <div>
                <SearchForm />
            </div>
            <div>
                { <AiOutlineUser /> }
                <Button value="Login" />
            </div>
            <div>
                <AiOutlineShoppingCart />
            </div>
        </header>
    )
        
    
}

export default Header;
