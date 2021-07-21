import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import logo from '../logo.svg'
export default function Navbar() {
  const { setSearchValue, setSearchTerm } = useGlobalContext();

  const refreshHomePage = () => {
    setSearchTerm('a')
    setSearchValue('')
  }
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div onClick={() => refreshHomePage()}>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </div>
        <ul className='nav-links'>
          <li onClick={() => refreshHomePage()}>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
