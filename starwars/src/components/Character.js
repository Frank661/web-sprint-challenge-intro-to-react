


// Write your Character component here

import React from 'react'




const Character = (props) => {
    const { data } = props
    return (

        <div className="cardInfo">
                <img className="theCrewImg" src={data.image}/>
                <h4>{data.name}</h4>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
            </div> 
      
      
        
    )
}

export default Character