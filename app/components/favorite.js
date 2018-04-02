import React from 'react'

const Favorite = (props) => (
      <div className="movies-wrapper" >
        { (props.movies) ? props.movies : "<p>NO MOVIES selecte</p>" }
      </div>
)

export default Favorite
