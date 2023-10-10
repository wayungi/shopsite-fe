import Header from "../partials/Header";
import ProductDisplay from "../partials/ProductDisplay";
import data from '../../Model/product.json';

const Home = () => {
    return (
        <div className="home-page">
            <Header title='shopsite'/>
            <ProductDisplay productList={data}/>
        </div>
    )
};

export default Home;
