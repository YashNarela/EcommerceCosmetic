import React from 'react'

import "../../css/SectionTwo.scss"
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router'
import makeup from "../../images/makeup.jpg"
import { MdDelete } from "react-icons/md";
import { addtoCart, qntyIncrease, qntyDecrease, productRemove } from "../../redux/slices/cartSlice"

import { useDispatch, useSelector } from 'react-redux';

const SectionTwo = ({ mydata }) => {

    const Base_URL = import.meta.env.VITE_API_BASE_URL;
    const selectit = useSelector((state) => state.mycart.cart);
    console.log(selectit);


    const dispatch = useDispatch();

    const navigate = useNavigate()

    const ProductHandle = async (id) => {

        try {

            navigate(`/product/${id}`);

        } catch (error) {

        }
    }


    let ans = mydata.map((ele, idx) => (


        <>

            <div class="product-card">
                <div class="product-image">
                    <img style={{ height: "200px" }} src={`${Base_URL}/uploads/${ele.dfaultImage}`} alt="Olive suede loafers" />
                </div>

                <div class="product-details">
                    <h2>{ele.description}</h2>
                    <p class="price">€ {ele.price} EUR</p>

                    <div class="product-color">
                        <span>Color: <strong>olive</strong></span>
                        <div class="colors">
                            <span class="color olive selected"></span>
                            <span class="color peach"></span>
                            <span class="color purple"></span>
                        </div>
                    </div>

                    <div class="product-size">
                        <span>Size: <strong>37</strong></span>
                        <div class="sizes">
                            <span class="size">35</span>
                            <span class="size">36</span>
                            <span class="size selected">37</span>
                            <span class="size">38</span>
                            <span class="size">39</span>
                            <span class="size">40</span>
                        </div>
                    </div>

                    <div class="product-actions">
                    <button class="add-to-cart" onClick={() => { dispatch(addtoCart({...ele,qty:1})) }}  >Add to cart</button>
                        <button class="more-details" onClick={() => { ProductHandle(ele._id) }}  >More details</button>
                        <span class="wishlist"  onClick={()=>{dispatch(productRemove(ele._id))}}   >  <MdDelete /></span>
                    </div>
                </div>
            </div>






        </>

    ))


    return (
        <>



            <div class="section4Image">
                <div class="section4grid">
                    {
                        ans
                    }

                </div>
            </div>


        </>
    )
}

export default SectionTwo