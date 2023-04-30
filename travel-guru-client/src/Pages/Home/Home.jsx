import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header";
import "./Home.css";
import Cards from "./Cards";
import "swiper/css";
import { Controller, Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import CardDetails from "./CardDetails";

// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,

  //   };

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/place")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="text-white container mx-auto flex h-[calc(100vh-50px)] items-center gap-2">
        <div className="w-1/5">
          <Swiper
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {places.map((place) => (
              <SwiperSlide key={place.id}>
                <CardDetails place={place}></CardDetails>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-4/5">
          {/* <Slider {...settings}> */}
          <Swiper
            modules={[Controller, Pagination, Navigation]}
            onSwiper={setSecondSwiper}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            controller={{ control: firstSwiper }}
          >
            {places.map((place) => (
              <SwiperSlide key={place.id}>
                <Cards  place={place}></Cards>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
