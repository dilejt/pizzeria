import React from 'react'
import products from './products'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from './ProductDetails.module.scss'

const ProductDetails = ({ match, addToCart }) => {

    document.body.style.backgroundImage = "none";
    const product = products.find(prod => match.params.id == prod.id)

    const priceChose = (key) =>{
        switch (key){
            case 0: return '22cm';
            case 1: return '32cm';
            case 2: return '45cm';
            case 3: return '70cm';
            default: return '';
        }
    }

    return (
        <Container fluid className={styles.container}>
            <Image src='/imgs/pizza.png' className={styles.pizza} fluid/>
            <Row>
                <Col lg={5} sm={12} className="text-center">
                    <Col xs={12}>
                        <Image src='/imgs/recipe.png' fluid/>
                        <div className={styles.ingredients}>
                            <h3>{product.name}</h3>
                            Składniki podstawowe:
                            {product.ingredients.map((item,key) => (
                                <li key={key}>
                                    {item}
                                </li>
                            ))}
                        </div>
                    </Col>
                </Col>
                <Col lg={5} sm={12} className="text-dark">
                    <Col xs={12}>
                        <div className={styles.device}>
                            <h1 className="text-center pb-4 font-weight-bold">Wybierz rozmiar:</h1>
                            <Row className={styles.range}>
                            {product.price.map((item,key) => (
                                <React.Fragment key={key}>
                                    <input type="radio" name="size" id={key} value={key} required />
                                    <label className="text-center" for={key} data-debt-amount={item+" zł"}>
                                        <span className={styles.size}>{priceChose(key)}</span>
                                    </label>
                                </React.Fragment>
                            ))}
                            <div className={styles.point}></div>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} className="mt-5">
                        <h2 className="text-center pb-4 font-weight-bold">Wybierz dodatki:</h2>
                        <div className={styles.extra}>
                            <input type="radio" id="fat" value="fat" name="fatfit" />
                            <input type="radio" id="fit" value="fit" name="fatfit" />
                            <label for="fat">🍕</label>
                            <label for="fit">💪🏼</label>
                        </div>
                    </Col>
                </Col>
                <Col lg={2} className="sm-none"></Col>
            </Row>
            <Button variant="danger" className="mt-3" onClick={() => addToCart(product.id)}>Dodaj</Button>
        </Container>
    )
}

export default ProductDetails
