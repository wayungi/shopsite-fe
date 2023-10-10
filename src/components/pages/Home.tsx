import Header from "../partials/Header";
import ProductDisplay from "../partials/ProductDisplay";

// type HomeProps = {Header: JSX.Element}

const Home = () => {
    return (
        <div className="home-page">
            <Header title='shopsite'/>
            <ProductDisplay productList={[]}/>
        </div>
    )
};

export default Home;
