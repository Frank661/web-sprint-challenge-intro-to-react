// Write your Character component here
import React, { useEffect, useState } from 'react'
import axios from "axios";



function GetDudes () {
    const rmAPI = "https://rickandmortyapi.com/api/character/"
    const [ mort, setMort] = useState([])
  


    useEffect(() => {

        axios.get(`${rmAPI}`)
        .then(response => {
          console.log(response)
          setMort(response.data.results)
        
        })
        .catch(error => {
          console.log("error", error)
        })
      }, [] );
    



    return (
        <div className="pokemons">
           {mort.map( index => {
               return (`${mort.name}`)
           })}

        
            
            
        </div>

    )







}

export default GetDudes