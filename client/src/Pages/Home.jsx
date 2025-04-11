import React from 'react'
import { useState, useEffect, useContext } from "react";
import SectionOne from '../Components/Home/SectionOne'
import Header from '../Components/Header'
import SectionTwo from '../Components/Home/SectionTwo'
import SectionThree from '../Components/Home/SectionThree'
import SectionFour from '../Components/Home/SectionFour'
import SectionFive from '../Components/Home/SectionFive'
import SectionSix from '../Components/Home/SectionSix'

import {addData } from "../redux/slices/setDataSlice"

import { addtoCart, qntyIncrease, qntyDecrease, productRemove }  from "../redux/slices/cartSlice"

import { useDispatch,useSelector } from 'react-redux';

import { MyContext } from './LoginContext';

import axios from "axios"

import ShopBy from './ShopBy';
const Home = () => {

  const { logedIn, setLogedIn, uname, setUname, uemail, setUemail } = useContext(MyContext);


  const [mydata, setMydata] = useState([]);


  const selectit = useSelector((state) => state.setit.alldata);
  console.log(selectit);

  const Base_URL = import.meta.env.VITE_API_BASE_URL;

  const dispatch=useDispatch();

  


  const customerAunthenticate = async () => {

    const token = localStorage.getItem("token");
    if (token) {
      let api = `${Base_URL}/customer/userauthenticate`;

      const response = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      })

      console.log(response.data);
      localStorage.setItem("username", response.data.name);
      localStorage.setItem("useremail", response.data.email);
      localStorage.setItem("userid", response.data._id);
      localStorage.setItem("userLogedin", true);
      setLogedIn(true);
      setUname(localStorage.getItem("username"));
      setUemail(localStorage.getItem("useremail"));
    }
  }



  const loadData = async () => {


    let api = `${Base_URL}/admin/showproduct`;
    try {
      const response = await axios.get(api);
    
      setMydata(response.data);

      console.log(response.data);
      

      dispatch(addData(response.data))
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    loadData();
    customerAunthenticate();

  }, [])

  useEffect(() => {
    customerAunthenticate();
  }, [logedIn])



  return (
    <>

      <SectionOne />


      <ShopBy />

      <SectionTwo mydata={mydata} />

      <SectionThree />

      <SectionFour />

      <SectionFive />

      <SectionSix />


    </>
  )
}

export default Home
