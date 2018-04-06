import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Popular from './popular'
import Favorite from './favorite'

class MainBody extends React.Component {
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
          posterPath: movie.poster_path,
          rating: movie.vote_average,
          releaseDate: movie.release_date, 
          title: movie.original_title
        }
        return(props)
      });
      movies && movies.sort(function(a, b) {
        return b.rating - a.rating
      });

      this.setState({movies: movies})
    })      
    .catch(error => console.error(error))

  }

  componentWillMount(){
    let movies = null;
    this.setState({movies: movies})    
  }

  render(){
    let lowerMovieNameCase = this.props.searchMovie.toLowerCase();
    let searchMovieList = this.props.searchMovie && this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(lowerMovieNameCase) > -1 
    })
    
    let movieList = searchMovieList || this.state.movies;
    let favoriteMovieList = searchMovieList || this.state.movies;
    favoriteMovieList = favoriteMovieList && favoriteMovieList.filter((movie)=>{
      return movie.rating > 7.0
    })

    return(
      <div className='main-body'>
      <Switch>
        <Route exact path='/' render={()=><Popular movies={movieList}/>}/>
        <Route path='/favorite' render={()=><Favorite movies={favoriteMovieList} />}/>
      </Switch>
    </div>
    )
  }
}

export default MainBody
