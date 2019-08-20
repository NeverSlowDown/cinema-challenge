import React from 'react';
import styled from "styled-components";
import  {Close as CloseIcon, Star}  from '@material-ui/icons';
import * as R from "ramda";
import {getStars} from "../utils";

const MovieDetailContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #0C0C0C; 
  width: 100%;
  height: ${props => props.isSelected ? "50vh" : "0vh"};
  transition: .5s ease;
  position: absolute;
  top: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-self: center;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background: rgba(0,0,0,0.75);
  padding: 10px;
  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 0.5s 0.25s ease forwards;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;



const Background = styled.div`
  background: url(${props => props.movie}) no-repeat center;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(15px);
  background-size: cover;
`;

const MovieTitle = styled.h1`
  font-size: 2em;
  letter-spacing: 5px;
  font-weight: 100;
  max-width: 500px;
  line-height: 1.25em;
  text-shadow: 20px 16px 10px #9b9b9b;
  @media screen and (max-width: 850px) {
    font-size: 1.75em;
    letter-spacing: 0;
  }
  @keyframes letter {
    0%{
      text-shadow: 20px 16px 5px #9b9b9b;
    }
    50%{
      text-shadow: 20px 16px 16px #9b9b9b;
    }
    100%{
      text-shadow: 20px 16px 5px #9b9b9b;
    }
  }
  animation: letter infinite 2s linear;
`;


const MovieImage = styled.img`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const MovieImageContainer = styled.figure`
  margin-right: 50px;
  display: flex;
`;

const CloseBtn = styled.button`
  border: none;
  position: absolute;
  right: 5vw;
  top: 10vh;
  z-index: 3;
  background: none;
  color: white;
  cursor: pointer;
  &:hover{
    svg {
      transform: rotate(90deg)
    }
  }
  svg {
    transition: 0.3s ease;
    width: 1.5em;
    height: 1.5em;
  }
`;

const MovieArticle = styled.article`

`;

const MovieOverview = styled.p`
  max-width: 500px;
  margin-top: 50px;
  line-height: 1.25em;
  font-size: 1.1em;
  max-height: 180px;
  overflow-y: auto;
  &::-webkit-scrollbar-track
  {
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 10px;
    background-color: rgba(0,0,0,.3);
  }

  &::-webkit-scrollbar
  {
    width: 12px;
    background-color: rgba(0,0,0,.3);
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgba(255,255,255,.7);
  }
`;

const StarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media screen and (max-width: 850px) {
    flex-direction: row;
    margin-left: 0;
  }
  svg {
    opacity: 0;
    @keyframes starIn {
      0% {opacity: 0;}
      100% {opacity: 1;}
    }
    animation: starIn 0.3s ease forwards;
    &:nth-child(1) {
      animation-delay: 0.5s !important
    }
    &:nth-child(2) {
      animation-delay: 0.7s !important
    }
    &:nth-child(3) {
      animation-delay: 0.9s !important
    }
    &:nth-child(4) {
      animation-delay: 1.1s !important
    }
    &:nth-child(5) {
      animation-delay: 1.3s !important
    }
    
  }
`;

const MovieDetail = ({movie, setSelected}) => {

  return (
    <MovieDetailContainer key={movie.title} isSelected={movie}>
      <CloseBtn onClick={() => setSelected(false)}><CloseIcon /></CloseBtn>
      <Background movie={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} />
      <InfoContainer>
        <Info>
          <MovieImageContainer>
            <MovieImage src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} />
            <StarsContainer>
              {R.repeat(<Star />, getStars(movie.vote_average))}
            </StarsContainer>
          </MovieImageContainer>
          <MovieArticle>
            <MovieTitle>
              {movie.title}
            </MovieTitle>
            <MovieOverview>
              {movie.overview} 
            </MovieOverview>
          </MovieArticle>
        </Info>
      </InfoContainer>
    </MovieDetailContainer>
  );
}

export default MovieDetail;
