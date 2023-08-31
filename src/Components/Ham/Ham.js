import React  from "react";
import './Ham.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Ham(){
 
    const [menuOpen ,setMenuOpen]=useState(false)

    const navigate = useNavigate();
   
 
 
 
 
 
    return(
        <div className="ham__container">
 
 <img src="./lines.svg" width='30px' onClick={()=>{
    if(menuOpen){
        setMenuOpen(false)
    }
    else{
        setMenuOpen(true)
    }
 }}/>
        {
            menuOpen?<> <div className="ham__menu" >
                <div className="ham__menu_item"><p onClick={()=>{ navigate('/')}}>Home</p></div>
                <div className="ham__menu_item2"><p onClick={()=>{ navigate('/workselect')}}>Works</p></div>
                <div className="ham__menu_item3" onClick={()=>{ navigate('/aboutme')}}><p>About</p></div>
                <div className="ham__menu_item4"><p onClick={()=>{ navigate('/contacts')}}>Contacts</p></div>
                <div className="ham__menu_item5"><p onClick={()=>{ navigate('/gallery')}}>Gallery</p></div>
            
            </div></>:<></>
        }
 
 
        </div>
    )
}