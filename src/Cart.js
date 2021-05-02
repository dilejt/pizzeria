import React from 'react'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'

const Cart = ({ cart }) => {


    const cartList = cart.map(item => {
        return (
            <h3 key={item.id} className={styles.component}>
                <p> {item.name} </p>
                <p className={styles.price}> {item.price} zł </p>
            </h3>
        )
    })

    let price = 0;
    cart.forEach(item => { price += item.price })

    return (
        <div className={styles.cartList}>
            <p className={styles.cartPrice}> Cena w koszyku: {price} zł</p>
            <Link to='/'> Powrót </Link>
            {cartList}
        </div>
    )
}

export default Cart
