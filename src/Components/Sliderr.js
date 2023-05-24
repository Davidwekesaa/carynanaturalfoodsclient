import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import delivery from "../assets/delivery.png";
import BannerName from "./BannerName";
import { useStateValue } from "../store/StateProvider";

const slideImages = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/caryna-379b6.appspot.com/o/WhatsApp_Image_2023-04-13_at_8.28.34_AM-removebg-preview%20(1)scale(1kg).png?alt=media&token=2ae96bc9-7b89-4fca-8682-f801cc4b7d66",
      caption: "Slide 1",
      message:
        "Welcome to Caryna Natural Foods' virtual shop.For enquiries and support, please use our contacts below .",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/caryna-379b6.appspot.com/o/WhatsApp_Image_2023-04-13_at_8.28.33_AM-removebg-preview%20(1)scale(300).png?alt=media&token=d046dbda-720b-4eea-8b3e-2585b87929f1",
      caption: "Slide 2",
      message:
        "We offer you pure honey, harvested from Baringo's expansive forests, naturally processed and packed, with no additives used.",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/caryna-379b6.appspot.com/o/WhatsApp_Image_2023-04-13_at_8.28.34_AM__1_-removebg-preview%20(1)scale(500).png?alt=media&token=0fb26f40-4dad-466e-8b97-195098ada2bd",
      caption: "Slide 3",
      message:
        "Enjoy this thick and smooth product,100% full of natural taste of sweetness.",
    },
  ];

  function Sliderr(){
    const [
      { user },
      dispatch,
    ] = useStateValue();
   return <>
    <div className="headBanner">
      <Slide arrows={false}>
              {slideImages.map((slideImage, index) => (
                <div className="Banner" key={index}>
                  <img
                    src={slideImage.url}
                    alt="delivery"
                    className="deliver"
                  />
                  <div className="bnn">
                    <BannerName
                      name={user === null ? "" : user.userName}
                      bannername={slideImage.message}
                    />
                  </div>
                  <div>
          <img src={delivery} alt="delivery" className="delivery" />
          </div>
                </div>
              ))}
            </Slide>
    </div>
         
    </>
  }

export default Sliderr;
