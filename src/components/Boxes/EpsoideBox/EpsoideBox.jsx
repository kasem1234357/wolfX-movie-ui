import { useNavigate } from "react-router-dom";
import { Download, Rating } from "../../icons/svgIcon";
import { useState } from "react";
import axios from "axios";
import Spiner from "../../custom/Spiner";
function MoviesBox({
  boxStyle,
  data,
  imageUrl,
  tvId,
  season,
  genres,
  originalLanguage,
  name,
}) {
  const goToWatchEpsoide = ()=>{
    if (
      originalLanguage === "ja" &&
      genres.some((genre) => genre.name === "Animation")
    ) {
      navigate(
        `/watch?type=Anime&epsoide=${data.episode_number}&season=${season}&id=${tvId}&server=4&name=${name}`
      );
    } else {
      navigate(
        `/watch?type=tv&epsoide=${data.episode_number}&season=${season}&id=${tvId}&server=1`
      );
    }
  }
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [dt,setDt]=useState([]);
  const generateDownload = ()=>{
      setLoading(true)
        axios.post('https://download-url-generator.onrender.com/get-links-tv',{
        name:name,
        epsoide:data.episode_number,
        season,
       }).then(res =>{
        setDt(res.data)
        console.log(res.data);
        setLoading(false)
        navigate('/download',{state:{   name: name,dt:res.data }})
       }).catch(err =>{
        console.log(err)
        setLoading(false);
       })

  }

  // const target =()=>{
  //   window.open(`https://autoembed.to/tv/tmdb/${tvId}-${season}-${data.episode_number}`)
  //   }
  return (
    <div
      className={`flex-items bg-main movie-box ${boxStyle} `}
      style={{ margin: "6px", minHeight: "250px" }}
    >
      <div className="content-box flex f-column" style={{ minHeight: "250px" }}>
        <div className="rating flex">
          <div className="rating-box flex center">
            <span>
              {" "}
              <Rating color={"#ffee03"} />
            </span>
            <span>{parseInt(data.vote_average).toFixed(1)}</span>
          </div>
        </div>
        <div className="controll flex  flex-between text-white">
          <div className="info flow ">
            <h2>Epsoide {data.episode_number}</h2>
            <div
              onClick={goToWatchEpsoide}
              className="watch   text-white"
            >
              watch Now
            </div>
          </div>
          <div className="flex center">
            <span className="download-link-btn">
             

            {loading?<>
          <span className="download-info-popup bg-gray">
          <p>download link will take time to generate between 10s to 30s</p>
        </span>
          <Spiner/>
        </>:<span className="add flex center">
              <Download onClick={()=>{
                 generateDownload()
              }} width={"15px"} />
            </span>}
            </span>
            
          </div>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${
          data.still_path || imageUrl
        }`}
        alt=""
        srcSet=""
      />
    </div>
  );
}

export default MoviesBox;
/*
<span className="download-link-btn">
        
        {name === 'movie'?loadingDownload?<>
          <span className="download-info-popup bg-gray">
          <p>download link will take time to generate between 10s to 30s</p>
        </span>
          <Spiner/>
        </>:
        <span className="add flex center" style={{ marginRight: "7px" }} >
        <Link to="/download" state={{ type: type, year: year, name: nameDW,dt:dt }}>
          <Download width={"15px"} />
        </Link>
      </span>:''}
        </span>*/