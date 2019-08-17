import React from 'react';
import styled from "styled-components";

const SearchContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: white; 
  width: 100%;
  color: black;
`;


const Search = ({search, setSearch}) => {
  const handleChange = e => {
    setSearch(e.target.value)
  }
  
  return (
    <SearchContainer>
      <input type="search" onChange={handleChange} />
    </SearchContainer>
  );
}

export default Search;
