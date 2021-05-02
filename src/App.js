import React, { useState } from 'react'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import { BrowserRouter, Route } from 'react-router-dom'
import products from './products'
import Cart from './Cart'


const App = () => {

  const [cart, setCart] = useState([])


  const addToCart = (idx) => {
    const product = products.find(item => item.id == idx)
    const tmp = [...cart, product]
    setCart(tmp)
  }


  return (
    <BrowserRouter>
      <Route path="/" exact component={ProductList} />
      <Route path="/details/:id" render={(props) => <ProductDetails {...props} addToCart={addToCart} />} />
      <Route path="/cart" render={(props) => <Cart {...props} cart={cart} />} />
    </BrowserRouter>
  )
}

export default App
