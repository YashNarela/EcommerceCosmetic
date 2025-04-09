import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Navbar.scss"
import { GrUserAdmin } from "react-icons/gr";

import { addtoCart } from '../redux/slices/cartSlice';

import { useSelector, useDispatch } from 'react-redux';

import img from "../images/Shine.png"

const TopNavbar = () => {

    const cartlen = useSelector((state) => state.mycart.cart);

    const cartCount = cartlen.length;
    const href = useRef()
    const reference = useRef(null)

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


                            <Link href="https://www.instagram.com/"
                            ><i className="bx bxl-instagram"></i
                            ></Link>
                            <Link to="admin"
                            >  <i class='bx bxs-log-in'></i> </Link>
                            <Link to="login" ><i className="bx bx-user"></i></Link>
                            <Link to="cartitem" style={{ position: "relative" }} ><i className="bx bx-cart"></i>{cartCount >0  && <span className='cartspan'    >{cartlen.length}   </span>} </Link>
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


        </>
    )
}

export default TopNavbar
