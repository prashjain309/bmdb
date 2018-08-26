import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Popular from './popular'
import Favorite from './favorite'
import SortBy from './sortBy'
import FilterBy from './filterBy'

class MainBody extends React.Component {
  constructor() {
    super()
    this.state = {
      movies : [],
      filterYear: null,
      sortType : null,
    };
  }
  
  handleFilter (ev) {
    this.setState({
      filterYear : ev.target.value
    })
  }

  handleSort (ev) {
    this.setState({
      sortType : ev.target.value
    })
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

    if (this.state.filterYear)
      movieList =  movieList.filter((movie) => {
        return  movie.releaseDate.indexOf(this.state.filterYear) !== -1
      })

      if (this.state.sortType){
        movieList.sort((a,b) => {
          if(a.rating < b.rating){
            return this.state.sortType.indexOf('up') < 0 ? 1 : -1
          }else if(a.rating > b.rating){
            return this.state.sortType.indexOf('up') < 0 ? -1 : 1
          }else
            return 0;
        })
      }


    return(
      <div className='main-body'>
        <div className='nav-bar'>
          <FilterBy onChange={this.handleFilter.bind(this)}/>
          <SortBy onChange={this.handleSort.bind(this)}/>
        </div>
        <Switch>
          <Route exact path='/' render={()=><Popular movies={movieList}/>}/>
          <Route path='/favorite' render={()=><Favorite movies={favoriteMovieList} />}/>
        </Switch>
      </div>
    )
  }
}

export default MainBody
