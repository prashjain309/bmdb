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
        { (props.movies && props.movies.length > 0) ? favoriteList : <p className='not-available'>No movie is not your Favorite</p> }
      </div>
  )
}

export default Favorite
