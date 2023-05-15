import React from 'react'
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <header>
      <img
        src={logo}
      />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  )
}
