// import React from 'react'

const Movie = (props) => {
  return (

    <div className="movieCard">
    <img src={props.img} alt="" />
        <h3>{props.title}</h3>  
        <p>{props.year}</p>
    </div>
    
  )
}

export default Movie