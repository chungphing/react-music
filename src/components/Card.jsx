import React from 'react'

const Card = (props) => {
    return(
        <div className="card" onClick={props.onPlay}>
            <img src={props.image} alt="alt"/>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Card;