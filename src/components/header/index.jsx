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
          <li><a className='card_title'>Home</a></li>
          <li><a className='card_title'>About</a></li>
          <li><a className='card_title'>Menu</a></li>
          <li><a className='card_title'>Reservations</a></li>
          <li><a className='card_title'>Order Online</a></li>
          <li><a className='card_title'>Login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
