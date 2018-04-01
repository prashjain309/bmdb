
var React = require('react');
import { Link } from 'react-router-dom'
import mainLogo from '../logos/mainLogo.png'; 
class Header extends React.Component{
    render(){
        return(
            <div className='header-wrapper'> 
                <div className='logo-wrapper'> 
                    <img src={mainLogo} alt="BMDB"/>
                </div>
                <div><Link to='/'>Popular</Link></div>
                <div><Link to='/favorite'>Favorite</Link></div>
                <div className='searchbar-wrapper'>Search bar</div>
            </div>
        )
    }
}

export default Header;