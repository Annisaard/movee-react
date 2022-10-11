import React from "react";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";
import { useSelector, useDispatch } from "react-redux";
import Card from "component/Card";
import { setFavorites } from "utils/redux/reducer/reducer";
// import Swal from "sweetalert2";

const Favorite = (props) => {
  const favorites = useSelector((state) => state.data.favorites);
  const dispatch = useDispatch();
  useTitle("Favorite Movies");

  function handleRemoveFav(movie) {
    let deleteMovie = JSON.parse(localStorage.getItem("favMovies"));
    deleteMovie = deleteMovie.filter((e) => e.id !== movie.id);
    alert("yakin di hapus?");
    dispatch(setFavorites([movie]));
    localStorage.setItem("favMovies", JSON.stringify(deleteMovie));
    dispatch(setFavorites(deleteMovie));
    localStorage.removeItem(deleteMovie);

    // Swal.fire({
    //   title: "yakin di hpus?",
    //   type: "danger",
    //   showCancelButton: true,
    //   confirmButtonClass: "btn-danger",
    //   confirmButtonText: "Yes, delete it!",
    //   closeOnConfirm: false,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     dispatch(setFavorites([movie]));
    //     localStorage.setItem("favMovies", JSON.stringify(deleteMovie));
    //     dispatch(setFavorites(deleteMovie));
    //     localStorage.removeItem(deleteMovie);
    //     Swal.fire("you file has been deleted!");
    //   }
    // });
  }

  return (
    <div className="px-7 lg:px-20 w-full h-screen mt-[8rem] ">
      {/* <h1 className="font-bold text-abu-200 text-6xl mb-[5rem]">
        List Favorites
      </h1> */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-15 gap-y-10  ">
        <div
          className="absolute z-0 w-[50%] h-[50%] top-[50%]
          bg-gradient-blueViolet rounded-full"
        />
        {/* <div
          className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[80%]
          bg-gradient-greenPink rounded-full"
        /> */}

        {favorites.map((data) => (
          <Card
            key={data.id}
            image={data.poster_path}
            title={data.title}
            date={data.release_date}
            onNavigate={() => props.navigate(`/detail/${data.id}`)}
            addFavorite={() => handleRemoveFav(data)}
          />
        ))}
      </div>
    </div>
  );
};

export default WithRouter(Favorite);
