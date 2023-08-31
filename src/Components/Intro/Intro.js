

import React from "react";
import './Intro.css'

export default function Intro (){
    return(
        <div className="intro__container">
          <div className="intro__image">
             <img src="./intromap.svg"/>
          </div>
          <div className="intro__content"> 
           <p className="intro__heading">
           HI I AM USAGI
           </p>
           <p className="intro__subheading">
               
           Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
           </p>
           <button className="intro__button">email me</button>
          </div>
        </div>
    )
}















/* import React from "react";
import '.css'

export default function (){
    return(
        <div>

        </div>
    )
} */