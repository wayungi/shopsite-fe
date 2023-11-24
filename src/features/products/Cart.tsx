import { useState, useEffect } from 'react';
import { selectCartHistory } from "./productSlice";
import { useAppSelector } from "../../app/hooks";
import Order from "../../components/Order";
import { CartItem } from "../../Model/Product";
import CartSummary from "../../components/CartSummart";

const Cart = () => {
  const [orderTotal, setOrderTotal] =  useState<number>(0);
  const cartHistory: CartItem[] =  useAppSelector((state) => selectCartHistory(state));

  useEffect(() => {
    const total = cartHistory.reduce(
      (accumulator, currentValue) => accumulator + (currentValue.quantity*currentValue.unitPrice),
      0
    );

    setOrderTotal(total);

  }, [cartHistory])
 


  console.log(orderTotal)
 

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
        <CartSummary subTotal={orderTotal}/>
      </div>
    </section>
  );
}

export default Cart;