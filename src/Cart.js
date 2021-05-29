import React, { useState } from 'react'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import extras from './extras'

let priceArray = []
let items = []
const Cart = props => {

    document.body.style.backgroundImage = "url('./imgs/backgroud.jpg')"

    let summaryPrice = 0
    
    const [quantity, setQuantity] = useState(0)
    const [idKey, setIdKey] = useState("start")
    const [itemList, setItemList] = useState(props.cart)

    itemList.map((item,key) => {
        if(idKey==key){
            if(quantity<=0) setQuantity(1)
            priceArray[key] = item[3] * quantity
        }else if(idKey=="start"){ // first render
            priceArray[key] = item[3]
        }
        summaryPrice = summaryPrice + priceArray[key]
    })

    const updateQuantity = (val,key) => {
        setQuantity(val)
        setIdKey(key)
        summaryPrice = 0
    }

    const deleteItem = (id) => {
        items = itemList.filter(item => item !== itemList[id])
        props.onChange(items)
        setItemList(items)
    }

    return (
        <Container className={styles.container}>
            <div className={styles.content}>
                <Row>
                    <Col md={12} lg={8}>
                        {itemList.map((item,key) => (
                        <div className={styles.product} key={key}>
                            <Button className={styles.deleteButton} onClick={() => deleteItem(key)}>
                                <span aria-hidden="true">&times;</span>
                            </Button>
                            <Row>
                                <Col md={3}>
                                    <Image fluid src={item[0].img} className="ml-md-3 mt-md-3" />
                                </Col>
                                <Col md={8}>
                                    <div className={styles.info}>
                                        <Row>
                                            <Col md={5} className="pl-xl-5">
                                                <h4 className="d-inline">
                                                    <Link className="font-weight-bold d-block pt-3 pt-md-0" to={`./details/${item[0].id}`}>{item[0].name}</Link>
                                                </h4>
                                                <h5 className="font-italic">{item[1]}</h5>
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
                                                <input id={"quantity"+key} defaultValue="1" type="number" min="1" max="99" className="w-50 text-md-center pl-2 pr-2 pt-1 pb-1" onChange={e => updateQuantity(e.target.value,key)}/>
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