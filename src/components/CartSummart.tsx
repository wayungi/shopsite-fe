type Total = {
    subTotal: number,
}

const CartSummary = ({subTotal}: Total) => {

    return (
        <div className="order-summary">
            <h1>Cart Summary</h1>
            <p className="order-total">Subtotal: { subTotal.toString() }</p>
            <button className="checkout-btn">Checkout</button>
        </div>
    )

};

export default CartSummary;
