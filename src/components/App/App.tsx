import toast from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { type Movie } from "../../types/movies";
import { fetchMovies } from "../../services/movieService";

// import css from "./App.module.css";
export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchClear, setSearchClear] = useState("");
  const handleSearch = async (query: string) => {
    const response = await fetchMovies(query);

    setMovies(response.results);
    if (movies.length === 0) {
      toast.error("No movies found for your request.");
    }

    setSearchClear("");
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
