import React from 'react'

const Loading = (props) => (
    <div className='movie-container' key={props.id} style = {{ backgroundImage : "url(http://image.tmdb.org/t/p/w185/" + props.posterPath + ")"}}>
        <div>
            <div>
                {props.popularity}<br/>
                {props.releaseDate}<br/>
                {props.rating}<br/>
                {props.language}<br/>
                {props.title}<br/>
            </div>  
        </div>
    </div>
)

export default Loading
