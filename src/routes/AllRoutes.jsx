import {Routes, Route} from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index"

export const AllRoutes = () => {
  return (
    <div className=" bg-neutral-primary-soft dark:bg-neutral-primary-dark min-h-screen">
        <Routes>
            <Route path="/" element={<MovieList apiPath='movie/now_playing'/>} title="Home"></Route>
            <Route path="/movie/:id" element={<MovieDetails/>}></Route>
            <Route path="/movies/popular" element={<MovieList apiPath='movie/popular'/>} title="Popular Movies"></Route>
            <Route path="/movies/top" element={<MovieList apiPath='movie/top_rated'/>} title="Top Rated Movies"></Route>
            <Route path="/movies/upcoming" element={<MovieList apiPath='movie/upcoming'/>} title="Upcoming Movies"></Route>
            <Route path="/search" element={<Search apiPath="search/movie"/>} title="Search Movies"></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}
