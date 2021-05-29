import React from 'react'
import products from './products'
import styles from './ProductList.module.scss'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProductList = () => {

    document.body.style.backgroundImage = "url('./imgs/backgroud.jpg')";

    const htmlList = products.map(product => {
        return (
            <Col key={product.id} md="6">
                <Image src={product.img} className={styles.img} fluid rounded />
                <h1 className={styles.productName}> {product.name} </h1>
                <h5 className={styles.productPrice}>Cena od: <span className="font-weight-bold">{product.price[0]} zł</span></h5>
                <Link to={`./details/${product.id}`}><Button variant="danger" className="mt-3">Wybierz</Button></Link>
            </Col>
        )
    })

    return (
        <Container className={styles.container} fluid="md">
            <Row className="text-center">
                {htmlList}
            </Row>
        </Container>
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
