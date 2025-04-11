import React from 'react'
import "../css/Logout.scss"
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';
const Logout = () => {


  const navigate=useNavigate()
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  }


  const Base_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${Base_URL}/customer/registration`;
    try {
      const response = await axios.post(api, input);

      console.log(response.data);
      toast.success(response.data.success);

      navigate('/login')
    } catch (error) {

      toast.error(error.response.data)
      console.log(error);

    }
  }



  return (
    <>


      <div className="outerDivForm">


        <div class="wrapper">
          <form action="">
            <h1>Registration</h1>
            <div class="input-box">
              <div class="input-field">
                <input type="text" name="name" id="" placeholder="FullName"  onChange={handleInput} />
                <i class='bx bxs-user'></i>
              </div>
              <div class="input-field">
                <input type="text" name="city" id="" placeholder="City"  onChange={handleInput} />
                <i class='bx bxs-user'></i>
              </div>
            </div>
            <div class="input-box">
              <div class="input-field">
                <input type="email" name="email" id="" placeholder="email" onChange={handleInput} />
                <i class='bx bxs-envelope'></i>
              </div>
              <div class="input-field">
                <input type="number" name="pno" id="" placeholder="number"  onChange={handleInput} />
                <i class='bx bxs-phone' ></i>
              </div>
            </div>
            <div class="input-box">
              <div class="input-field">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="password"
                
                  onChange={handleInput}
                />
                <i class='bx bxs-lock-alt' ></i>
              </div>
              <div class="input-field">
                <input
                  type="password"
                  name="cnfpass"
                  id=""
                  placeholder="Confirm password"
                
                  onChange={handleInput}
                />
                <i class='bx bxs-lock-alt' ></i>
              </div>
            </div>

            <div class="input-box">
              <div class="input-field">
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter Address"
                  onChange={handleInput}
               
                />
                <i class='bx bxs-shopping-bag-alt'></i>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  name="pin"
                  id=""
                  placeholder="Enter Pin Code"
                  onChange={handleInput}
                 
                />
                <i class='bx bx-pin'></i>
              </div>
            </div>






            <label for=""> <input type="checkbox" name="" id="" /> I here decelare above information provided by me is correct</label>

            <button class="btn" type="submit" onClick={handleSubmit}  >Register</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Logout
