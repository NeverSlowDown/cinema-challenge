import React from 'react';
import styled from "styled-components";

const FilterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: white; 
  width: 100%;
  color: black;
`;

const Stars = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: red;
  font-size: 3em;
`;

const StyledStar = styled.div`
  color: white;
  opacity: ${props => props.isActive ? 1 : 0.5}
`;

const Star = ({number, onClick, isActive}) => {
  return (
    <StyledStar onClick={onClick} isActive={isActive}>{number}</StyledStar>
  )
}

const Filter = ({rating, setRating}) => {
  
  const handleRating = number => {
    setRating({from: number, to: number + 2});
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
