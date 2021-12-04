import React from "react";
function Cart() {
    return (
        <div style={{ display: 'none' }} className="rightBarShadow">
            <div className="rightBar">
                <h2 className="mb-30 d-flex justify-between">Cart<img className="buttonRemove cu-p" src="/img/button-remove.svg" alt="remove" /></h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-15" width={100} height={100} src="/img/vinyl/1.jpg" alt="Albom" />
                        <div className="mr-40">
                            <p>Green day - Best</p>
                            <b>25$</b>
                        </div>
                        <img className="buttonRemove" src="/img/button-remove.svg" alt="remove" />
                    </div>
                    <div className="cartItem d-flex align-center">
                        <img className="mr-15" width={100} height={100} src="/img/vinyl/3.jpg" alt="Albom" />
                        <div className="mr-40">
                            <p>Green day - DOS</p>
                            <b>25$</b>
                        </div>
                        <img className="buttonRemove" src="/img/button-remove.svg" alt="remove" />
                    </div>
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
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;