import React from 'react'
import Loading from './loading'
import Movie from './movie'
import movie from './movie';
class Popular extends React.Component {
  constructor() {
    super()
    this.state = {
      movies : [],
    };
  }

  componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=372c5f45291d23cf18fa1dab4df64a5b&language=en-US&page=1")
    .then(results => {
      return results.json();
    })
    .then(data => {
      let movies = data.results
      .map((movie) => {
        let props = {
          key:movie.id,
          id: movie.id,
          language: movie.original_language,
          popularity: movie.popularity,          
          posterPath: movie.posterPath,
          rating: movie.vote_average,
          releaseDate: movie.release_date, 
          title: movie.original_title
        }
        return(
          <Movie {...props}/>
        )
      });
      
      // console.log(movies)
      this.setState({movies: movies})
      // console.log("state", this.state.movies)
    })      
    .catch(error => console.error(error))

  }

  componentWillMount(){
    let movies = null;
    this.setState({movies: movies})    
  }
  render(){
    let movieList = this.state.movies;

    //To be used for better coding
    // if (movieList){
    //   // u have the movies
    // }

    return(
      <div className="movies-wrapper" >
        { (this.state.movies) ? this.state.movies :<Loading/> }
      </div>
    )
  }
}

export default Popular
