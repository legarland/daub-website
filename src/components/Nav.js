import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['first', 'second', 'third', 'footer']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="first">
          <a href="#">Services</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Portfolio</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="third">
          <a href="#">About Us</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="footer">
          <a href="#">Contact</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
