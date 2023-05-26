import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.png'
import hamburger_menu from '../../assets/hamburger_menu.svg'
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
      <img
        src={hamburger_menu}
      />
    </header>
  )
}

export default Header
