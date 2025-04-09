import React from 'react'
import "../../css/SectionFour.scss"

import girl from "../../images/girl.webp"
const SectionFour = () => {
    return (
        <>

 

            <div class="section6WithButton">
                <div class="section6grid">
                    <div class="section6div1">
                        <h1>Welcome</h1>
                        <p>
                            Pair text with an image to focus on your chosen product, collection,
                            or blog post. Add details on availability, style, or even provide a
                            review
                        </p>
                        <div class="section6btn">
                            <button>OUR MISSION</button>
                        </div>
                    </div>

                    <div class="section6div2">
                        <img src={girl} alt="" />
                    </div>
                </div>
            </div>
              
                
        </>
    )
}

export default SectionFour