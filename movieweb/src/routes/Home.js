import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});
  const getMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=a6f92cf509577277b3ac2f1d78bf46ed");
    // const json = await res.json();
    // setMovies(json.data.movies);
    setMovies(res.data);
    console.log(res);
    setLoading(false);
  };
  useEffect(() => {
    // getMovies();
    axios.get("https://api.themoviedb.org/3/movie/550?api_key=a6f92cf509577277b3ac2f1d78bf46ed").then((res) => {
      setMovies(res.data);
      console.log(movies);
    });
  }, []);

  return (
    <div>{loading ? <h3>Loading..</h3> : <div>{/* <Movie idNum={movies.id} coverImg={movies.medium_cover_image} title={movies.title} summary={movies.summary} genres={movies.genres} /> */}</div>}</div>
  );
}

export default Home;

/* 
{
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  }
*/
