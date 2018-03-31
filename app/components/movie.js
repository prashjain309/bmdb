import React from 'react'

const Loading = (props) => (
    <div key={props.id}>
        <div data-imgsrc= {"http://image.tmdb.org/t/p/w185/" + props.posterPath}>
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
