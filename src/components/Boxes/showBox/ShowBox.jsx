import React from 'react'
import { Link } from "react-router-dom";
import { Rating, Success } from "../../icons/svgIcon";

function ShowBox({boxStyle,data,checkData,type}) {
  return (
    <>
     <div className="controll flex  flex-between text-white">
          <div className="info flow ">
            <h2>{data.title ? data.title : data.name}</h2>
            <h5>
              {data.release_date ? data.release_date : data.first_air_date}
            </h5>
            {boxStyle !== "large-movie" ? (
              <Link
                to={`/MoviePage?id=${data.id}&name=${
                  data.media_type || type ? data.media_type || type : "movie"
                }`}
                state={{
                  typeId: data.id,
                  name:
                    data.media_type || type ? data.media_type || type : "movie",
                }}
                className="watch   text-white"
              >
                watch Now
              </Link>
            ) : (
              <div
                className="imdb-rating-box"
                style={{ fontSize: "12px", marginTop: "1em" }}
              >
                <span
                  className="imdb"
                  style={{ fontWeight: "bold", padding: "4px" }}
                >
                  IMDB
                </span>
                <span>{data.vote_average} rating</span>
              </div>
            )}
          </div>
          <div className="flex center">
            {boxStyle === "large-movie" ? (
              <Link
                to={`/MoviePage?id=${data.id}&name=${
                  data.media_type || type ? data.media_type || type : "movie"
                }`}
                state={{
                  typeId: data.id,
                  name:
                    data.media_type || type ? data.media_type || type : "movie",
                }}
                className="watch text-white "
              >
                watch{" "}
              </Link>
            ) : null}
            {!checkData ? null : (
              <span
                className={`add flex center ${!checkData ? "" : "checked"}`}
              >
                {!checkData ? "+" : <Success color="#fff" width="20px" />}
              </span>
            )}
          </div>
        </div>
  </>
  )
}

export default ShowBox
