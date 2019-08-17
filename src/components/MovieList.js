import React, { useState } from 'react';
import styled from "styled-components";

const MovieListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #5C0103; 
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width: 300px;
  cursor: pointer;
`;

const MovieImage = styled.figure`
  background: ${props => props.src} no-repeat center;
  background-size: cover;
  height: 200px;
  width: 100%;
`;


const MovieList = ({movies}) => {

  return (
    <MovieListContainer>
      <List>
        { movies.length > 0 ? movies.map(movie => {
          return (
            <Item>
              <MovieImage src={movie.image} />
              <h2>
                {movie.title}
              </h2>
              <div>
                {movie.stars}
              </div>
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
