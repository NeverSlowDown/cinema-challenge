import React from 'react';
import styled from "styled-components";
import  {Search as SearchIcon}  from '@material-ui/icons';

const SearchContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  color: black;
  align-items: flex-start;
  z-index: 2;
`;

const SearchInput = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  padding: 15px;
  position: relative;
  svg {
    position: absolute;
    right: 20px;
    top: 18px;
    fill: #000000cc;
    opacity: 0.5;
    transition: 0.5s ease;
  }
  input {
    width: 100%;
    min-height: 30px;
    border: none;
    background: white;
    padding-left: 10px;
    padding-right: 35px;
    border-radius: 5px;
    &:focus {
      outline: none;
      ~ svg {
        opacity: 1;
      }
    }
  }
`;


const Search = ({search, setSearch}) => {
  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <SearchContainer>
      <SearchInput>
        <input type="search" onChange={handleChange} />
        <SearchIcon />
      </SearchInput>
    </SearchContainer>
  );
}

export default Search;
