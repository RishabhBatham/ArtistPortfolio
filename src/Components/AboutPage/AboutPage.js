import React from "react";
import './AboutPage.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";

export default function AboutPage(){

    const [scroll,setScroll]=useState(0)

    window.addEventListener('scroll',function(){
     var limit = document.body.offsetHeight - window.innerHeight-6;
     
       setScroll(this.window.scrollY)
        
        
       console.log(scroll)
       console.log(limit)
 
    })




    return(
        <>
        <div className="aboutPage__container">
        <Header scroll={scroll} />
         <img src="./tempabout.svg" width='100%'/>

        </div>
        <Footer bgcolor='transparent' foottitle="#695F5F" footcentertext="#564A4A" footcopyright="#A88B8B" svgicon="#FFF" svgiconbg="#EA3737" btop="1px solid gray"/>
        </>
    )
}