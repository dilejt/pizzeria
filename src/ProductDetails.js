import React, { useState } from 'react'
import products from './products'
import extras from './extras'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from './ProductDetails.module.scss'

const ProductDetails = ({ match, addToCart }) => {

    document.body.style.backgroundImage = "none";

    const [size, setSize] = useState()
    const [checkedSpices, setCheckedSpices] = useState(new Map())

    const product = products.find(prod => match.params.id == prod.id)

    const handleCheckedChange = (id) => {
        let modifiedMap = checkedSpices
        if(checkedSpices.get(id)) 
            modifiedMap.delete(id)
        else 
            modifiedMap.set(id, true)
        setCheckedSpices(modifiedMap)
    };

    const priceChose = (key) =>{
        switch (key){
            case 0: return '22cm'
            case 1: return '32cm'
            case 2: return '45cm'
            case 3: return '70cm'
            default: return ''
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
                    <Col xs={12}>
                        <hr />
                        <h4>Cena:</h4>
                        <Button variant="danger" className="mt-3" onClick={() => addToCart(product.id,size,checkedSpices)}>Dodaj do koszyka</Button>
                    </Col>
                </Col>
                <Col lg={5} sm={12} className="text-dark">
                    <Col xs={12}>
                        <div className={styles.device}>
                            <h1 className="text-center pb-4 font-weight-bold">Wybierz rozmiar:</h1>
                            <Row className={styles.range}>
                            {product.price.map((price,key) => (
                                <React.Fragment key={key}>
                                    {key==1?
                                        <input defaultChecked type="radio" name="size" id={key} value={key} onClick={() => setSize(key)}/>
                                        :
                                        <input type="radio" name="size" id={key} value={key} onClick={() => setSize(key)}/>
                                    }
                                    <label className="text-center" htmlFor={key} price={price+" zł"}>
                                        <span className={styles.size}>{() => priceChose(key)}</span>
                                    </label>
                                </React.Fragment>
                            ))}
                            <div className={styles.point}></div>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} className="mt-5">
                        <Row>
                            <Col xs={12}>
                                <h2 className="text-center pb-3 font-weight-bold">Wybierz dodatki:</h2>
                            </Col>
                            {extras.map((item) => (
                                <Col xs={12} sm={6} className={styles.extra} key={item.id}>
                                    <input type="checkbox" id={item.name} value={item.name} name="extras" onClick={() => handleCheckedChange(item.id)}/>
                                    <label htmlFor={item.name}>
                                        <Image src={item.img} fluid/>
                                        <h3 className="font-weight-bold pt-3">{item.price}{' zł'}</h3>
                                    </label>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Col>
                <Col lg={2} className="sm-none"></Col>
            </Row>
        </Container>
    )
}

export default ProductDetails
