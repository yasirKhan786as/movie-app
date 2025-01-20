import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Single() {
  const yellowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="30"
      viewBox="0 0 10 50"
    >
      <rect width="10" height="50" fill="yellow" />
    </svg>
  );

  const param = useParams();
  const [Data, setData] = useState("");
  console.log(param);
  async function getSingleMovie() {
    const url = await axios.get(
      `http://www.omdbapi.com/?apikey=367f41be&i=${param?.id}`
    );
    setData(url?.data);
  }
  useEffect(() => {
    getSingleMovie();
  }, []);

  const ratingSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="90"
      height="100"
    >
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="#d4af37"
      />

      <polygon
        points="12,3.5 14.5,8 20.5,9 16.5,13.5 17.5,19 12,16 6.5,19 7.5,13.5 3.5,9 9.5,8"
        fill="#f9d71c"
      />

      <text
        x="12"
        y="14"
        text-anchor="middle"
        fill="black"
        font-size="3.5"
        font-family="Arial"
      >
        {Data?.imdbRating}
      </text>
    </svg>
  );

  return (
    <div className="single-box">
      <div className="single-img-box">
        <img src={Data.Poster} alt="" />
      </div>
      <div className="single-box-description">
        <h2>
          {yellowSvg}
          Movie Name
        </h2>
        <h4>{Data?.Title}</h4>

        <h2> {yellowSvg}Released on</h2>
        <h4>{Data?.Released}</h4>

        <h2>{yellowSvg}Ratings {ratingSvg}</h2>
    

        <h2>{yellowSvg}Box Office Collection</h2>
        <h4>{Data?.BoxOffice}</h4>

        <h2>{yellowSvg}Actors</h2>
        <h4>{Data?.Actors}</h4>


        <h2>{yellowSvg}Awards</h2>
        <h4>{Data?.Awards}</h4>

        <h2>{yellowSvg}Runtime</h2>
        <h4>{Data?.Runtime}</h4>
      </div>
    </div>
  );
}

export default Single;
