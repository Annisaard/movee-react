/* eslint-disable react-hooks/exhaustive-deps */
// import { Container } from "postcss";
// import { data } from "autoprefixer";
import { HiStar } from "react-icons/hi";
import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "utils/Requests";
import { Link } from "react-router-dom";

// import Loading from "./Loading";

const Hero = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [genre, setGenre] = useState([]);

  const moviesRandom = movie[Math.floor(Math.random() * movie.length)];
  useEffect(() => {
    fetchMovie();
    // fetchGenre();
  }, []);

  // function fetchGenre() {
  //   axios
  //     .get(requests.genreMovie)
  //     .then((res) => {
  //       setGenre(res.data.genres);
  //     })
  //     .catch((err) => {
  //       alert(err.toString());
  //     });
  // }
  // console.log(genre);

  function fetchMovie() {
    setLoading(true);
    axios
      .get(requests.requestUpcoming)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const overviewStr = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <>
      <div className="w-full h-[560px] ">
        <div className="w-full h-full md:flex ">
          <div
            className="absolute z-0 w-[30%] h-[30%] right-[5%] bottom-[5%]
          bg-gradient-greenPink"
          />
          <div className="absolute w-full h-[460px] md:w-full md:h-[560px] bg-gradient-to-r from-abu-600/90 z-[5]" />

          <img
            className="w-full h-[460px]  md:h-full md:w-full object-cover z-[2] "
            src={`https://image.tmdb.org/t/p/original${moviesRandom?.backdrop_path}`}
            alt={moviesRandom?.title}
          />

          <div className="px-7 lg:px-20 absolute w-full top-[20%] md:top-[25%] lg:top-[40%] z-[5] text-abu-100">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-3 text-abu-50">
              {moviesRandom?.title}
            </h1>
            <div className="flex ">
              <HiStar size={25} className="text-yellow space-x-2" />
              <div className="pl-1">
                <span className="font-extralight ">
                  {moviesRandom?.vote_average}
                </span>
                <span className="ml-4 font-extralight ">2h 30m</span>
                <span className="ml-4 font-extralight">
                  {/* {moviesRandom.map((genre) => genre?.name)} */}
                </span>
                <span className="ml-4 font-extralight">
                  {moviesRandom?.release_date}
                </span>
              </div>
            </div>

            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[55%] mt-3 mb-3 font-extralight text-sm md:text-base">
              {overviewStr(moviesRandom?.overview, 175)}
            </p>
            <div className="my-5">
              <Link to={{ pathname: `/detail/${moviesRandom?.id}` }}>
                <button className=" rounded bg-secondary-500 text-abu-50 py-2 px-5 font-normal">
                  Play
                </button>
              </Link>
              <button className=" rounded bg-abu-300 text-abu-50 py-2 px-5 ml-4 font-normal">
                Watch later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
