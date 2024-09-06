import React, { useEffect, useState } from "react";
import { Download, Success, Warning } from "./icons/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { ToggleMovies } from "../utils/toggleMovies";
import { useNavigate } from "react-router-dom";
import WarningPopup from "./Boxes/WarningBox/WarningPopup";
import Spiner from "./custom/Spiner";

import { useTransition } from "react";

function Details({ data3, target, name, showId }) {
  const [checkData, setCheck] = useState(false);
  const [isPanding ,startTransiction] = useTransition()
  const [loading, setLoading] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const nvigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const status = useSelector((state) => state.users.status);
  const [activeWarning, setActiveWarning] = useState(false);
  const movies = useSelector((state) => state.movies.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const date = name === "movie"
  ? data3?.all.release_date:data3?.all.first_air_date
  const year =date.split('-')[0]
   
  const month = date.split('-')[1]
  const nameDW = data3.all.name || data3.all.title;
  const type = name === "movie" ? "Movie" : "Series";
  useEffect(() => {
    if (name === "movie") {
      setCheck(movies?.some((mv) => mv.imdb_id === data3.all.imdb_id));
    } else {
      setCheck(movies?.some((mv) => mv.id === data3.all.id));
    }
  }, [movies, data3, name]);
  const getDownloadLink = () => {
    //[name,nameDW,year,month,checkRange,type]
    startTransiction(()=>{
      if (name === "movie") {
        nvigate(`/download?name=${nameDW}&year=${year}&month=${month}&type=${type}`)
        //setLoadingDownload(true);
        // getMainDownloadLink(
        //   { name: nameDW, year, month, range: checkRange(nameDW) },
        //   setDt,
        //   setLoadingDownload,
        //   navigate,
        //   { type: type, year: year, name: nameDW, dt: dt },
        // );
      }
    })
    
  };
  return (
    <div>
      {activeWarning ? (
        <WarningPopup
          setActiveWarning={setActiveWarning}
          userId={user?._id}
          type={name}
          date={date}
          showName={data3.all.title ? data3.all.title : data3.all.name}
          showId={showId}
        />
      ) : null}
      <p style={{ lineHeight: "1.7" }}>{data3.all.overview}</p>
      <div className="info-box flow " style={{ marginTop: "20px" }}>
        <div className="genre  ">
          <span className="text-gray item-space">Genre:</span>
          <span>
            {data3.all.genres.map((genre) => {
              return ` ${genre.name}, `;
            })}
          </span>
        </div>
        <div className="lang">
          <span className="text-gray item-space">lang:</span>
          <span>{data3.all.original_language}</span>
        </div>
        <div className="lang flex " style={{ alignItems: "center" }}>
          <span className="text-gray item-space">companies:</span>
          <span className="flex flex-between fw-row">
            {data3.all.production_companies.map((company) => {
              return (
                <div
                  className="companyBox flex flex-between padding"
                  style={{ gap: "10px", padding: "0.5rem 1rem" }}
                >
                  <div
                    className="imgBoxLogo"
                    style={{ boxShadow: "0px 0px 16px rgba(0,0,0,0.6)" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${company?.logo_path} `}
                      alt=""
                      srcset={`https://image.tmdb.org/t/p/original${company?.logo_path} `}
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </span>
        </div>
      </div>
      <div className="flex " style={{ alignItems: "center" }}>
        {name === "tv" ? null : (
          <span
            className="watch "
            onClick={() => {
              nvigate(`/watch?id=${data3.all.imdb_id}&server=2`);
              // target(data3.all.imdb_id)
            }}
          >
            watch Now
          </span>
        )}

        <span className="download-link-btn" onClick={getDownloadLink}>
          {name === "movie" ? (
            loadingDownload ? (
              <>
                <span className="download-info-popup bg-gray">
                  <p>
                    download link will take time to generate between 10s to 30s
                  </p>
                </span>
                <Spiner />
              </>
            ) : (
              <span className="add flex center" style={{ marginRight: "7px" }}>
                <span>
                  <Download width={"15px"} />
                </span>
              </span>
            )
          ) : (
            ""
          )}
        </span>

        {loading ? (
          <Spiner type="X" />
        ) : (
          <span
            onClick={() => {
              user
                ? ToggleMovies({
                    dispatch,
                    user,
                    data: data3.all,
                    setCheck,
                    name,
                    movies,
                    setLoading,
                  })
                : navigate("/account");
            }}
            className={`add flex center ${!checkData ? "" : "checked"}`}
          >
            {!checkData ? "+" : <Success color="#fff" width="20px" />}
          </span>
        )}

        <span className="add flex center" style={{ margin: "7px" }}>
          <Warning
            width={"15px"}
            onClick={() => {
              setActiveWarning(true);
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Details;


