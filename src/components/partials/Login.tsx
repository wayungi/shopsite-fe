import { AiOutlineUser } from 'react-icons/ai';

const Login =  () => {
    return (
        <div className="login-trigger">
            { <AiOutlineUser size="2.5em"/> }
            <button>Login</button>
        </div>
    )
};

export default Login;