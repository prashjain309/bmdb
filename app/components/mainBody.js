import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Popular from './popular'
import Favorite from './favorite'
import Movie from './movie'

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
        return(
          <Movie {...props}/>
        )
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
    let movieList = this.state.movies;
    let favoriteMovieList = this.state.movies && this.state.movies.filter((movie)=>{
      return movie.props.rating > 8.0
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
