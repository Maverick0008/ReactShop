import React from "react";
const Info = ({title}) => {
    return (
        <div className="d-flex align-center flex-column flex">
            <h2 className="mb-20">{title}</h2>
            <img src="/img/emptyCart.png" alt="emptyCart" />
        </div>
    )
}
export default Info