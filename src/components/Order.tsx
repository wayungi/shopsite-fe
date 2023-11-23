import { CartItems } from "../Model/Product";

const Order = ({ items, status, date }: CartItems) => {


    // console.log(items)
    // console.log(status);
    // console.log(date)

    const ItemList = items.map((item, index) => (
            <div className="item-display" key={index}>
                <div className="item-desc">
                    <div className="cart-image">
                        <img src={item.src} />
                    </div>
                    <div className="item-name-price">
                        <p>{item.name}</p>
                        <p>{item.unitPrice}</p>
                        {/* <p>{item.unitPrice * item.quantity}</p> */}
                    </div>
                </div>
                <div className="item-controls">
                    <div>
                        <button>Remove</button>
                    </div>
                    <div>
                        <button>-</button>
                        <p>{item.quantity}</p>
                        <button>+</button>
                    </div>
                </div>
                
            </div>
        )
    )

    return (
        <article className="item-list">
            {ItemList}
        </article>
    )

};

export default Order;