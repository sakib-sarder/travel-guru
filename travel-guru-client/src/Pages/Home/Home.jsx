import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header";
import "./Home.css";
import Cards from "./Cards";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
      };

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/place")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
    
  return (
    <div>
          <Header></Header>
          <div className="text-white container mx-auto flex h-[calc(100vh-50px)] items-center gap-3">
              <div className="w-1/4">
                  <h1 className="text-4xl">Cox's Bazar</h1>
              </div>
              <div className="w-3/4">
                  <Slider {...settings}>
                  {
                      places.map(place=><Cards key={place.id} place={place}></Cards>)
                  }
                  </Slider>
              </div>
          </div>
    </div>
  );
};

export default Home;
