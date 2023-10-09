import { AiOutlineUser } from 'react-icons/ai'

type HeadingProps = { title: String } 

const Header = ({ title }: HeadingProps) => {

    return (
        <header>
            <nav>nav</nav>
            <h1>{title}</h1>
            <p>search form</p>
            <div>
                { <AiOutlineUser /> }
                login
            </div>
            <p>cart</p>
        </header>
    )
        
    
}

export default Header;
