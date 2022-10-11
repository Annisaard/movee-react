// import React, { Component } from "react";
// import axios from "axios";
// import Loading from "../component/Loading";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";
import { useFetchGet } from "../utils/hooks/useFetchGet";
import { HiStar } from "react-icons/hi";
const Detail = (props) => {
  const { id_movie } = props.params;
  const [data] = useFetchGet(
    `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDI_KEY}`
  );

  useTitle(data.title);

  return (
    <div className="w-full h-full">
      <div className="pt-20 px-7 lg:px-20 py-3 mb-[5rem] ">
        <div
          className="absolute z-0 w-[50%] h-[50%] top-[130%]
          bg-gradient-blueViolet rounded-full"
        />
        <div className="w-full h-[500px]">
          {/* <div className="absolute w-[70rem] h-[500px] bg-gradient-to-t from-abu-600 z-[2] rounded-3xl " /> */}
          <img
            className="h-[500px] w-full object-cover rounded-[40px] "
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt={props.title}
          />
          <div className="h-[144px] w-[440px] bg-card-detail backdrop-blur-md rounded-3xl  relative z-[5] top-[-15%] left-[4%] p-7">
            <p className="text-sm font-light text-abu-200 mb-2">Movie</p>
            <h2 className="text-3xl font-semibold text-abu-50 ">
              {data?.title}
            </h2>
          </div>
        </div>
        <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5 pt-[200px]">
          <img
            className="h-[520px] w-[450px] object-cover z-[10] rounded-3xl"
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt={props.title}
          />

          <div className="z-[10]  ">
            <h1 className="text-2xl font-bold leading-8 text-abu-600 dark:text-abu-100 mb-3">
              {data?.tagline}
            </h1>
            <p className=" text-base font-light leading-7 text-abu-500 dark:text-abu-300 mb-5">
              {data?.overview}
            </p>
            <button className="bg-abu-600 w-[65px] h-[25px] rounded text-yellow mb-5 flex">
              <HiStar size={25} className="text-yellow space-x-2" />
              {data?.vote_average}
            </button>
            <p className="text-base text-abu-600 dark:text-abu-100 mb-2 ">
              Type
            </p>
            <h4 className="text-abu-500 dark:text-abu-300 text-lg font-normal mb-5">
              Movie
            </h4>
            <p className="text-base text-abu-600 dark:text-abu-100 mb-2 ">
              Release Date:
            </p>
            <h4 className="text-abu-500 dark:text-abu-300 text-lg font-normal mb-5">
              {data?.release_date}
            </h4>
            <p className="text-base text-abu-600 dark:text-abu-100 mb-2">
              Run time
            </p>
            <h4 className="text-abu-500 dark:text-abu-300 text-lg font-normal mb-5">
              181 min
            </h4>
            <p className="text-base text-abu-600 dark:text-abu-100 mb-2">
              Genres
            </p>
            <h4 className="text-abu-500 dark:text-abu-300 text-lg font-normal">
              Adventure, Science Fiction, Action
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(Detail);
