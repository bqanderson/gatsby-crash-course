import { Link } from 'gatsby'
import React from 'react'

import HeaderLogo from '../../static/images/logos/bqa-logo.svg'

const Header = () => (
  <header>
    <div className='header-row'>
      <div className='logo-wrapper'>
        <Link to='/'>
          <HeaderLogo height='48' width='143' />
        </Link>
      </div>
      <nav>
        <ul>
          <li className='menu-item'>
            <Link className='nav-link' to='/page-2/'>
              Projects
            </Link>
          </li>
          <li className='menu-item'>
            <Link className='nav-link' to='/page-2/'>
              About
            </Link>
          </li>
          <li className='menu-item'>
            <Link className='nav-link' to='/page-2/'>
              Experience
            </Link>
          </li>
          <li className='menu-item'>
            <Link className='nav-link' to='/page-2/'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
