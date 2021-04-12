import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import AliceCarousel from 'react-alice-carousel';
import { Container, Col, Row, Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';

export default function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="carousel-item-brand" data-value="1">
      <img src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/ameritrade-logo.png" alt=""/>
    </div>,
    <div className="carousel-item-brand" data-value="2">
      <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png" alt=""/>
    </div>,
    <div className="carousel-item-brand" data-value="3">
      <img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png" alt=""/>
    </div>,
    <div className="carousel-item-brand" data-value="4">
      <img src="https://a.slack-edge.com/65573/marketing/img/logos/company/_color/logo-onemedical.png" alt=""/>
    </div>,
    <div className="carousel-item-brand" data-value="5">
    <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/time-logo.png" alt=""/>
  </div>,
<div className="carousel-item-brand" data-value="6">
    <img src="https://a.slack-edge.com/a92aa/marketing/img/logos/company/_color/us-department-of-veteran-affairs.png" alt=""/>
  </div>,
  <div className="carousel-item-brand" data-value="7">
  <img src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/intuit.png" alt=""/>
</div>,
<div className="carousel-item-brand" data-value="8">
  <img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/oracle-logo.png" alt=""/>
</div>,
];
  return (
    <div>
      <header className="header" role="banner">
        <Navbar fixed="top" className="nav nav--fixed" role="navigation" expand="lg">
          <Navbar.Brand href="#home">
            <Link href="/" className="nav__slackLogo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 0 576 270" width="125" aria-label="Slack" className="c-slacklogo--color svg-replaced" shape-rendering="geometricPrecision"><path fill="#ECB32D" d="M141.8 87.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path><path fill="#63C1A0" d="M98.3 101.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z"></path><path fill="#E01A59" d="M177.2 158.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7L84 166.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z"></path><path fill="#331433" d="M102 183.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#D62027" d="M145.6 168.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#89D3DF" d="M163 115.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z"></path><path fill="#258B74" d="M87.9 139.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#819C3C" d="M131.4 125.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z"></path><path fill="#2D333A" d="M264.8 109.8c3.8 1.7 4.1 2.9 1.1 8.6-3.1 5.8-3.8 6.2-7.6 4.7-4.7-2-10.8-3.5-14.7-3.5-6.4 0-10.6 2.3-10.6 5.8 0 11.5 36.6 5.3 36.6 29.7 0 12.3-10.6 20.5-26.4 20.5-8.3 0-18.6-2.8-25.7-6.4-3.5-1.8-3.8-2.8-.7-8.7 2.6-5.1 3.5-5.7 7.3-4.1 6 2.6 13.7 4.7 18.8 4.7 5.8 0 9.7-2.4 9.7-5.8 0-11.1-37.3-5.8-37.3-29.5 0-12.6 10.5-21 26.2-21 7.6-.1 16.9 2.1 23.3 5zM294.4 80.8V172c0 1.4-1.5 2.8-3.5 2.8h-9.6c-2.1 0-3.5-1.5-3.5-2.8V80.8c0-4.5 1.3-4.9 8.3-4.9 8-.1 8.3.5 8.3 4.9zM362.6 132v39.3c0 2.1-1.5 3.5-3.5 3.5h-9.5c-2.2 0-3.7-1.6-3.5-3.8l.1-4.2c-5.1 5.7-12.5 8.7-19.9 8.7-14.3 0-23.9-8.3-23.9-20.6 0-13.1 10.8-22 27.1-22 6.2 0 11.8 1.1 16.4 3v-4.5c0-7.2-5.7-11.5-15.4-11.5-4.5 0-10.1 1.8-14.5 4.4-3.4 1.9-4.2 1.8-7.9-3.7-3.6-5.5-3.5-6.5 0-8.8 6.7-4.3 15.7-7.1 24-7.1 18.7 0 30.5 10.1 30.5 27.3zm-44.2 22.8c0 4.7 4 7.8 9.9 7.8 7.2 0 13.8-3.5 17.6-9.4v-6.1c-3.8-1.5-8.5-2.3-12.6-2.3-9 0-14.9 4.2-14.9 10zM427.6 109.9c3.5 2 3.6 3.1-.2 9-3.6 5.6-4.2 5.9-8.1 4-2.9-1.5-7.6-2.8-11.4-2.8-12 0-20 7.9-20 19.9 0 12.4 8 20.8 20 20.8 4.2 0 9.4-1.6 12.8-3.5 3.5-2 4.2-1.9 7.9 3.5 3.3 5 3.3 6.2.3 8.3-5.4 3.7-13.8 6.5-21.3 6.5-22.2 0-37.1-14.2-37.1-35.6 0-21.2 14.9-35.3 37.3-35.3 6.8 0 14.8 2.3 19.8 5.2zM500.2 166.2c2.8 3.5 1.7 4.8-5.3 7.3-7.1 2.6-8.1 2.4-10.6-.8l-19.9-26.5-8.9 8.6V172c0 1.4-1.5 2.8-3.5 2.8h-9.6c-2.1 0-3.5-1.5-3.5-2.8V80.8c0-4.5 1.3-4.9 8.3-4.9 8.1 0 8.3.6 8.3 4.9v51.8l27.2-26.1c3-2.8 4.7-2.6 10 .9 5.9 3.8 6.3 4.9 3.5 7.6L476 134.8l24.2 31.4z"></path></svg>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ color: "black" }}>
              <NavDropdown title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.1">Features</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.2">Channels</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.3">Integrations</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.4">Security</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.5">Slack Connect</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.5">Solutions</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-list" href="#action/3.5">Customers</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="download-slack" href="#action/3.4">
                  <i className=" fa fa-cloud-download fa-arrow-cloud s30"></i>Download Slack</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav__link fromCenter" href="#link">Enterprise</Nav.Link>
              <Nav.Link className="nav__link fromCenter" href="#link">Resource</Nav.Link>
              <Nav.Link className="nav__link fromCenter" href="#link">Pricing</Nav.Link>
            </Nav>
            <Link href="#" className="nav__link nav__button--nav talk_sales">TALK TO SALES</Link>
            <Link to="/login" className=" nav__button--nav launch_slack">
              LAUNCH SLACK<Link to="/" className=" arro fa arrow-down fa-arrow-down s30"></Link></Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Container className="hero" fluid>
        <Row>
          <Col>
            <div>
              <h1>This is your moment. Let’s reinvent work.</h1>
              <p>The past year proved we can redefine the way we work. Let’s build a more connected, inclusive and flexible future together.</p>
              <div className="learn_how"><Link to="/login" className=" nav__button--nav launch_slack launch_slack_2">
                LEARN HOW</Link></div>
            </div>
            <p className="workspace">Need to create a workspace? <Link className="get_started">Get started</Link></p>
          </Col>
          <Col>
            <div>
              <video
                src="https://a.slack-edge.com/0cd99/marketing/img/homepage/hp-prospect/hero/tablet/mp4/hero-image-tablet.IN.mp4"
                autoPlay
                muted
                loop
              >
              </video>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="sub-hero" fluid>
        <Row>
          <Col>
            <div>
              <video
                poster="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/channels/image/bring-your-team-together-in-channels.jpg"
                autoPlay
                muted
                playsInline
                loop
              >
                <source
                  src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4"
                  type="video/mp4"
                ></source>
                <source
                  src="https://a.slack-edge.com/5ebc9a2/marketing/img/homepage/hp-prospect/channels/webm/bring-your-team-together-in-channels.webm"
                  type="video/webm"
                ></source>
              </video>
            </div>
          </Col>
          <Col>
            <div className="sub-hero-content">
              <h1>Bring your team together in channels</h1>
              <p>A channel is the place for everything related to a project, topic or team. Everyone in a channel sees the same messages and stays on the same page.</p>
              <p className="learn_more"><Link className="get_started_channels fromLeft">Learn more about channels
        <i className="fa fa-long-arrow-right long-arrow-right" aria-hidden="true"></i></Link></p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-desc" fluid>
        <Row>
          <Col>
            <div className="share-files-margin share-files-div">
              <i class="fa fa-file" aria-hidden="true"></i>
              <h1>Share files</h1>
              <p>Keep files and the messages about them together in channels.</p>
            </div>
          </Col>
          <Col>
            <div className="share-files-div">
              <i class="fa fa-video-camera" aria-hidden="true"></i>
              <h1>Connect on a call</h1>
              <p>If working face to face is easier, go from channel to voice or video call in a click.</p>
            </div>
          </Col>
          <Col>
            <div className="share-files-div">
              <i class="fa fa-slack" aria-hidden="true"></i>
              <h1>Collaborate with partners</h1>
              <p>Work faster with external clients, vendors and more by working in a channel.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="jumbotron-container" fluid>
        <Row>
          <Jumbotron className="jumbotron-over">
            <h1>Over 750,000 companies use Slack to get work done</h1>
            <p className="learn_more"><Link className="get_started_channels fromLeft">See all customer stories
        <i className="fa fa-long-arrow-right long-arrow-right" aria-hidden="true"></i></Link></p>
          </Jumbotron>
        </Row>
        <Row>
          <Col><div className="ftb-image">
            <img src="https://a.slack-edge.com/236db6/marketing/img/stories/fox/fox-sporting-event-highlights.png" alt="ftb"/>
            </div></Col>
          <Col>
          <div className="sporting-div">
          <h2>“Sporting event highlights that used to take hours from creation to approval and distribution are now able to be shared in near-real time through our social channels, thanks to Slack.”</h2>
          <img src="https://a.slack-edge.com/fb12d/marketing/img/stories/21stcenturyfox/fox-logo.png" alt="fox"/>
          <p>Paul Cheesbrough, <span>CTO</span></p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="alice-div">
          <AliceCarousel className="alice-coursel"
        items={items}
        mouseTracking
        animationDuration={3000}
        disableButtonsControls={true}
        disableDotsControls={true}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
    />
    </div>
    </Col>
        </Row>
      </Container>
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__top intro">
            <h1 className="hero__headline testimonials__headline">You're in good company</h1>
            <p className="testimonials__copy copy">Millions of people around the world have already made Slack the place where their work happens.</p>
            <button className="testimonials__button button--secondary">Discover why</button>
          </div>
          <div className="testimonials__bottom logowall">
            <figure className="logowall__item">
              <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png" alt="Airbnb" width="150" />
            </figure>
            <figure className="logowall__item">
              <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png" alt="Capital One" width="150" />
            </figure>
            <figure className="logowall__item">
              <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png" alt="Harvard" width="150" />
            </figure>
            <figure className="logowall__item no-margin--bottom">
              <img src="https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png" alt="Los Angeles Times" width="150" />
            </figure>
            <figure className="logowall__item no-margin--bottom">
              <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png" alt="Oracle" width="150" />
            </figure>
            <figure className="logowall__item no-margin--bottom">
              <img src="https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png" alt="Ticket Master" width="150" />
            </figure>
          </div>
        </div>
      </section>
      <section className="cta">
        <div className="cta__container">
          <div className="cta__left--col">
            <h2 className="hero__headline cta__header">Try it for free</h2>
            <p className="copy--mini-medium copy cta__copy">Already using Slack? <Link href="#" aria-label="cta--sign-in">Sign in</Link></p>
          </div>
          <div className="cta__right--col">
            <button className="hero__button--cta button--primary">Get started</button>
          </div>
        </div>
      </section>


      <footer role="footer">
        <section className="footer">
          <div className="footer__container">
            <div className="footer__left--col">
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-101 331 132 132" width="54" height="54" aria-label="Slack" className="c-nav--footer__svgicon c-slackhash svg-replaced" shape-rendering="geometricPrecision"><path d="M-16.7 343.1c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z" fill="#ECB32D"></path><path d="M-60.2 357.2c-1.9-5.7-8-8.8-13.7-7-5.7 1.9-8.8 8-7 13.7l28.1 86.4c1.9 5.3 7.7 8.3 13.2 6.7 5.8-1.7 9.3-7.8 7.4-13.4 0-.2-28-86.4-28-86.4z" fill="#63C1A0"></path><path d="M18.7 414.6c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.5 28.2c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.5-28.1 86.5-28.1z" fill="#E01A59"></path><path d="M-56.5 439.1c5.6-1.8 12.9-4.2 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#331433"></path><path d="M-12.9 424.9c7.8-2.5 15.1-4.9 20.7-6.7-1.8-5.6-4.2-12.9-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#D62027"></path><path d="M4.5 371.1c5.7-1.9 8.8-8 7-13.7-1.9-5.7-8-8.8-13.7-7l-86.4 28.1c-5.3 1.9-8.3 7.7-6.7 13.2 1.7 5.8 7.8 9.3 13.4 7.4.2 0 86.4-28 86.4-28z" fill="#89D3DF"></path><path d="M-70.6 395.5c5.6-1.8 12.9-4.2 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#258B74"></path><path d="M-27.1 381.4c7.8-2.5 15.1-4.9 20.7-6.7-2.5-7.8-4.9-15.1-6.7-20.7l-20.7 6.7 6.7 20.7z" fill="#819C3C"></path></svg>
              </Link>
            </div>
            <div className="footer__right--col nav--footer">
              <div className="nav--footer__block">
                <p className="nav--footer__listheader">Company</p>
                <ul className="nav--footer__list">
                  <li className="nav--footer__listitem">
                    <Link href="#">About Us</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Careers</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Blog</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Press</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Brand Guidelines</Link>
                  </li>
                </ul>
              </div>
              <div className="nav--footer__block">
                <p className="nav--footer__listheader">Product</p>
                <ul className="nav--footer__list">
                  <li className="nav--footer__listitem">
                    <Link href="#">Why Slack</Link></li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Enterprise</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Customer support</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Pricing</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Security</Link>
                  </li>
                </ul>
              </div>
              <div className="nav--footer__block">
                <p className="nav--footer__listheader">Resources</p>
                <ul className="nav--footer__list">
                  <li className="nav--footer__listitem">
                    <Link href="#">Download</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Help center</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Guides</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Partners</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Event</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">App directory</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">API</Link>
                  </li>
                </ul>
              </div>
              <div className="nav--footer__block">
                <p className="nav--footer__listheader">Extras</p>
                <ul className="nav--footer__list">
                  <li className="nav--footer__listitem">
                    <Link href="#">Podcast</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Slack shop</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Slack at work</Link>
                  </li>
                  <li className="nav--footer__listitem">
                    <Link href="#">Slack fund</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="metasocial">
          <div className="metasocial__container">
            <ul className="metasocial__left--col metasocial__list">
              <li className="metasocial__listitem">
                <Link href="#">Status</Link>
              </li>
              <li className="metasocial__listitem">
                <Link href="#">Privacy &amp; Terms</Link>
              </li>
              <li className="metasocial__listitem">
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
            <div className="metasocial__right--col">
              {/* <!-- <select name="language__dropdown" id="language__drowpdown" className="metasocial__language">
                        <option value="Deutsch">Deutsch</option>
                        <option value="English (US)">English (US)</option>
                        <option value="Espanol">Espanol</option>
                        <option value="Francais">Francais</option>
                    </select> --> */}
              <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 32 32" width="20" height="20" aria-label="Twitter" className="metasocial__svgicon svg-replaced" shape-rendering="geometricPrecision"><path d="M31.993 6.077c-1.177.523-2.44.876-3.77 1.033 1.355-.812 2.396-2.098 2.887-3.63-1.27.75-2.673 1.3-4.168 1.592C25.744 3.797 24.038 3 22.15 3c-3.626 0-6.563 2.938-6.563 6.563 0 .514.057 1.016.17 1.496C10.3 10.783 5.464 8.17 2.227 4.2c-.565.97-.89 2.098-.89 3.3 0 2.28 1.16 4.287 2.92 5.465-1.076-.035-2.088-.33-2.973-.82v.08c0 3.182 2.26 5.835 5.264 6.438-.55.15-1.13.23-1.73.23-.423 0-.833-.04-1.233-.117.834 2.606 3.26 4.504 6.13 4.558-2.245 1.76-5.075 2.81-8.15 2.81-.53 0-1.053-.03-1.566-.09C2.905 27.914 6.355 29 10.062 29c12.072 0 18.675-10 18.675-18.675 0-.284-.008-.568-.02-.85 1.283-.925 2.395-2.08 3.276-3.398z"></path></svg></Link>
              <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="126.445 2.281 589 589" aria-label="Facebook" className="metasocial__svgicon svg-replaced" shape-rendering="geometricPrecision"><path d="M516.704 92.677h-65.24c-38.714 0-81.776 16.283-81.776 72.402.19 19.553 0 38.28 0 59.356H324.9v71.27h46.174v205.178h84.847v-206.53h56.003l5.067-70.118h-62.53s.14-31.19 0-40.25c0-22.176 23.075-20.906 24.463-20.906 10.98 0 32.332.032 37.813 0V92.677h-.032z"></path></svg></Link>
              <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 32 32" width="20" height="20" aria-label="YouTube" className="metasocial__svgicon svg-replaced" shape-rendering="geometricPrecision"><path d="M31.67 9.18s-.312-2.354-1.27-3.39c-1.218-1.358-2.58-1.366-3.206-1.443C22.717 4 16.002 4 16.002 4h-.015s-6.715 0-11.19.347c-.626.077-1.988.085-3.206 1.443C.635 6.826.32 9.18.32 9.18S0 11.94 0 14.7v2.59c0 2.762.32 5.522.32 5.522s.312 2.352 1.27 3.386c1.22 1.358 2.816 1.317 3.528 1.46 2.56.26 10.877.342 10.877.342s6.722-.012 11.2-.355c.624-.08 1.987-.088 3.204-1.446.956-1.036 1.27-3.388 1.27-3.388s.32-2.76.32-5.523V14.7c0-2.76-.32-5.522-.32-5.522z"></path><path fill="#FFF" d="M12 10v12l10-6"></path></svg></Link>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}
