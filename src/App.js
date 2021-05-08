import React, { useState } from 'react'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import { BrowserRouter, Route } from 'react-router-dom'
import products from './products'
import { Link } from 'react-router-dom'
import './App.scss'
import Cart from './Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'


const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (idx, size, extrasIdsList, finalPrice) => {
    const product = products.find(item => item.id == idx)
    const productInfo = [product,size,extrasIdsList,finalPrice]
    const tmp = [...cart, productInfo]
    setCart(tmp)
  }

  const dropDownList = products.map(product => {
    return (
        <Link key={product.id} className="dropdown-item" to={`/details/${product.id}`}>
          {product.name}
        </Link>
    )
  })
  return (
    <BrowserRouter>
      <Navbar fluid="md" fixed="top" expand="lg">
        <Container fluid="md">
          <Navbar.Brand>
            <Link to='/' className="nav-link">
              <img alt="logo" src='/logo.png' width="30" height="30" className="d-inline-block align-top" /> <span className="partOne">Pizzeri</span><span className="partTwo">no. 1</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                {dropDownList}
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
              <Link to='/cart' className="nav-link"><img alt='Koszyk' className="cart" src="/imgs/cart.svg" /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route path="/" exact component={ProductList} />
      <Route path="/details/:id" render={(props) => <ProductDetails {...props} addToCart={addToCart} />} />
      <Route path="/cart" render={(props) => <Cart onChange={newCart => setCart(newCart)} {...props} cart={cart} />} />
    </BrowserRouter>
  )
}

export default App
