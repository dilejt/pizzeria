import React, { useState } from 'react'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import extras from './extras'

const Cart = ({ cart }) => {
    
    document.body.style.backgroundImage = "url('/imgs/backgroud.jpg')";

    let itemPrice = 0
    let extrasPrice = 0
    let summaryPrice = 0
    let priceArray = []
    
    const [quantity, setQuantity] = useState(0);
    const [idKey, setIdKey] = useState(0);

    const calcPrice = () => {
        priceArray = []
        cart.map((item,key) => {
            if(item[1]==null) item[1]=1 // if size of pizza not selected choose second option
            item[2].map((id)=> {
                extrasPrice += (extrasPrice + extras[id-1].price)
            })
            if(idKey==key){
                if(quantity<=0) setQuantity(1)
                itemPrice = (item[0].price[item[1]] + extrasPrice) * quantity
            }else{
                itemPrice = (item[0].price[item[1]] + extrasPrice)
            }
            summaryPrice = summaryPrice + itemPrice
            priceArray.push(itemPrice)
            console.log(priceArray)
            extrasPrice = 0
            itemPrice = 0
        })
    }

    const updateQuantity = (val,key) => {
        setQuantity(val)
        setIdKey(key)
        summaryPrice = 0
        calcPrice()
    };

    calcPrice()

    const showSize = (id) => {
        switch (id){
            case 0: return '22cm'
            case 1: return '32cm'
            case 2: return '45cm'
            case 3: return '70cm'
            default: return ''
        }
    }

    return (
        <Container className={styles.container}>
            <div className={styles.content}>
                <Row>
                    <Col md={12} lg={8}>
                        {cart.map((item,key) => (
                        <div className={styles.product} key={key}>
                            <Row>
                                <Col md={3}>
                                    <Image fluid src={item[0].img} className="ml-md-3 mt-md-3" />
                                </Col>
                                <Col md={8}>
                                    <div className={styles.info}>
                                        <Row>
                                            <Col md={5} className="pl-xl-5">
                                                <h4 className="d-inline">
                                                    <Link className="font-weight-bold d-block pt-3 pt-md-0" to={`/details/${item[0].id}`}>{item[0].name}</Link>
                                                </h4>
                                                <h5 className="font-italic">{showSize(item[1])}</h5>
                                                <div className={styles.productInfo}>
                                                    {item[0].ingredients.map((name,key)=> (
                                                        <div key={key}>{name}</div>
                                                    ))}
                                                </div>
                                                <hr />
                                                <div className={styles.productInfo}>
                                                    {item[2].map((id,key)=> (
                                                        <div key={key}>{extras[id-1].name}{' '}{extras[id-1].price}{' zł'}</div>
                                                    ))}
                                                </div>
                                            </Col>
                                            <Col md={4} className="text-md-center mt-5">
                                                <label htmlFor="quantity">Ilość:</label><br />
                                                <input id={"quantity"+key} type="number" placeholder="1" min="1" max="99" className="w-50 text-md-center pl-2 pr-2 pt-1 pb-1" onChange={e => updateQuantity(e.target.value,key)}/>
                                            </Col>
                                            <Col md={3} className={styles.price}>
                                                <span>{priceArray[key]}{' zł'}</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        ))}
                    </Col>
                    <Col md={12} lg={4} className={styles.productContainer}>
                        <div className={styles.summary}>
                            <h3>Podsumowanie</h3>
                            <div className={styles.summaryItem}>
                                <span className={styles.text}>Suma:</span>
                                <span className={styles.price}>{summaryPrice}{' zł'}</span>
                            </div>
                            <Button variant="danger" className="mt-3 mb-2 float-right">Zapłać</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Cart
