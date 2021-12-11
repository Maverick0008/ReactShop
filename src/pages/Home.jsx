import React from "react";
import Card from "../components/Card/Card"

function Home({items,
            searchValue,
            onChangeSearch,
            onAddToCart,
            onAddToFavorite,
            isLoading}) {
    const renderItems = () => {
    
        return (isLoading ? [...Array(8)] : items)  
            .map((item, index) => (
              <Card
                key={index}
                onFavorite ={(obj)=> onAddToFavorite(obj)}
                onPlus={(obj)=> onAddToCart(obj)}
                // isAdded = {itemAddedCart(item && item.id)}
                loading = {isLoading}
                {...item}
              //   isAdded = {cartItems.some((item) => item.id === obj.id)}
              
              />
            ))
    }
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Search ${searchValue}` : 'All vinyl'}</h1>
          <div className="search__box d-flex">
            <img src="/img/search-icon.svg" alt="Search-iron"></img>
            <input onChange={onChangeSearch} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="mobileStyle d-flex flex-wrap">
          {renderItems()}
        </div>
      </div>
    )
}
export default Home;