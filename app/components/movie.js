import React from 'react'

const Loading = (props) => (
    <div className='movie-container' key={props.id} style = {{ backgroundImage : "url(http://image.tmdb.org/t/p/w185/" + props.posterPath + ")"}}>
        <div>
            <div>
                <div className='movie-popularity'> {props.popularity} </div>
                <div className='movie-releaseDate'> {props.releaseDate} </div>
                <div className='movie-rating'> {props.rating} </div>
                <div className='movie-language'> {props.language} </div>
                <div className='movie-title'> {props.title} </div>
            </div>  
        </div>
    </div>
)

export default Loading
