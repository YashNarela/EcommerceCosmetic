import React from 'react'
import "../css/Logout.scss"
const Logout = () => {
  return (
    <>

     
     <div className="outerDivForm">
 

      <div class="wrapper">
        <form action="">
          <h1>Registration</h1>
          <div class="input-box">
            <div class="input-field">
              <input type="text" name="" id="" placeholder="FullName" required />
              <i class='bx bxs-user'></i>
            </div>
            <div class="input-field">
              <input type="text" name="" id="" placeholder="UserName" required />
              <i class='bx bxs-user'></i>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field">
              <input type="email" name="" id="" placeholder="email" required />
              <i class='bx bxs-envelope'></i>
            </div>
            <div class="input-field">
              <input type="number" name="" id="" placeholder="number" required />
              <i class='bx bxs-phone' ></i>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field">
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                required
              />
              <i class='bx bxs-lock-alt' ></i>
            </div>
            <div class="input-field">
              <input
                type="password"
                name=""
                id=""
                placeholder="Confirm password"
                required
              />
              <i class='bx bxs-lock-alt' ></i>
            </div>
          </div>
          <label for=""> <input type="checkbox" name="" id=""/> I here decelare above information provided by me is correct</label>

          <button class="btn" type="submit">Register</button>
        </form>
      </div>
       
      </div>
    </>
  )
}

export default Logout
