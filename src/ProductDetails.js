import React from 'react'
import products from './products'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from './ProductDetails.module.scss'

const ProductDetails = ({ match, addToCart }) => {

    document.body.style.backgroundImage = "none";
    const product = products.find(prod => match.params.id == prod.id)

    const priceChose = (key) =>{
        switch (key){
            case 0: return 'S';
            case 1: return 'M';
            case 2: return 'XL';
            case 3: return 'MonkaGIGA';
            default: return '';
        }
    }

    return (
        <Container className={styles.container}>
            <Row>
                <Col lg={6} sm={12} className="text-center">
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
                    <Col xs={12}>
                        {product.price.map((item,key) => (
                            <div className="text-center" key={key}>
                                <Col className={styles.sizeName} xs={12} >
                                    <input className="form-check-input" type="radio" name="sizes" value={key} id={"size"+key} />
                                    <label className="form-check-label" for={"size"+key}>{priceChose(key)}{' '}</label>
                                </Col>
                                <Col className={styles.sizeValue} xs={12} >
                                    {item} zł
                                </Col>
                            </div>
                        ))}
                    </Col>
                </Col>
                <Col lg={6} sm={12} className="text-light">
                    <Image src='/imgs/device.png' fluid/>
                    <div className={styles.device}>
                        <h1 className="text-center font-weight-bold">Wybierz rozmiar:</h1>
                        <Row className={styles.range}>
                            <input type="radio" name="debt-amount" id="1" value="1" required />
                            <label for="1" data-debt-amount="< $10k">S</label>
                            <input type="radio" name="debt-amount" id="2" value="2" required />
                            <label for="2" data-debt-amount="$10k-25k">asd</label>
                            <input type="radio" name="debt-amount" id="3" value="3" required />
                            <label for="3" data-debt-amount="$25k-50k"></label>
                            <input type="radio" name="debt-amount" id="4" value="4" required />
                            <label for="4" data-debt-amount="$50k-100k"></label>
                            <div className={styles.debtAmountPos}></div>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Button variant="danger" className="mt-3" onClick={() => addToCart(product.id)}>Zakup</Button>
        </Container>
    )
}

export default ProductDetails
