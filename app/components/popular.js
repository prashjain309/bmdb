import React from 'react'
import Loading from './loading'
class Popular extends React.Component {
  render(){
    let movieList = this.props.movies;

    //To be used for better coding
    // if (movieList){
    //   // u have the movies
    // }

    return(
      <div className="movies-wrapper" >
        { (this.props.movies) ? this.props.movies :<Loading/> }
      </div>
    )
  }
}

export default Popular
