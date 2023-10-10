"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function MultipleCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      className="mb-10 pb-24 md:w-full"
      responsive={responsive}
      autoPlay={true}
      infinite={"true"}
      showDots={true}
    >
      <div className="text-white">
        <Image
          className="md:w-[200px] w-32"
          src={"/assets/images/lionair2.jpg"}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="text-white">
        <Image
          className="md:w-[200px] w-32"
          src={"/assets/images/kommpas.png"}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="text-white">
        <Image
          className="md:w-[200px] w-32"
          src={"/assets/images/kelase.png"}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="text-white">
        <Image
          className="md:w-[200px] w-32"
          src={"/assets/images/lotte.jpg"}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div className="text-white">
        <Image
          className="md:w-[200px] w-32"
          src={"/assets/images/ikip.jpg"}
          width={200}
          height={200}
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default MultipleCarousel;
