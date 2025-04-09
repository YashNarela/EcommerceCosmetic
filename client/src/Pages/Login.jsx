import React from 'react'

import bg from "../images/bg.jpg"

import "../css/Login.scss"

import { Link } from 'react-router'
const Login = () => {
  return (
    <>

    
      <div class="bodycontainer" >
        <div class="container" style={{ backgroundImage: `url(${bg})` }} >
          <form action=""   >
            <h1>Login</h1>

            <div class="input-box">
              <input type="text" name="" id="" placeholder="UserName" required />
              <i class="bx bxs-user"></i>
            </div>

            <div class="input-box">
              <input type="text" placeholder="Password" required />
              <i class="bx bxs-lock-alt"></i>
            </div>

            <div class="remeber-forget">
              <label for="chk">
                <input type="checkbox" name="" id="chk" />Remeber Me
              </label>
              <a href="">Forgot Password?</a>
            </div>

            <button class="btn" id='btn'  type="submit">Login</button>

            <div class="register">
              <p>Don't have an acoount?<Link to='/register' >Register</Link></p>
            </div>
          </form>
        </div>
      </div>

     
      
    </>
  )
}

export default Login
