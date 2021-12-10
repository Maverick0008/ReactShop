import React from "react";
import AppContext from "../context";
import Info from "./Card/info";
import axios from "axios";
function Cart({ onCartClose, onRemove, items = [] }) {
    const {cartItems,setCartItems} = React.useContext(AppContext)
    const [CompleteOrder, setCompleteOrder] = React.useState(false)

    const onClickOreder = async () => {
        axios.post('https://61adc67fd228a9001703af4f.mockapi.io/orders', {
            items: cartItems,
        })
       
        setCompleteOrder(true);
        setCartItems([])
       for (let i = 0; i < cartItems.length; i++) {
           const item = cartItems[i];
           await axios.delete(`https://61adc67fd228a9001703af4f.mockapi.io/cart/${item.id}`)
           
       }
       
    }
    return (
        <div className="rightBarShadow">
            <div className="rightBar">
                <h2 className="mb-30 d-flex justify-between">Cart<img onClick={onCartClose} className="buttonRemove cu-p" src="/img/button-remove.svg" alt="remove" /></h2>

                {
                    items.length > 0 ? (
                        <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                        <img className="mr-15" width={100} height={100} src={obj.img} alt="Albom" />
                                        <div className="mr-40">
                                            <p>{obj.title}</p>
                                            <b>{obj.price}$</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="buttonRemove" src="/img/button-remove.svg" alt="remove" />
                                    </div>
                                ))}

                            </div>
                            <div className="totalBlock">
                                <ul>
                                    <li className="d-flex">
                                        <span>Total:</span>
                                        <div></div>
                                        <b>50$</b>
                                    </li>
                                    <li className="d-flex">
                                        <span>Tax: 10%</span>
                                        <div></div>
                                        <b>5$</b>
                                    </li>
                                </ul>
                                <button onClick={onClickOreder}>Checkout</button>
                            </div></div> ) : (
                                <Info title={CompleteOrder ?"Order placed" : "Cart empty"} />
                            )}



            </div>
        </div>
    )
}
export default Cart;