import React from 'react'
import products from './products'
import styles from './ProductList.module.scss'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const ProductList = () => {

    const htmlList = products.map(product => {

        return (
            <div key={product.id} className={styles.product}>
                <Link to={`/details/${product.id}`}> <img src={product.photo} /> </Link>
                <p> {product.name} </p>
                <h3> Cena: {product.price} zł </h3>
            </div>
        )
    })

    return (
        <div className={styles.products}>
            {htmlList}
        </div>
    )
}

export default ProductList







// import React from 'react'
// import styles from './ProductList.module.css'

// const ProductList = ({ products }) => {

//     const htmlProducs = products.map(prod => {
//         return (
//             <div className={styles.product} key={prod.id}>
//                 <img src={prod.photo} />
//                 <p> {prod.name} </p>
//                 <h3> cena: {prod.price} zł </h3>
//             </div>
//         )
//     })
//     return (
//         <div className={styles.App}>
//             {htmlProducs}
//         </div>
//     )
// }

// export default ProductList
