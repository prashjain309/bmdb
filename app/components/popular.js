import React from 'react'
import Loading from './loading'
import Movie from './movie';
class Popular extends React.Component {
  render(){
    let movieList = this.props.movies && this.props.movies.map((movieProps)=>{
      return (
        <Movie {...movieProps}/>
      )
    });


    //To be used for better coding
    // if (movieList){
    //   // u have the movies
    // }

    return(
      <div className="movies-wrapper" >
        { (this.props.movies) ? movieList :<Loading/> }
      </div>
    )
  }
}

export default Popular
