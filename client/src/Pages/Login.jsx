import bg from "../images/bg.jpg"

import "../css/Login.scss"

import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate } from 'react-router'

import { useEffect, useState ,useContext} from 'react'

import { Link } from 'react-router'

import { MyContext } from './LoginContext';



const Login = () => {
    const { logedIn, setLogedIn, uname, setUname, uemail, setUemail } = useContext(MyContext);

  const Base_URL = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate()

  const [inp, setInp] = useState({})

  const [chkinp, setChkInp] = useState(true);


  const handleInput = (e) => {

    console.log(e);


    let { name, value, type } = e.target;


    if (type === "checkbox") {

      setInp((prev) => (({ ...prev, [name]: e.target.checked })))

      setChkInp(prev => !prev)
    }

    else {
      setInp((prev) => ({ ...prev, [name]: value }))
    }



    console.log(inp);



  }


  const handleSubmit = async (e) => {
try {
  

  e.preventDefault()

  console.log(inp);


  let api = `${Base_URL}/customer/customerlogin`


  const response = await axios.post(api, inp);
  console.log(response.data.msg);

  localStorage.setItem("token", response.data.token);

  toast.success(response.data.msg)

  customerAunthenticate()


} catch (error) {
  

  toast.error( error.response.data)
}



  }


  
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
  

    useEffect(()=>{

      customerAunthenticate()
    },[logedIn])


  return (
    <>


      <div class="bodycontainer" >
        <div class="container" style={{ backgroundImage: `url(${bg})` }} >
          <form action=""   >
            <h1>Login</h1>

            <div class="input-box">
              <input type="text" name="email" id="" placeholder="Email" required onChange={handleInput} />
              <i class="bx bxs-user"></i>
            </div>

            <div class="input-box">
              <input type="text" placeholder="Password" required name="password" onChange={handleInput} />
              <i class="bx bxs-lock-alt"></i>
            </div>

            <div class="remeber-forget">
              <label for="chk">
                <input type="checkbox" name="checked" id="chk" onChange={handleInput} />Remeber Me
              </label>
              <a href="">Forgot Password?</a>
            </div>



            <button class="btn" id='btn' disabled={chkinp} type="submit" onClick={handleSubmit} >Login</button>

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
