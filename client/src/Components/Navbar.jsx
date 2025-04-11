import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Navbar.scss"
import { GrUserAdmin } from "react-icons/gr";

import { addtoCart } from '../redux/slices/cartSlice';

import { MyContext } from '../Pages/LoginContext';

import { useContext } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from "../images/Shine.png"

const TopNavbar = () => {

    const { logedIn, setLogedIn, uname, setUname, uemail, setUemail } = useContext(MyContext);
    const [adminid, setAdminid] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const cartlen = useSelector((state) => state.mycart.cart);

    const cartCount = cartlen.length;
    const href = useRef()
    const reference = useRef(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [displaySet, setDisplaySet] = useState(false)


    const isLargeScreen = window.innerWidth > 768;

    function ToggleIt() {


        if (displaySet) {
            setDisplaySet(false)

            href.current.style.display = "none"

        }




        else {
            setDisplaySet(true)
            href.current.style.display = "flex"
        }




    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let api = `${Base_URL}admin/adminlogin`;
            const response = await axios.post(api, { adminid: adminid, password: password });
            console.log(response);
            messageApi.success(response.data.msg);
            setShow(false);
            localStorage.setItem("admin", response.data.Admin.name);
            navigate("/admindashboard");
        } catch (error) {
            messageApi.error(error.response.data.msg);
        }
    }

    const logoutFeature = () => {
        localStorage.clear();
        setUname("")
        setUemail("");
        setLogedIn(false);
        navigate("/");
    }



    return (
        <>



            <nav className="nav">
                <div className="navgrid">
                    <div className="navcol1">
                        <a id="search" href=""> <i className="bx bx-search"></i> </a>
                    </div>

                    <div className="navcol2">
                        <img src={img} alt="" />
                    </div>

                    <div className="navcol3">
                        <div id="nav3inside" className="nav3inside">


                            <Link 

                                
                            ><i className="bx bxl-instagram"></i
                            ></Link>




                            {
                                logedIn ? (<>
                                    <DropdownButton
                                        variant="dark" className="text-white"

                                        title={"Logout"}
                                    >
                                        <Dropdown.Item eventKey="1" as={Link} to="/home"  >Admin Logout</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" as={Link} to="/home" onClick={logoutFeature}  > {uname ? uname : "Customer"} Logout </Dropdown.Item>


                                    </DropdownButton>



                                </>) : (<>

                                    <DropdownButton
                                        as={ButtonGroup}

                                        variant="dark" className="text-white"



                                        title={"Login"}
                                    >
                                            <Dropdown.Item eventKey="1" as={Link}  onClick={handleShow}   >Admin Login</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" as={Link} to="/login"  >Customer Login </Dropdown.Item>


                                    </DropdownButton>
                                </>)




                            }




                            <Link to="admin"
                            >  <i class='bx bxs-log-in'></i> </Link>
                            <Link to="login" ><i className="bx bx-user"></i></Link>
                            <Link to="cartitem" style={{ position: "relative" }} ><i className="bx bx-cart"></i>{cartCount > 0 && <span className='cartspan'    >{cartlen.length}   </span>} </Link>
                        </div>
                        <Link id="cart" to="cartitem"><i className="bx bx-cart"></i><span>
                        </span>   </Link>

                        <label id="hamburger" className="chklabel" for="chbox" onClick={ToggleIt}>
                            <i className="bx bx-menu"></i
                            ></label>
                    </div>

                    <div className="navrow2"  >
                        <ul ref={href} id="list" style={{
                            backgroundImage: href
                                ? "linear-gradient(to right, #cac531, #f3f9a7)"
                                : "none",



                        }} className="navrow2ul flexi">
                            <li><Link to="home" >Home</Link></li>
                            <li><a href="page2.html">About</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="page6.html">BLOG</a></li>
                            <li><Link to="contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <Navbar bg="dark" data-bs-theme="dark">
                <Container>

                    <Navbar.Brand as={Link} to="home">Navbar</Navbar.Brand>

                    <Nav classNameNameName="me-auto">

                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="insert">Insert</Nav.Link>
                        <Nav.Link as={Link} to="display">Display</Nav.Link>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                        <Nav.Link as={Link} to="logout">Logout</Nav.Link>

                    </Nav>
                </Container>
            </Navbar> */}



            <div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Admin Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Admin ID"
                                    value={adminid} onChange={(e) => { setAdminid(e.target.value) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Login
                            </Button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default TopNavbar
