import React from "react";
import "../../styles/embed.css";
function Embeded({ data,id }) {
  console.log(id);
  return (
    <div className="embedBox">
      <iframe
        width={100}
        height={100}
        title="youtube"
        style={{ border: "none" }}
        SameSite="None"
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Embeded;
