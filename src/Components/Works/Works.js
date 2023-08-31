import React from "react";
import './Works.css'
import Header from "../Header/Header";
import { useState } from "react";
import Footer from "../Footer/Footer";
export default function Works(props){


    const images = [{ name:'image' ,src:'w1.svg'},
    { name:'image' ,src:'w2.svg'},
    { name:'image' ,src:'w3.svg'},
    { name:'image' ,src:'w4.svg'},
    { name:'image' ,src:'w5.svg'},
    { name:'image' ,src:'w6.svg'},
    { name:'image' ,src:'w7.svg'},
    { name:'image' ,src:'w8.svg'},{ name:'image' ,src:'w9.svg'},
    { name:'image' ,src:'w10.svg'},

    { name:'image' ,src:'w12.svg'},
    { name:'image' ,src:'w11.svg'}





    ]


    const [refresh,setRefresh ]=useState(false)




    const [scroll,setScroll]=useState(0)
    const [workselected,setWorkSelected]=useState("1")

    window.addEventListener('scroll',function(){
     var limit = document.body.offsetHeight - window.innerHeight-6;
     
       setScroll(this.window.scrollY)
        
        
       console.log(scroll)
       console.log(limit)
 
    })

    const refreshPage=()=>{
        setRefresh(!refresh)
        props.refreshMainPage()
    
    }






    return(

        <>
       

        <div className="workselect__container">
        <Header scroll={scroll} margin='0'/>
           <div className="workselect__text">
            <p onClick={()=>{
                setWorkSelected("1")
              console.log('p1 fn running')
              refreshPage()
              console.log(workselected)

            }}

              style={{color:workselected=='1'? '#681A1A' :'#A49191',transition :"all .4s"}}
                  

            > MANGA ART</p>
            <p onClick={()=>{
                setWorkSelected("2")
                console.log('p2 fn running')
                refreshPage()
                console.log(workselected)
            }}
            
            style={{color:workselected=='2'?'#681A1A':'#A49191' ,transition :"all .4s"}}
            
            > COMMISION</p>
           </div>
           <div className="workselect__img">
           {
                images.map((item)=>{
                    return(
                       <img src={`./${item.src}`}></img>
                    )
                })
              }
           </div>
          
        </div>

        <Footer bgcolor='#681A1A' foottitle="#EDEDED" footcentertext="#EBDADA" footcopyright="#A88B8B" svgicon="#6A6A6A" svgiconbg="#FFF"/>

        </>
    )
}