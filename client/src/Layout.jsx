import React, { useEffect, useRef } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'
import Header from './Components/Header'

const Layout = () => {

    // const reference = useRef(null)

    // function ColorEffect(e) {

    //     console.log(e);
        
    //    let scrollTop= window.scrollY 

      

    //     if (scrollTop > 100) {
    //         reference.current?.classList.add('fixed-nav');
    //     } else {
    //         reference.current?.classList.remove('fixed-nav');
    //     }




    // }

    // useEffect(()=>{


    //     window.addEventListener('scroll', ColorEffect);
    // },[])



    return (
        <>

            <div  className='layoutTopBox  fixed-nav'  >

                <Header />

                 <Navbar />

            </div>


            <Outlet />

            <div className='layoutBottomBox' >
                <Footer />

            </div>

        </>
    )
}

export default Layout
