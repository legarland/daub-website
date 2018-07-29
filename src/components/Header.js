import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/daub_header_logo.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>We Build Cool Stuff</h1>
    <p>Let us build your next website :: mobile app :: game</p>
  </header>
)

export default Header
