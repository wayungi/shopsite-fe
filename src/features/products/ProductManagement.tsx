// import { useState } from "react";
// import Product from "../../Model/Product";
import { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProducts } from "./productSlice";


const ProductManagement = () => {
  const products =  useAppSelector(selectProducts);
  let content: (ReactNode[] | null) = null;

  if(products.length > 0) {
    content = products.map((product) => <article key={product._id} className="management-panel">
        <div className="management-image">
          <img src={product.serverImagePath} alt={product.name} />
        </div>
        <label htmlFor="name">Name</label>
        <input type="text" value={product.name} id="name"/>
        <label htmlFor="price">Price</label>
        <input type="text" value={product.price.toString()} id="price"/>
        <label htmlFor="category">category</label>
        <input type="text" value={product.category} id="category"/>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" value={product.stock.toString()} id="quantity"/>
      </article>
      );
  }

  return (
    <section className="product-management">{content}</section>
  );

}

export default ProductManagement