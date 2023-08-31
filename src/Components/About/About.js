import React from "react";
import './About.css'


export default function (){
    return(
        <div className="about__container">
            <div className="about__line">

            </div>
            <div className="about__img">
                <img src="./aboutimage.svg"/>
            </div>
            <div className="about__content">
              <p className="about__content_p">
                ABOUT
              </p>
              <p className="about__content_p2">
              Usagi’s exquisite drawing, painting, and endless experiments with different textures are enhanced by her understanding of and love for her subjects”
                </p>
                <button className="about__button">know more</button>
            </div>

        </div>
    )
}