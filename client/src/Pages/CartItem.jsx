import React, { useState } from 'react'

import "../css/AddCart.scss"

import { addtoCart, qntyIncrease, qntyDecrease, productRemove } from "../redux/slices/cartSlice"

import { useDispatch, useSelector } from 'react-redux';

import axios from "axios"
import { Link, useNavigate } from 'react-router';
const CartItem = () => {

  const navigate=useNavigate()

  const cartItem = useSelector(state => state.mycart.cart)

  const dispatch = useDispatch();

  console.log(cartItem);


  let totalAmount = 5000;

  const [shoe, setShoe] = useState({
    name: "Training Shoes",
    creator: "Nike",
    img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 500,
  });


  const Base_URL = import.meta.env.VITE_API_BASE_URL;



  const initPay = (data) => {
    const options = {
      key: "rzp_test_q1vcegWxDpopEW",
      amount: data.amount,
      currency: data.currency,
      name: shoe.name,
      description: "Test",
      image: shoe.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = `${Base_URL}/api/payment/verify`;
          const { data } = await axios.post(verifyURL, response);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };




  const handlePay = async () => {
    try {
      const orderURL = `${Base_URL}/api/payment/orders`;
      const { data } = await axios.post(orderURL, { amount: totalAmount });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };


  let totalPrice = 0;


  let cartObj = cartItem.map((ele, idx) => {

    totalPrice += ele.price * ele.qty
    return (

      <>



        <div className="row border-top border-bottom">
          <div className="row main align-items-center">
            <div className="col-2">
              <img className="img-fluid" src={`${Base_URL}/uploads/${ele.dfaultImage}`} alt="item" />
            </div>
            <div className="col">
              <div className="row text-muted">{ele.category}</div>
              <div className="row">{ele.name}</div>
            </div>
            <div className="col">
              <Link to="" onClick={() => { dispatch(qntyDecrease(ele._id)) }}  >-</Link>
              <Link to="" className="border">{ele.qty}</Link>
              <Link to="" onClick={() => { dispatch(qntyIncrease(ele._id)) }} >+</Link>
            </div>
            <div className="col">
              &euro; {ele.price * ele.qty} <span className="close" onClick={() => { dispatch(productRemove(ele._id)) }}  >&#10005;</span>
            </div>
          </div>
        </div>


      </>

    )
  })







  return (
    <>





      <div className="shopping-cart-wrapper">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">


              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">{cartItem.length} items</div>
                </div>
              </div>





              {
                cartObj
              }









              <div className="row">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" alt="item" />
                  </div>
                  <div className="col">
                    <div className="row text-muted">Shirt</div>
                    <div className="row">Cotton T-shirt</div>
                  </div>
                  <div className="col">
                    <a href="#">-</a>
                    <a href="#" className="border">1</a>
                    <a href="#">+</a>
                  </div>
                  <div className="col">
                    &euro; 44.00 <span className="close"  >&#10005;</span>
                  </div>
                </div>
              </div>














              <div className="back-to-shop" onClick={() => { navigate('/home') }}   >
                <a href="#">&larr;</a>
                <span className="text-muted">Back to shop</span>
              </div>
            </div>

            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>ITEMS {cartItem.length}  </div>
                <div className="col text-right">&euro; {totalPrice} </div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">Standard-Delivery - &euro;5.00</option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div
                className="row"
                style={{
                  borderTop: "1px solid rgba(0,0,0,.1)",
                  padding: "2vh 0"
                }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">&euro; {totalPrice+5} </div>
              </div>
              <button className="btn" onClick={handlePay} >CHECKOUT</button>
            </div>
          </div>
        </div>


      </div>


    </>
  )
}

export default CartItem