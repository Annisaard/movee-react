// import { data } from "autoprefixer";
// import { useState } from "react";
import { BsBookmark } from "react-icons/bs";

function Card(props) {
  return (
    <div className="flex flex-col dark:bg-card h-[16rem] w-[10rem] md:h-[18rem] md:w-[12rem] lg:h-[410px] lg:w-[250px] rounded-lg z-10 backdrop-blur-3xl shadow-xl">
      <div
        className="flex justify-center items-center px-2 pt-2 cursor-pointer "
        onClick={props.onNavigate}
      >
        <img
          className="h-[170px]  object-cover md:h-[12rem] lg:h-[320px] w-full rounded-lg img-card"
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt={props.title}
        />
      </div>
      <div className="flex justify-between items-center px-4 mt-3  dark:text-abu-100 ">
        <div>
          <h5 className="mb-2 text-xs md:text-sm font-semibold cursor-pointer">
            {props.title}
          </h5>
          <p className="font-light text-[12px] md:text-xs">{props.date}</p>
        </div>

        <BsBookmark
          className="cursor-pointer "
          onClick={props.addFavorite}
        ></BsBookmark>
      </div>
    </div>
  );
}

export default Card;
