type ButtonProps = {value: String}

const Button =  ({value}: ButtonProps) => {
    return <button type="button">{value}</button>
};

export default Button;