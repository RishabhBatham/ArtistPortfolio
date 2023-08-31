import React, { useEffect, useState } from "react";
import './ImageShow.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";
import { useLayoutEffect } from "react";


export default function ImageShow (props){

   



  console.log(props.scroll)


        
        
  





 
 
 















    return(
        <div className="imageshow__container">

         <div className="imageshow__item item1">
            <p className="imageshow__main" /* ref={item1} */>
                SKY RIVER
            </p>
         <div className="imageshow_img" style={{position:'relative'}} >
            <div style={{position:'absolute',top:'50%',left:"50%",width:"50px",height:'10px',zIndex:-1}} /* ref={el1r} */>asdas</div>
            <img src='./scr1.svg' /* ref={img1} *//>
         </div>
         <p className="imageshow__heading">
           Sky River
         </p>
         <p className="imageshow__subheading">
         Digital
         </p>
         </div>
         


         


         <div className="imageshow__item item3">
            <p /* ref={item2}  */className="imageshow__main">
                LONE GIRL
            </p>
         <div className="imageshow_img" >
            <img src='./scr2.svg'/>
         </div>
         <p className="imageshow__heading">
          Lone Girl
         </p>
         <p className="imageshow__subheading">
         Digital
         </p>
         </div>

     {/*     <div className="imageshow__item item2">
            <p className="imageshow__main">
                SKY RIVER
            </p>
         <div className="imageshow_img" >
            <img src='./scr1.svg'/>
         </div>
         <p className="imageshow__heading">
           Sky River
         </p>
         <p className="imageshow__subheading">
         Digital
         </p>
         </div> */}

        </div>
    )
} 






















/* LAWDE KA gsap
const item1 =useRef(null);
const el1r =useRef(null);
const item2 =useRef(null);
const item3 =useRef(null);
const img1 =useRef(null);
const img2 =useRef(null);
const img3 =useRef(null);


useEffect(
   ()=>{
      const el = item1.current;
      const el1rr =el1r.current;
      const el2 =item2.current
      const el3 = item3.current;
      const im1= img1.current;
      const im2 =img2.current
      const im3= img3.current;
      var tl = gsap.timeline();
      
   tl.from(el,{yPercent:70})
   tl.to(el,{yPercent:0,duration:1,scrollTrigger:{trigger:el1rr  ,toggleActions:'play none none none'}})
   tl.from(im1,{width:900})
   tl.to(im1,{width:860,duration:1,scrollTrigger:{trigger:el1rr,toggleActions:'play none none none'}})

    
    
   }
) 
 */