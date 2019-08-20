import React, {useState} from 'react';
import styled from "styled-components";
import  {Search as SearchIcon}  from '@material-ui/icons';
import axios from "axios";
import * as R from "ramda";

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

const SearchButton = styled.button`
  position: absolute;
  right: 20px;
  top: 17px;
  fill: #000000cc;
  opacity: 0.5;
  transition: 0.5s ease;
  border: none;
  background: none;
  cursor: pointer;
`;


const Search = ({setMovies, apiKey}) => {

  const [inputVal, setInputVal] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = async () => {
    const Query = R.isEmpty(inputVal) ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc` : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputVal}`
    try {
      const response = await axios.get(Query);
      setMovies(response.data.results);
      setSearch(inputVal);
      console.log("A VERRR EVARVEVREVAVERAV ERVAEVR ", response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = e => {
    setInputVal(e.target.value)
  }

  const enterKey = e => {
    search !== inputVal &&
    e.keyCode == 13 && handleSubmit(inputVal)
  }

  return (
    <SearchContainer>
      <SearchInput>
        <input placeholder="search movie" onKeyDown={enterKey} type="search" onChange={handleChange} />
        <SearchButton onClick={() => search !== inputVal && handleSubmit(inputVal)}>
          <SearchIcon />
        </SearchButton>
      </SearchInput>
    </SearchContainer>
  );
}

export default Search;
