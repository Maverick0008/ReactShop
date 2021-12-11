import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import React from "react";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import Favorites from "./pages/Favorites";
import AppContext from "./context";



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cardOpen, setCardOpen] = React.useState(false)
  const [Loading, setLoading] = React.useState(true)


  React.useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const cartResp = await axios.get('https://61adc67fd228a9001703af4f.mockapi.io/cart')
      const favoriteResp = await axios.get('https://61adc67fd228a9001703af4f.mockapi.io/favorites')
      const itemsResp = await axios.get('https://61adc67fd228a9001703af4f.mockapi.io/items')

      setLoading(false)
      setCartItems(cartResp.data)
      setFavorites(favoriteResp.data)
      setItems(itemsResp.data)
    }
    fetchData()
  }, [])
  const onAddToCart =  async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
    if (findItem) {
      setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
      await axios.delete(`https://61adc67fd228a9001703af4f.mockapi.io/cart/${findItem.id}`)
    } else {
     const {data} =  await axios.post('https://61adc67fd228a9001703af4f.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, data])
 
    }
    }catch (error) {
      console.log('Error to add cart')
    }
    

  }
  const onRemoveProduct = (id) => {
    axios.delete(`https://61adc67fd228a9001703af4f.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }
  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        await axios.delete(`https://61adc67fd228a9001703af4f.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((favObj) => favObj.id !== obj.id))
      } else {
        const { data } = await axios.post('https://61adc67fd228a9001703af4f.mockapi.io/favorites', obj)

        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      console.log('Error to add favorite')
    }
    
  }
   const itemAddedCart = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }
  return (
    <AppContext.Provider value={{cartItems, favorites, items, itemAddedCart,onAddToFavorite,setCartItems}}>
      <div className="wrapper clear">
      {cardOpen && <Cart items={cartItems} onCartClose={() => setCardOpen(false)} onRemove={onRemoveProduct} />}
      <Header onClickCart={() => setCardOpen(true)} />
      <Routes>
        <Route path='/' exact element={
          <Home items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearch={onChangeSearch}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={Loading}
          />
        }>

        </Route>
        <Route path='/favorites' exact element={
          <Favorites  />
        }>

        </Route>
      </Routes>
    </div>
    </AppContext.Provider>

  );
}

export default App;
