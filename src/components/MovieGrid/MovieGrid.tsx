import type { Movie } from "../../types/movies";
import css from "./MovieGrid.module.css";

interface MovieGrigProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
}
export default function MovieGrid({ onSelect, movies }: MovieGrigProps) {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => {
        const { id, title, poster_path } = movie;
        return (
          <li key={id}>
            <div
              className={css.card}
              onClick={() => {
                onSelect(movie);
              }}
            >
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                loading="lazy"
              />
              <h2 className={css.title}>{title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
