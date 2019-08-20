import React, { useEffect } from 'react';
import styled from "styled-components";
import * as R from "ramda";
import  {Star}  from '@material-ui/icons';

const MovieListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #0C0C0C; 
  width: 100%;
  position: fixed;
  height: ${props => props.isSelected ? "50vh" : "100vh"};
  overflow-y: scroll;
  z-index: 3;
  bottom: 0;
  transition: 0.5s ease;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
  grid-gap: 20px;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  border-radius: 1em;
  &:hover {
    filter: brightness(105%) saturate(122%) contrast(115%);
  }
`;

const MovieImage = styled.figure`
  background: url(${props => props.src}) no-repeat 0% 0%;
  background-size: cover;
  height: 250px;
  width: 100%;
  transition: .5s ease-out;
  ${Item}:hover & {
    background-position: 0 25% !important;
  }
`;

const MovieTitle = styled.h2`
  font-size: 1.25em;
  font-weight: bold;
  padding-right: 10px;
`;

const MovieStars = styled.div`
  min-width: 90px;
  display: flex;
  justify-content: flex-end;
  svg {
    width: 0.75em;
  }
`;

const MovieData = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: rgba(0,0,0,0.8);
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  min-height: 80px;
  transform: translateY(20px);
  transition: 0.3s ease;
  ${Item}:hover & {
    transform: translateY(0px);
  }
   &:after {
    content: "";
    background: -moz-linear-gradient(top,  rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.0) 100%);
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0.8) 10%,rgba(0,0,0,0.0) 100%); 
    background: linear-gradient(to bottom,  rgba(0,0,0,0.8) 10%,rgba(0,0,0,0.0) 100%);
    display: flex;
    width: 100%;
    height: 20px;
    left: 0px;
    position: absolute;
    top: -20px;
    transform: rotate(180deg);
  }
`;

const MovieList = ({movies, setSelected, selected}) => {

  const Vote = vote => {
    return Math.floor(vote / 2);
  }

  return (
    <MovieListContainer isSelected={selected}>
      <List>
        { movies.length > 0 ? movies.map(movie => {
          return (
            <Item key={movie.title} onClick={() => setSelected(movie)}>
              <MovieImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} />
              <MovieData>
                <MovieTitle>
                  {movie.title}
                </MovieTitle>
                <MovieStars>
                  {R.repeat(<Star />, Vote(movie.vote_average))}
                </MovieStars>
              </MovieData>
            </Item>
          )
        })
        :
          <span>vacio</span>
        }
      </List>
    </MovieListContainer>
  );
}

export default MovieList;
