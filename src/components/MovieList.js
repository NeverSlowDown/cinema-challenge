import React from 'react';
import styled from "styled-components";
import * as R from "ramda";
import  {Star, PanTool}  from '@material-ui/icons';

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
  padding: 100px 0px;
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
  max-width: 300px;
  max-height: 250px;
  width: 100%;
  margin: 0 auto;
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
  min-height: 100px;
  transition: 0.3s ease;
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

const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    margin-bottom: 10px;
  }
`;

const MovieList = ({movies, setSelected, selected, rating}) => {

  const Vote = vote => {
    return Math.floor(vote / 2);
  }
  const FilteredMovies = item => {
   return Math.floor(item.vote_average / 2) === (rating.to / 2) || item.vote_average === 0;
  }

  const moviesList = rating ? R.filter(FilteredMovies , movies): movies;

  console.log("a ver esto ", rating, "y ", moviesList )
  return (
    <MovieListContainer isSelected={selected}>
      <List>
        { moviesList.length > 0 ? moviesList.map(movie => {
          return (
            <Item key={movie.id} onClick={() => setSelected(movie)}>
              <MovieImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} />
              <MovieData>
                <MovieTitle>
                  {movie.title}
                </MovieTitle>
                <MovieStars>
                  {R.repeat(<Star />, movie.vote_average < 1 ? 1 : Vote(movie.vote_average))}
                </MovieStars>
              </MovieData>
            </Item>
          )
        })
        :
          <Empty><PanTool /> No results</Empty>
        }
      </List>
    </MovieListContainer>
  );
}

export default MovieList;
