
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterList from './components/Charlists.js'
import { Spinner } from 'reactstrap';
import Example from '../src/components/footer'
import styled from 'styled-components'



const App = () => {

  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12')
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])
  
  const StyleH1 = styled.h1`
  color: turquoise;
  text-shadow: 1px 2px 5px yellowgreen, 1px 10px 0 black, -1px 10px 0 black, 1px 10px 10px black;
  background-color: black;
  font-size: 2.5rem;
  `;

  const StyleH3 =  styled.h3 `
   color:turquoise;
  text-shadow: 1px 2px 5px yellowgreen, 1px 10px 0 black, -1px 10px 0 black, 1px 10px 10px black;
  background-color:black;
  font-size:1.8rem;
  `;
  
  return (
    <div className="App">
      <StyleH1>Rick And Morty</StyleH1>
      <StyleH3>Meet the Cast</StyleH3>
      <div className="characters">
      {/* <Spinner color="primary" /> */}
      <CharacterList data={data}/></div>
    <footer>
    <Example/>
    </footer>
    <div>
      <Spinner type="grow" color="primary" />
      <Spinner type="grow" color="secondary" />
      <Spinner type="grow" color="success" />
      <Spinner type="grow" color="danger" />
      <Spinner type="grow" color="warning" />
      <Spinner type="grow" color="info" />
      <Spinner type="grow" color="light" />
      <Spinner type="grow" color="dark" />
    </div>
    </div>
    
  );
}

export default App;