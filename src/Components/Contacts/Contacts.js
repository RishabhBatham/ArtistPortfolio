import React, { useState } from "react"
import './Contacts.css'
import Footer from "../Footer/Footer"
import Ham from "../Ham/Ham"
import ThankYouDialogBox from "../ThankyouDialogBox/ThankYouDialogBox"











export default function Contacts(){

       const [dialog,setDialog]=useState(false)

    return(
      <>
        <div className="contacts__container">
           <div className="contacts__header">

              <Ham/>
        
           </div>
          
              {
                dialog==true?<><ThankYouDialogBox/></>:<></>
              }
           



           <div className="contacts__heading">
          
             ENQUIRIES
             
           </div>
           <div className="contacts__form">
            <div className="contacts__item1">
               <p>
               Name
               </p>
              <div className="contacts__item1_inputs">
              <input  placeholder="Nirst name"  style={{outline:'none'}}/>
              <input  placeholder="Last name"  style={{outline:'none'}}/>
              </div>
            </div>

            <div className="contacts__item1">
               <p>
              Email
               </p>
              <div className="contacts__item1_inputs2">
              <input  placeholder="enter your email"  style={{outline:'none'}}/>
             
              </div>
            </div>



            
            <div className="contacts__item1">
               <p>
              Email
               </p>
              <div className="contacts__item1_inputs2">
              <input  placeholder="enter your email"  style={{outline:'none'}}/>
             
              </div>
            </div>



            
            <div className="contacts__item1">
               <p>
              Message
               </p>
              <div className="contacts__item1_inputs2">
              <input  placeholder="type here"  style={{outline:'none'}}/>
             
              </div>
            </div>




            <div className="conatct__form__btn">
              <button value="Send" onClick={()=>{setDialog(true)}}>send</button>
            </div>



            
           </div>


       
        </div>
        <Footer bgcolor='#FFF' foottitle="#695F5F" footcentertext="#564A4A" footcopyright="#A88B8B" svgicon="#ffffff" svgiconbg="#EA3737"/>
        </>
    )
}