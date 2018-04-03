import React from 'react'
import Movie from './movie'

const Favorite = (props) => {
  let favoriteList = props.movies && props.movies.map((movieProps)=>{
    return (
      <Movie {...movieProps}/>
    )
  })

  return(
    <div className="movies-wrapper" >
        { (props.movies) ? favoriteList : "<p>NO MOVIES selecte</p>" }
      </div>
  )
}

export default Favorite
