import React from 'react'
import { useState, useEffect, useContext } from "react";
import "../css/DetailCard.scss"
import { addData } from "../redux/slices/setDataSlice"

import { useDispatch, useSelector } from 'react-redux';

import axios from "axios"
import { useParams } from 'react-router';
const DetailImageCard = () => {



    const { id } = useParams()


    const [mydata, setMydata] = useState({})

    const [defimg,setDefImg]=useState("")

    const dispatch = useDispatch();
    const Base_URL = import.meta.env.VITE_API_BASE_URL;

    let selectit = useSelector((state) => state.setit.alldata);

    console.log(selectit);


    async function LoadData() {

        try {

            let flatData =  selectit.flat();
            let myobj =  flatData.find((ele) => ele._id === id);
            console.log(myobj);
            setMydata(myobj)
            console.log(flatData);

            setDefImg(myobj.dfaultImage)


        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {

        LoadData()
    }, [])


    async function ImageSetter(def) {
        
        try {
            

            setDefImg(def)


        } catch (error) {
            console.log(error);
            
        }
    }


    return (
        <>

            <div class="product-showcase">
                <div class="gallery">
                    <div className="thumbnails">
                        {mydata.images?.map((img, index) => (
                            <img key={index}  onMouseOver={()=>{ImageSetter(img)}}   src={`${Base_URL}/uploads/${img}`} alt={`thumb-${index}`} />
                        ))}
                    </div>

                    {mydata.dfaultImage && (
                        <div className="main-image">
                            <img src={`${Base_URL}/uploads/${defimg}`} alt="Main product" />
                        </div>
                    )}

                </div>

                <div class="product-info">
                    <h2>{mydata.name}</h2>
                    <p class="category">{mydata.category}</p>

                    <div class="rating">
                        <span>⭐⭐⭐⭐☆</span>
                        <span class="score">4/5</span>
                        <span class="reviews">(123 reviews)</span>
                    </div>

                    <div class="price">
                        <span class="original">${mydata.price+400}</span>
                        <span class="discounted">${mydata.price}</span>
                    </div>

                    <p class="desc">
                       {
                            mydata.description
                       }
                    </p>

                    <ul class="details">
                        <li><strong>Brand:</strong> {mydata.brand}</li>
                        <li><strong>Material:</strong> Cotton 80%</li>
                        <li><strong>Delivery:</strong> USA, Europe</li>
                    </ul>

                    <div class="options">
                        <div class="quantity">
                            <label for="qty">Quantity</label>
                            <input type="number" id="qty" defaultValue="1" min="1" />

                        </div>
                        <div class="size">
                            <label for="size">Size</label>
                            <select id="size">
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                        </div>
                    </div>

                    <div class="color-options">
                        <span class="color navy"></span>
                        <span class="color pink"></span>
                        <span class="color red"></span>
                        <span class="color green"></span>
                        <span class="color yellow"></span>
                        <span class="color teal"></span>
                    </div>

                    <div class="actions">
                        <button class="add-cart">🛒 ADD TO CART</button>
                        <button class="wishlist">❤️</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DetailImageCard