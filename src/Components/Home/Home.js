import React from "react";
import './Home.css'
import Header from "../Header/Header";
import { useRef } from "react";
import { useEffect,useState } from "react";
import Intro from "../Intro/Intro";
import { gsap,Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageShow from "../ImageShow/imageShow";
import Footer from "../Footer/Footer";
import About from "../About/About";
import PinterestGallery from "../PinterestGallery/PinterestGallery";

gsap.registerPlugin(ScrollTrigger)
export default function Home(){
   const textRef =useRef(null);
   const textRef2 =useRef(null);
   const IntroRef =useRef(null);
   

  useEffect(
      ()=>{
         const el = textRef.current;
         const el2 =IntroRef.current
         const el3 = textRef2.current;
         gsap.to(el,{y:-2})
         gsap.to(el,{xPercent:30,duration:2,scrollTrigger:{trigger:el2,toggleActions:'restart pause reverse none'}})

         gsap.to(el3,{y:-2})
         gsap.to(el3,{xPercent:-10,duration:2,scrollTrigger:{trigger:el2,toggleActions:'restart pause reverse none'}})
      }
   ) 




   const [scroll,setScroll]=useState(0)

   window.addEventListener('scroll',function(){
    var limit = document.body.offsetHeight - window.innerHeight-6;
    
      setScroll(this.window.scrollY)
       
       
      console.log(scroll)
      console.log(limit)

   })

/*      gsap.registerPlugin(ScrollTrigger);
     gsap.to('.home__img_p_p1',{

      x:100,
      duration:3,
      ScrollTrigger:'.home__img_p_p1'
     }) */



    return(
         



      <>
        <div className="home__container">
           <Header scroll={scroll} />
           <div className="home__img">
               <div className="home__img_p"><p className="home__img_p_p1" ref={textRef2}>HANAMI
             </p></div>
             <div className="home__img_p"><p  ref={textRef}>USAGI
             </p></div>
             
             
              <img src="./eren.svg"/>
           </div>
           <Intro ref={IntroRef}/>
           <ImageShow scroll={scroll}/>
            <About/>
            <PinterestGallery/>
           <Footer svgicon="#E6E2EE" svgiconbg="#EA3737"/> 
        </div>
    
        </>

    )
}