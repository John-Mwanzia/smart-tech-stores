import axios from 'axios';
import React, { useContext } from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store';

export default function CartScreen() {
   
    const {state, dispatch:ctxdispatch} = useContext(Store)
      const { cart} = state;
      const {cartItems} = cart;

      const  updateCartHandler = async(item, quantity ) =>{
        const {data } = await axios.get(`http://localhost:3000/api/products/${item._id}`)
        if(data.countInStock< quantity){
          window.alert(" Sorry, the product is out of stock");
          return;
        }
        ctxdispatch({type:"ADD-TO-CART", payload: {...item, quantity} })
      }

      const removeItemHandler = (item) =>{
        ctxdispatch({type:"REMOVE-CART-ITEM", payload:item})
      }
  
  return (
    <div>
   <h1>Shopping List</h1>

   <Row>
          <Col md={8}>
  
           {
              cartItems.length === 0 ? (<Link to="/">Go to shopping</Link>)
              :(
              <ListGroup>
              { cartItems.map((item) => (
                  <ListGroup.Item  key={item._id}>
                 <Row className='align-items-center'>
                      <Col md={4}>
                          <img src={item.Img_Url} alt={item.Comp_Name} className ="img-fluid rounded  img-thumbnail"></img> {'  '}
                          <Link to={`/product/${item.slug}`}>{item.Comp_Name}</Link>
                      </Col>
                      <Col md={3}>
                          <Button variant='light' disabled={item.quantity==1} onClick={()=> updateCartHandler(item, item.quantity -1 )}> <i className='fas fa-minus-circle'/> </Button> {' '}
                          <span>{item.quantity}</span>
                          <Button variant='light' disabled={item.quantity==item.countInStock}onClick={ () => updateCartHandler(item, item.quantity +1 )} > <i className='fas fa-plus-circle'/> </Button>
                      </Col>
                      <Col md={3}>
                          Ksh.{item.price}
                      </Col>
                      <Col md={2}>
                      <Button variant='light' onClick={()=> removeItemHandler(item)}> <i className='fas fa-trash'/></Button>
                         
                      </Col>
                 </Row>
                 </ListGroup.Item>
              ))}
               
              </ListGroup>
             ) }
          </Col>
          <Col md={4}>
  
            <Card>
              <h3>
                Subtotal( {cartItems.reduce((a, c) => a + c.quantity, 0)} items) : Ksh. {cartItems.reduce((a, c)=> a + c.quantity *c.price, 0)}
              </h3>
              <Button type='button' variant='primary' disabled={cartItems.length===0}>
            proceed to checkout
              </Button>
            </Card>
          </Col>
        </Row>
      
    </div>
  )
}

