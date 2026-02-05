import axios from "axios";
import { type Movie } from "../types/movies";

interface httpMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

const token = import.meta.env.VITE_TMDB_TOKEN;
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMovies = async (
  topic: string,
  page: number,
): Promise<httpMovieResponse> => {
  const response = await api.get<httpMovieResponse>("/search/movie", {
    params: {
      query: topic,
      page,
    },
  });

  return response.data;
};
