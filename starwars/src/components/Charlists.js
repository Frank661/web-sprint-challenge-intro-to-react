import React from 'react'
import Character from './Character.js'




const CharacterList = (props) => {
    const { data } = props
    
    return (
        <div>
            {data.map(char => {
                return <Character key={char.id} data={char}/> 
            })}
        </div>
    )
}


export default CharacterList