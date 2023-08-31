import React from "react";
import './Gallery.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverFlow,Pagination,Navigation} from "swiper";
import { Scrollbar } from 'swiper/modules';
import Ham from "../Ham/Ham";

export default function Gallery(){

      const images = [

           {name:"some name",src:'w1.svg',sub:"some subheading"},
           {name:"some name",src:'w2.svg',sub:"some subheading"},
           {name:"Sakata Gintoki",src:'w3.svg',sub:"Gintama,Anime"},
           {name:"some name",src:'w4.svg',sub:"some subheading"},
           {name:"some name",src:'w5.svg',sub:"some subheading"},
           {name:"some name",src:'w6.svg',sub:"some subheading"},
           {name:"some name",src:'w7.svg',sub:"some subheading"},
           {name:"some name",src:'w8.svg',sub:"some subheading"},
           {name:"some name",src:'w9.svg',sub:"some subheading"},
           {name:"some name",src:'w10.svg', sub:"some subheading"},
           {name:"some name",src:'w11.svg', sub:"some subheading"},
           {name:"some name",src:'w12.svg', sub:"some subheading"},





      ]








    return(
        <div className="gallery__container">

               <div style={{position:'absolute',top:'20px',right:'20px'}}>
               <Ham/>
               </div>




            <div className="gallery__logo">
            <svg width="156" height="64" viewBox="0 0 234 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96.8503 60.4011C95.913 59.5712 95.9208 58.138 96.8662 57.4736C97.2742 57.1869 98.5429 56.8025 99.6854 56.6194C109.032 55.1219 111.129 45.2014 103.079 40.5664C100.819 39.2652 100.324 38.0658 101.585 36.9492C102.729 35.9363 104.338 36.2099 107.087 37.8844C112.513 41.1905 114.406 48.4796 111.262 53.967C110.447 55.389 109.779 56.6003 109.778 56.6587C109.777 56.7171 111.417 56.8355 113.423 56.9215C117.483 57.0957 118.959 58.097 117.721 59.8371C117.148 60.6419 115.849 60.7748 107.321 60.9004C100.244 61.0047 97.3775 60.868 96.8503 60.4011ZM122.358 60.3892C121.295 59.4478 121.469 58.7145 123.418 55.9306C124.392 54.5384 125.636 51.7439 126.183 49.7205C127.434 45.0887 127.835 44.6236 130.238 45.0228C134.314 45.6998 138.296 42.7556 138.244 39.1041C138.217 37.261 137.507 36.1833 133.917 32.5366L131.054 29.6279L125.886 29.367C119.543 29.0468 115.154 27.3379 111.298 23.6878C107.961 20.5291 106.45 17.8657 105.555 13.5655C104.942 10.6187 104.982 9.5908 105.828 6.55729C106.81 3.03138 107.466 2.17386 109.182 2.17386C110.48 2.17386 110.751 2.40167 116.906 8.66874L122.526 14.3914L122.943 12.2266C123.612 8.75672 125.507 5.54362 128.388 2.9923C131.316 0.399476 133.616 -0.436199 135.008 0.586771C135.747 1.12982 135.891 3.42142 135.891 14.6702V28.1051L138.372 30.7114C141.685 34.1899 143.016 36.6277 143 39.1891C142.971 43.855 138.694 48.4008 133.663 49.1132C131.534 49.4146 131.335 49.6048 130.424 52.2052C129.89 53.7291 129.271 55.3899 129.047 55.8957C128.694 56.6955 129.021 56.8155 131.554 56.8155C133.156 56.8155 134.787 57.0992 135.178 57.4461C136.248 58.3931 136.036 59.8627 134.743 60.4758C133.117 61.2463 123.248 61.1773 122.358 60.3892ZM125.676 24.289C123.723 21.8207 110.758 8.98997 110.216 8.98997C109.171 8.98997 110.237 14.2584 111.884 17.2403C114.266 21.5504 120.098 25.17 124.796 25.2528C126.312 25.2796 126.391 25.1934 125.676 24.289ZM131.142 14.7401C131.142 6.66433 130.869 5.90084 129.077 8.96965C127.516 11.6416 126.931 15.0928 127.594 17.7121C128.187 20.0564 129.792 22.6043 130.697 22.6379C130.942 22.6478 131.142 19.0929 131.142 14.7401ZM86.3647 58.8007C85.8566 58.1583 85.4408 57.0284 85.4408 56.2899C85.4408 54.0068 86.995 52.611 89.5371 52.611C92.2489 52.611 93.948 54.0282 93.948 56.2899C93.948 58.5516 92.2489 59.9688 89.5371 59.9688C87.8865 59.9688 87.043 59.6582 86.3647 58.8007ZM86.1617 50.064C85.0125 49.4184 84.6619 46.3785 85.3541 43.0627C87.1756 34.3377 94.7813 27.669 104.49 26.2846C108.417 25.7246 110.369 26.2488 110.369 27.8641C110.369 29.2498 109.296 29.8271 105.917 30.2588C99.5442 31.0734 93.7534 34.8536 91.2731 39.8187C90.6371 41.0917 89.9592 43.8404 89.7667 45.9269C89.3697 50.229 88.4118 51.3282 86.1617 50.064ZM127.12 40.2307C125.385 39.1548 125.279 36.0777 126.949 35.2862C130.36 33.6698 133.74 35.9308 132.351 38.8996C131.959 39.7376 131.06 40.5607 130.352 40.7288C128.585 41.1483 128.604 41.1512 127.12 40.2307Z" fill="#ECE9E9"/>
<rect y="92" width="234" height="4" fill="#F4F4F4"/>
</svg>

            </div>
            <div className="gallery__slider">
             
                <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper">







                    
                    {
                        images.map((item)=>{
                            return(
                                <SwiperSlide>
                       <div className="gallery__imagecontainer">
                       <img src={`./${item.src}`}/>
                       <p className="gallery__slidercard__text">
                       {item.name}
                       </p>
                       <p className="gallery__slidercard__text2">
                       {item.sub}
                       </p>
                       </div>
                    </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                
                </div>
              {/*   <div className="gallery__bottom">
                <p className="gallery__slidercard__text2">
                 about
                 </p>
                 <p className="gallery__slidercard__text2">
                 home
                 </p>
                 <p className="gallery__slidercard__text2">
                 contact
                 </p>
                </div> */}

        </div>
    )
    }