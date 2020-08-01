
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import CharacterContainer from './components/Charlists.js'



const App = () => {

  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12')
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
      <h3>Meet the Cast</h3>
      <div className="characters">
      <CharacterContainer data={data}/></div>
    </div>
  );
}

export default App;