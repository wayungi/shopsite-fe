import Header from "../partials/Header";
import ProductDisplay from "../partials/ProductDisplay";

const Home = () => {
    return (
        <div className="home-page">
            <Header title='shopsite'/>
            <ProductDisplay />
        </div>
    )
};

export default Home;
