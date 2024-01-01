import React from "react";
import "../../styles/embed.css";
function Embeded({ id, name }) {
  console.log(id);
  return (
    <div className="embedBox">
      <iframe
        width={100}
        height={100}
        title="youtube"
        style={{ border: "none" }}
        SameSite="None"
        src={
          name === "movie"
            ? `https://autoembed.to/${name}/imdb/${id}?trailer=1`
            : `https://autoembed.to/${name}/tmdb/${id}-1-1?trailer=1`
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Embeded;
