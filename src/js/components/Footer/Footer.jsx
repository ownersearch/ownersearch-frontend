import React from 'react';
import cn from 'classnames'
import s from './Footer.scss'
import { Row, Col, Container } from 'components/Layout'
import DateCountdown from 'components/DateCountdown'
import WaitlistForm from 'features/Auth/WaitlistForm'
import { Link } from 'react-router'

import sText from 'components/Text/Text.scss'

import imgLogoBlue from 'static/images/logo-blue.png'

const links = [{
  name: 'Manifesto',
  to: '/manifesto'
}, {
  name: 'Super 101',
  to: '/super-101'
}, {
  name: 'Investment',
  to: '/investment'
}, {
  name: 'Contact',
  to: '/contact'
}, {
  name: 'Jobs',
  to: '/jobs'
}, {
  name: 'Blog',
  to: '/blog'
}]

const colLength = 3

export default (props) => {
  const { children, className, white, ctaTitle, ctaBlurb, thankYouMessage, ...otherProps } = props
  return (
    <div>
      <div className={ s.cta }>
        <Container id="sign-up-form" style={ { position: 'relative' } }>
          <div style={ { marginTop: '30px' } }>
            <div className={ sText.heading3 }>{ ctaTitle || 'Join the waitlist' }</div>
            <div className={ sText.divider } />
          </div>         
          { ctaBlurb && <div className={ sText.descrip3 }>{ ctaBlurb }</div> }
          <WaitlistForm thankYouMessage= { thankYouMessage }/>
          <DateCountdown />
        </Container>
      </div>
      <footer className={ cn(s.footer, {[s.white]: white}, className) } { ...otherProps }>
        <Container>
          <img className={ s.logo } src={ imgLogoBlue } />
          <Row className="lg layout-xs-column layout-gt-xs-row layout-align-gt-xs-start-center">
            <Col className={ cn(s.message, 'lg') }>
              <p>Being revolutionary in the Australian finance industry, we are still making the finishing touches to Zuper. We are in the final stages, and while we don’t currently offer any financial services, we are planning to offer the Zuper Fund very soon! When we do, an unstoppable movement in Australian financial services will begin. Our PDS will be available via our website in September 2017, and you should consider this in full before deciding whether or not Zuper is the right superannuation product for you. In the meantime, make sure you don’t miss out by joining the waitlist and connecting with us @zuperannuation.</p>
            </Col>
            <div className="flex hide-xs" />
            <Col className="lg">
              <Row className="layout-row">
                <Col className="layout-column flex">
                  { links.slice(0, colLength).map(link => (
                    <Link className={ s.link } to={ link.to } key={ link.name }>{ link.name }</Link>
                  ))}
                </Col>
                <Col className="layout-column flex">
                  { links.slice(links.length - colLength ).map(link => (
                    <Link className={ s.link } to={ link.to } key={ link.name }>{ link.name }</Link>
                  ))}
                </Col>
              </Row>
              <div className={ s.meta }>
                © 2017 Zuper™ Financial Pty Ltd - ABN 32615224890 - <Link to="/privacy" style={ { color: 'black' } }>Privacy Policy</Link>
              </div>
              <div className={ s.meta2 }>
                "Own Today. Thrive Tomorrow", "Extremely Super Super" and "Invest in the things that matter to you most" are trademarks of Zuper Financial Pty Ltd
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
