import React from "react";

function Card() {
    return (
        <div className="item">
          <img width={120} height={120} src="/img/vinyl/1.jpg" alt="" />
          <h5>Green Day - Best</h5>
          <div className="d-flex junstify-between">
            <div className="d-flex align-center">
              <span className="price">Price:</span>
              <b>25$</b>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="" />
              </button>
            </div>
            
          </div>
        </div>
    )
}
export default Card;