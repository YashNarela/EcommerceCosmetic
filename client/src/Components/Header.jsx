import React from 'react'

import "../css/Header.scss"

import { Link } from 'react-router'

const Header = () => {
    return (
        <>


            <div class="header_animation">
                <Link to="/">
                    <marquee behavior="alternate" direction="">
                        ✹ Free Shipping on over $200 ✹ Free Shipping on over $200 ✹ Free
                        Shipping on over $200 ✹ Free Shipping on over $200 ✹ Free Shipping
                        on over $200 ✹ Free Shipping on over $200 ✹ Free Shipping on over
                        $200 ✹ Free Shipping on over $200 ✹ Free Shipping on over $200 ✹
                        Free Shipping on over $200 ✹ Free Shipping on over $200 ✹ Free
                        Shipping on over $200 ✹ Free Shipping on over $200
                    </marquee>
                </Link>
            </div>

        </>
    )
}

export default Header