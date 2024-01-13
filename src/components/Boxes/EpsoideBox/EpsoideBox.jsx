import { useNavigate } from "react-router-dom";
import { Download, Rating } from "../../icons/svgIcon";
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
        navigate('/download',{state:{ type: type, year: year, name: name,dt:res.data }})
       }).catch(err =>{
        console.log(err)
        setLoading(false);
       })

  }
  const navigate = useNavigate();
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
            <span className="add flex center">
              <Download onClick={()=>{
                 generateDownload()
              }} width={"15px"} />
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
