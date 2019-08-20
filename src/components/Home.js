import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import Filter from "./Filter";
import MovieList from "./MovieList";
import axios from "axios";

const HomeContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #0C0C0C; 
  width: 100%;
  color: #F2F2F2;
  font-size: 1em;
`;

const MainNav = styled.nav`
  width: 100%;
  background: ${props => props.selectedMovie ? "rgba(0,0,0,0.0)": "rgba(0,0,0,0.75)" };
  position: relative;
  display: flex;
  align-items: center;
  max-height: 70px;
  z-index: 4;
  transition: 0.5s ease;
`;


const apiKey = "76c0508c4e3b67db90f6b3f0eb61ccde";

const Home = () => {
  async function getPopularMovies() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);
      setMovies(response.data.results);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  //like a DidMount lifecycle
  useEffect(() => {
    getPopularMovies();
  }, [])

  const [selected, setSelected] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [rating, setRating] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  console.log("la busq", search);
  console.log("el filter", rating);
  console.log("selected: ", selected)
  return (
    <HomeContainer>
      <MainNav selectedMovie={selected}>
        <Search search={search} setSearch={setSearch} />
        <Filter rating={rating} setRating={setRating} />
      </MainNav>
      {selected &&
        <MovieDetail setSelected={setSelected} movie={selected} />
      }
      <MovieList selected={selected} setSelected={setSelected} movies={movies} />
    </HomeContainer>
  );
}

export default Home;
