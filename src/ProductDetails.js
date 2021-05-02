import React from 'react'
import products from './products'
import { Link } from 'react-router-dom'
import styles from './ProductDetails.module.scss'

const ProductDetails = ({ match, addToCart }) => {

    const product = products.find(prod => match.params.id == prod.id)

    return (
        <div className={styles.container}>
            <Link to='/cart' className={styles.cart}> koszyk </Link>
            <Link to="/" className={styles.button}> powrót </Link>
            <div className={styles.details}>
                <div className={styles.detailsLeft}>
                    <h3> Cena: {product.price} </h3>
                    <p> Status: dostępny </p>
                    <p className={styles.button} onClick={() => addToCart(product.id)}> Add to Cart </p>
                </div>
                <div className={styles.detailsRight}>
                    <h3> {product.name} </h3>
                    <p> Cena: {product.price} zł </p>
                    <p> Opis: {product.description} </p>
                </div>

                <img src={product.photo} />
            </div>
        </div>
    )
}

export default ProductDetails
