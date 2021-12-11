import axios from "axios";
import React from "react";
import Card from "../components/Card/Card";
function Orders() {
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        (async () => {
            const {data} = await axios.get('https://61adc67fd228a9001703af4f.mockapi.io/orders')
            setOrders(data.reduce((prev, obj) =>[...prev, ...obj.items],[]))
        })();
    },[])
    
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>My orders</h1>
          
        </div>

      
        <div className="d-flex flex-wrap">
        {orders.map((item, index) => (
            <Card key={index} {...item}/>
          ))}
        </div>
      </div>
    )
}
export default Orders;