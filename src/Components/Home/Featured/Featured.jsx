import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureCars from "./FeatureCars";


const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "/src/assets/img/car1.png",
      name: "Cadillac Escalade",
      price: "22,449",
    },
    {
      id: 1,
      img: "/src/assets/img/car2.png",
      name: "BMW 3 Series",
      price: "54,899",
    },
    {
      id: 2,
      img: "/src/assets/img/car3.png",
      name: "Mercedes",
      price: "75,890",
    },
    {
      id: 3,
      img: "/src/assets/img/car4.png",
      name: "BMW 7 Series",
      price: "55,789",
    },
    {
      id: 4,
      img: "/src/assets/img/car5.png",
      name: "Mercedes-Benz",
      price: "95,776",
    },
    {
        id: 5,
        img: "/src/assets/img/car6.png",
        name: "Range Rover",
        price: "88,450",
      },
  ];

  const settings = {
    dots: false,
    Infinite: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 3,
          Infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 2,
          InitialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
          InitialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container mt-14">
      <h1 className="font-bold text-4xl text-center">
        Featured <span className="text-primary">Cars</span>
      </h1>

      <p className="text-center p-3">
        venenatis gravida tortor at imperdiet. Pellentesque auctor dolor in quam
        ultricies tristique. Vestibulum mollis turpis ex, eget tristique ex
        ultricies ac. Proin et semper odio. Suspendisse semper odio tincidunt
        ultricies gravida. Suspe
      </p>

      <div className="mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCars 
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
            />
           )) 
           }
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
