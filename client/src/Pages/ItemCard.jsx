import React, { useEffect } from 'react'

import "../css/ItemCard.scss"
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router';

import { addData } from "../redux/slices/setDataSlice"

import { useDispatch, useSelector } from 'react-redux';
const ItemCard = () => {



    const { id } = useParams();

    const selectit = useSelector((state) => state.setit.alldata);
    const dispatch = useDispatch();

    let mydata = []


    


    useEffect(() => {


        DataHandler()

    }, [])



    async function DataHandler() {



        mydata = selectit.filter((ele) => ele.id === id)
        console.log(mydata);


    }



    const Base_URL = import.meta.env.VITE_API_BASE_URL;




    return (
        <>

            <div class="product-card">
                <div class="product-image">
                    <img src={`${Base_URL}/uploads/${mydata[0].dfaultImage}`} alt="Olive suede loafers" />
                </div>

                <div class="product-details">
                    <h2>Olive suede loafers</h2>
                    <p class="price">€125,00 EUR</p>

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
                        <button class="add-to-cart">Add to cart</button>
                        <button class="more-details">More details</button>
                        <span class="wishlist">  <CiHeart /></span>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ItemCard