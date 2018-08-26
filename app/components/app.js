import React from 'react'
import Header from './header'
import MainBody from './mainBody'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchMovieName : ''
    }
  }

  handleSearchChange (event){
      this.setState({
        searchMovieName : event.target.value
      })
  }

  render(){
    return(
      <div className='app'>
        <Header searchHandler={this.handleSearchChange.bind(this)}/>
        <MainBody searchMovie = {this.state.searchMovieName}/>
      </div>
    )
  }
}

export default App
