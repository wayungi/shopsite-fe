import { AiOutlineUser } from 'react-icons/ai';
import Button from './Button';


type HeadingProps = { title: String } 

const Header = ({ title }: HeadingProps) => {

    return (
        <header>
            <nav>nav</nav>
            <h1>{title}</h1>
            <p>search form</p>
            <div>
                { <AiOutlineUser /> }
                <Button value="Login" />
            </div>
            <p>cart</p>
        </header>
    )
        
    
}

export default Header;
