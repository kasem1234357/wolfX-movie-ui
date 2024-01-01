import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Rating} from "../../icons/svgIcon";
import ShowBox from "../showBox/ShowBox";

function MoviesBox({ boxStyle, data, type }, props) {
  const [checkData, setCheck] = useState(false);
  const movies = useSelector((state) => state.movies.data);

  useEffect(() => {
    setCheck(movies?.some((mv) => mv.id === data.id));
  }, [movies, data]);
  return (
    <div
      {...props}
      className={`flex-items bg-main movie-box ${boxStyle} `}
      style={{ margin: "6px" }}
    >
      <div className="content-box flex f-column">
        <div className="rating flex">
          <div className="rating-box flex center">
            <span>
              {" "}
              <Rating color={"#ffee03"} />
            </span>
            <span>{parseInt(data.vote_average).toFixed(1)}</span>
          </div>
        </div>
        <ShowBox  boxStyle={boxStyle} checkData={checkData} data={data} type={type}/>
      </div>
      <img
        fetchpriority="high"
        src={`https://image.tmdb.org/t/p/w342/${
          data.backdrop_path || data.poster_path
        }`}
        alt=""
        srcSet=""
        loading="lazy"
      />
    </div>
  );
}

export default MoviesBox;
