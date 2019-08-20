import React from 'react';
import styled from "styled-components";
import  { Star as StarIcon, StarBorder }  from '@material-ui/icons';

const FilterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  color: black;
  align-items: flex-start;
`;

const Stars = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 3em;
  border-radius: 5px;
  padding: 0 10px;
`;

const StyledStar = styled.div`
  opacity: 1;
  cursor: pointer;
  height: 30px;
  display: flex;
  @keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
  }
  svg {
    width: 30px;
    height: 30px;
    animation: fadeIn 0.2s ease;
    transition: 0.2s ease;
    fill: ${props => props.isActive ? "#ffc020" : "white"};
    &:hover {
      transform: scale(1.2)
    }
  }
`;

const Star = ({number, onClick, isActive}) => {
  return (
    <StyledStar onClick={onClick} isActive={isActive}>
      {isActive
        ? <StarIcon />
        : <StarBorder />
      }
    </StyledStar>
  )
}

const Filter = ({rating, setRating}) => {
  
  const handleRating = number => {
    rating.from === number
    ? setRating(false)
    : setRating({from: number, to: number + 2});
  }

  return (
    <FilterContainer>
      <Stars>
        <Star isActive={rating.from >= 0} rating={rating} onClick={() => handleRating(0)} number={0}>1</Star>
        <Star isActive={rating.from >= 2} rating={rating} onClick={() => handleRating(2)} number={2}>2</Star>
        <Star isActive={rating.from >= 4} rating={rating} onClick={() => handleRating(4)} number={4}>3</Star>
        <Star isActive={rating.from >= 6} rating={rating} onClick={() => handleRating(6)} number={6}>4</Star>
        <Star isActive={rating.from >= 8} rating={rating} onClick={() => handleRating(8)} number={8}>5</Star>
      </Stars>
      
    </FilterContainer>
  );
}

export default Filter;
