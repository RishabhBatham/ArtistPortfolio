import React from "react";
import './ThankYouDialogBox.css'
import { useNavigate } from "react-router-dom";

export default function ThankYouDialogBox(){
    const navigate = useNavigate();
    return(
        <div className="tydig">
           <div className="tydig__card">
             <img src="./heartanim.gif" style={{marginTop:'-69px'}}/>
             <p className="tydig__heading">
             Thankyou
             </p>
             <p className="tydig__subheading">
             I will reply you as soon as i can
             </p>
             <div className="tydig__bottombox">
              <button onClick={()=>{navigate('/')}}>RETURN HOME</button>
             </div>
             
           </div>
        </div>
    )
}