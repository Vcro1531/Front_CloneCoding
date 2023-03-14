import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ idNum, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="Poster" />
      <h2>
        <Link to={`/movie/${idNum}`}>{title}</Link>
      </h2>

      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  idNum: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
