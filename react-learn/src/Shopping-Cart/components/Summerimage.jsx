import React from "react";
import { Summercarts } from "./Summercarts.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Summerimage() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Summerimages = [
    { image: "summer1.5.webp",image1:"summer2.5.webp", title: "CLORKS", description: "Down Jacket Winter.", money: '$37' },
    { image: 'summer1.1.webp',image1:"summer2.1.webp", title: 'CALVIN KLEIN', description: 'Loose Padded Jacket', money: '$32' },
    { image: 'summer1.2.webp',image1:"summer2.2.webp", title: 'CANVERSE', description: 'Satin Padded Jacket', money: '$46' },
    { image: 'summer1.3.webp',image1:"summer2.3.webp", title: 'CALVIN KLEIN', description: 'Padded Short Jacket', money: '$42' },
    { image: 'summer1.4.webp',image1:"summer2.4.webp", title: 'CANVERSE', description: "Men's Padded Jacket", money: '$48' },
  ];

  return (
    <div className="xl:px-40 lg:px-32 md:px-20 p-5 sm:px-10 border-hidden">
      <Carousel responsive={responsive} removeArrowOnDeviceType={[ "mobile"]} className="z-30">
        {Summerimages.map((summer, index) => (
          <Summercarts key={index} image1={summer.image1} image={summer.image} title={summer.title} description={summer.description} money={summer.money} />
        ))}
      </Carousel>
    </div>
  );
}
