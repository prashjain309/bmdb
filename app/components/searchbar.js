import React from 'react'
import Loading from './loading'
import Movie from './movie';
class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSearchVisible: false
        }
    }

    handleClick (event) {
        this.setState({
            isSearchVisible: !this.state.isSearchVisible
        })
    } 
    
    render(){
        return(
            <div className="searchbar-wrapper" >
                <input className={ 'searchbar-input ' + (this.state.isSearchVisible ? '' : 'none') } onChange = {this.props.searchHandler}/>
                <div className='searchbar-icon' onClick={this.handleClick.bind(this)}>SearchIcon</div>
            </div>
        )
    }
}

export default SearchBar;


