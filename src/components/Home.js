import React, { useState } from 'react';
import styled from "styled-components";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import MovieList from "./MovieList";

const HomeContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #0C0C0C; 
  width: 100%;
  color: #F2F2F2;
  font-size: 1em;
`;


function Home() {
  const [selected, setSelected] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [rating, setRating] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  console.log("la busq", search)
  return (
    <HomeContainer>
      <Search search={search} setSearch={setSearch} />
      <MovieDetail movie={selected} />
      <MovieList movies={movies} />
    </HomeContainer>
  );
}

export default Home;
