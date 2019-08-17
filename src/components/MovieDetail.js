import React, { useState } from 'react';
import styled from "styled-components";

const MovieDetailContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #5C0103; 
  width: 100%;
`;

const Info = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-self: center;
`;


const MovieDetail = ({movie}) => {

  return (
    <MovieDetailContainer>
      <Info>
        <h1>
          {movie.title}
        </h1>
        <p>
          {movie.description} 
        </p>
      </Info>
    </MovieDetailContainer>
  );
}

export default MovieDetail;
