import React from "react";

const Cards = ({ place }) => {
//   console.log(place);
    const { city, country, description, image, name } = place;
    console.log(name);
  return (
    <div className="w-[18vw] h-[40vh] relative">
          <img className="h-full w-full border-amber-600 border-4 rounded-lg" src={image} alt="" />
          <h3 className=" text-white absolute bottom-3 left-3 text-lg font-bold">{name}</h3>
    </div>
  );
};

export default Cards;
