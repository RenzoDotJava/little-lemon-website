import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <img
        src={logo}
      />
      <nav>
        <ul>
          <li><NavLink className='card_title' to="/">Home</NavLink></li>
          <li><NavLink className='card_title' to="/">About</NavLink></li>
          <li><NavLink className='card_title' to="/">Menu</NavLink></li>
          <li><NavLink className='card_title' to="/booking">Reservations</NavLink></li>
          <li><NavLink className='card_title' to="/">Order Online</NavLink></li>
          <li><NavLink className='card_title' to="/">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
