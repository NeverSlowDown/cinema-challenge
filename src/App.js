import React from 'react';
import './App.css';
import styled from "styled-components";
import Home from "./components/Home";

const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`;


function App() {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
}

export default App;
