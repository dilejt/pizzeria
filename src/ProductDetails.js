import React, { useState } from 'react'
import products from './products'
import extras from './extras'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import styles from './ProductDetails.module.scss'

let spicesIds = []
const ProductDetails = ({ match, addToCart }) => {

    document.body.style.backgroundImage = "none"

    const [size, setSize] = useState(1)
    const [checkedSpices, setCheckedSpices] = useState(new Map())
    const [extrasPrice, setExtrasPrice] = useState(0)
    const product = products.find(prod => match.params.id == prod.id)

    const handleCheckedChange = (id) => {
        let sumExtras = 0
        let modifiedMap = checkedSpices
        if(checkedSpices.get(id)) 
            modifiedMap.delete(id)
        else 
            modifiedMap.set(id, true)
        setCheckedSpices(modifiedMap)
        spicesIds = Array.from(checkedSpices, ([name]) => (name))
        spicesIds.map((id)=> {
            sumExtras = (sumExtras + extras[id-1].price)
        })
        setExtrasPrice(sumExtras)
    }

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
                <Col lg={5} md={12} className="text-center order-lg-1 order-2">
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
                    <Col xs={12} className="pt-4">
                        <h4>Sumarycznie: {product.price[size] + extrasPrice}{ 'zł'}</h4>
                        <Button id={styles.buyButton} variant="danger" className="my-3 mb-lg-0" onClick={() => addToCart(product.id,priceChose(size),spicesIds,product.price[size] + extrasPrice)}>Dodaj do koszyka</Button>
                    </Col>
                </Col>
                <Col xl={5} lg={6} md={12} className="text-dark order-lg-2 order-1">
                    <Col xs={12}>
                        <div className={styles.device}>
                            <h1 className="text-center pb-4 font-weight-bold">Wybierz rozmiar:</h1>
                            {product.price.map((_,key) => (
                                <span key={key} className={styles.size}>{priceChose(key)}</span>
                            ))}
                            <Row className={styles.range}>
                            {product.price.map((price,key) => (
                                <React.Fragment key={key}>
                                    {key==1?
                                        <input defaultChecked type="radio" name="size" id={key} value={key} onClick={() => setSize(key)}/>
                                        :
                                        <input type="radio" name="size" id={key} value={key} onClick={() => setSize(key)}/>
                                    }
                                    <label htmlFor={key} price={price+" zł"}></label>
                                </React.Fragment>
                            ))}
                            <div className={styles.point}></div>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} className="mt-5">
                        <Row>
                            <Col xs={12}>
                                <h2 className="text-center py-3 font-weight-bold">Wybierz dodatki:</h2>
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
            </Row>
        </Container>
    )
}

export default ProductDetails
