import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ place }) => {
  //   console.log(place);
  const { image, name, id } = place;
  // console.log(name);
  
  return (
    <Link to={`/${id}`}>
      <div className="w-[20vw] h-[40vh] relative z-0">
      <img
        className="h-full w-full border-amber-600 border-4 rounded-lg"
        src={image}
        alt=""
      />
      <h3 className=" text-white absolute bottom-3 left-3 text-lg font-bold">
        {name}
      </h3>
    </div>
    </Link>
  );
};

export default Cards;
