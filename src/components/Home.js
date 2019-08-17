import React, { useState } from 'react';
import styled from "styled-components";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import Filter from "./Filter";
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

const MainNav = styled.nav`
  width: 100%;
  background: rgba(255,255,255,0.65);
  position: relative;
  display: flex;
  align-items: center;
  max-height: 70px;
  &:after {
    content: "";
    background: -moz-linear-gradient(top,  rgba(255,255,255,0.65) 0%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,0.65) 0%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,0.65) 0%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6ffffff', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    display: flex;
    width: 100%;
    height: 20px;
    left: 0px;
    position: absolute;
    bottom: -20px;
  }
`;

const Home = () => {
  const [selected, setSelected] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [rating, setRating] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  console.log("la busq", search);
  console.log("el filter", rating);
  return (
    <HomeContainer>
      <MainNav>
        <Search search={search} setSearch={setSearch} />
        <Filter rating={rating} setRating={setRating} />
      </MainNav>
      <MovieDetail movie={selected} />
      <MovieList movies={movies} />
    </HomeContainer>
  );
}

export default Home;
