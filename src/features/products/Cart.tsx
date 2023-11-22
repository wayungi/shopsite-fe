import { selectCartHistory } from "./productSlice";
import { useAppSelector } from "../../app/hooks";
import Order from "../../components/Order";




const Cart = () => {

  const cartHistory =  useAppSelector((state) => selectCartHistory(state));



  console.log(cartHistory)

  return (
    <div>Cart</div>
  )
}

export default Cart;