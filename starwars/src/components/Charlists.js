import React from 'react'
import Character from './Character.js'




const CharacterContainer = (props) => {
    const { data } = props
    //console.log(data)
    return (
        <div>
            {data.map(char => {
                return <Character key={char.id} data={char}/> 
            })}
        </div>
    )
}


export default CharacterContainer