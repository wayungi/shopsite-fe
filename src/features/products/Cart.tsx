import { useState } from 'react';
import { selectCartHistory } from "./productSlice";
import { useAppSelector } from "../../app/hooks";
import Order from "../../components/Order";
import { CartItem } from "../../Model/Product";
import CartSummary from "../../components/CartSummart";

const Cart = () => {
  const [subTotal, setSubTotal] =  useState(0);
  const cartHistory: CartItem[] =  useAppSelector((state) => selectCartHistory(state));
  const content = cartHistory.map((cart, index) => <Order 
    key={index}
    id={cart.id}
    name={cart.name}
    src={cart.src}
    unitPrice={cart.unitPrice}
    quantity={cart.quantity}
  />);

  return (
    <section className="cart">
      <div className="cart-detail">
        {content}
      </div>

      <div className="cart-summary">
        <CartSummary subTotal={subTotal}/>
      </div>


     
    </section>
  );
}

export default Cart;