import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'

import cinderblock from '../assets/images/cinderblock.jpg'
import db from '../assets/images/db.jpg'
import fetal from '../assets/images/fetal.jpg'
import hangar from '../assets/images/hangar.jpg'
import jdr from '../assets/images/jdr.png'
import mobileReg from '../assets/images/mobile-reg.png'
import logan from '../assets/images/logan.png'
import derick from '../assets/images/derick.png'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          {/* <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Services</h2>
                </header>
                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={pic01} alt="" /></span>
            </div>
          </section> */}

          <section id="first" className="main special">
            <header className="major">
              <h2>Services</h2>
              <p>
                We make websites and applications that fit your user's needs.
              </p>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code" />
                <h3>Web</h3>
                <p>
                  Your website leaves a lasting impression on your visitors. Our
                  custom designed, responsive websites and web applications will
                  be sure to make that first impression a positive one.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-mobile" />
                <h3>Mobile</h3>
                <p>
                  Native/Cross-Platform/Mobile Web. Your application needs to
                  meet your user's needs and keep them engaged. The apps we
                  build can do just this.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-bullseye" />
                <h3>UI/UX Design</h3>
                <p>
                  We love pixels and people. At the center of every design we do
                  you will find users. With 10 years of UX experience we strive
                  to build things that are functional, fun, and catered to what
                  your target users need.
                </p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Portfolio</h2>
              <p>View some samples of our work.</p>
            </header>
            <div className="project-grid">
              <a
                target="_blank"
                href="https://www.behance.net/gallery/20441599/Cinderblock-Brewery-Website"
                className="project"
              >
                <img src={cinderblock} alt="" />
                <div className="project-description">
                  <div className="project-title">Cinberblock Brewery</div>
                  <div className="project-type">Website</div>
                </div>
              </a>
              <a
                target="_blank"
                href="http://derickberry.com/"
                className="project"
              >
                <img src={db} alt="" />
                <div className="project-description">
                  <div className="project-title">Derick Berry Portfolio</div>
                  <div className="project-type">Website</div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/gallery/14524785/Hangar-Movie-Theater-Restaurant"
                className="project"
              >
                <img src={hangar} alt="" />
                <div className="project-description">
                  <div className="project-title">Hangar</div>
                  <div className="project-type">Website</div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/gallery/28579581/JD-Russel-Co"
                className="project"
              >
                <img src={jdr} alt="" />
                <div className="project-description">
                  <div className="project-title">JD Russell</div>
                  <div className="project-type">Website</div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/gallery/14534641/Fetal-Monitoring-(iOS)"
                className="project"
              >
                <img src={fetal} alt="" />
                <div className="project-description">
                  <div className="project-title">Fetal Monitoring (iOS)</div>
                  <div className="project-type">UX/Design</div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.behance.net/gallery/14682949/Mobile-Registration-(Windows-8)"
                className="project"
              >
                <img src={mobileReg} alt="" />
                <div className="project-description">
                  <div className="project-title">Mobile Registration</div>
                  <div className="project-type">UX/Design</div>
                </div>
              </a>
            </div>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>About Us</h2>
              <p>Meet the talent behind the creations</p>
            </header>
            <div className="about-us">
              <div className="person">
                <img src={logan} alt="" />
                <div className="person-name">Logan Garland</div>
                <div className="person-title">Co-Founder / Developer</div>
                <ul className="list-inline social-buttons">
                  <li>
                    <a href="https://www.twitter.com/floppycatfish">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/floppycatfish">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/profile/view?id=AAIAAAEVg6ABA8bBnaOG0xuEYqyHhztyzrZRwrU&trk=nav_responsive_tab_profile_pic">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="person">
                <img src={derick} alt="" />
                <div className="person-name">Derick Berry</div>
                <div className="person-title">Co-Founder / Design</div>
                <ul className="list-inline social-buttons">
                  <li>
                    <a href="https://www.facebook.com/derilyct?fref=ts">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/profile/view?id=ADEAAAfIjB0Byf1ftN5oKPImEd0XYXmB-4unrf8&authType=NAME_SEARCH&authToken=Q02T&locale=en_US&srchid=181871681452208909161&srchindex=1&srchtotal=5&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A181871681452208909161%2CVSRPtargetId%3A130583581%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
