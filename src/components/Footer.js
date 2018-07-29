import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Need something done?</h2>
      <p>
        Lets talk! We can help bring your vision to life. Get in touch with us
        and lets discuss your next project.
      </p>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>520.505.1932</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">contact@daubcreative.com</a>
        </dd>
      </dl>
    </section>
    <p className="copyright">&copy; {new Date().getFullYear()} Daub Creative</p>
  </footer>
)

export default Footer
