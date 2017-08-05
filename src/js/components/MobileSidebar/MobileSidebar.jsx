import React from 'react'

import { Link } from 'react-router'

import cn from 'classnames'
import s from './MobileSidebar.scss'
import Button from 'components/Button'
import AnimationFade from 'components/Animation/AnimationFade'
import AnimationAddRemove from 'components/Animation/AnimationAddRemove'

import IconHome from 'components/Icons/Home'
import IconMoney from 'components/Icons/Money'
import IconInvestments from 'components/Icons/Investments'
import IconSearch from 'components/Icons/Search'
import IconInsurance from 'components/Icons/Insurance'
import IconProfile from 'components/Icons/Profile'

const links = [{
  name: 'Dashboard',
  to: '/',
  icon: <IconHome />,
}, {
  name: 'My Money',
  to: '/money',
  icon: <IconMoney />,
}, {
  name: 'My Investments',
  to: '/investments',
  icon: <IconInvestments />,
}, {
  name: 'Search for super',
  to: '/super-search',
  icon: <IconSearch />,
}, {
  name: 'My Insurance',
  to: '/insurance',
  icon: <IconInsurance />,
}, {
  name: 'My Details',
  to: '/settings',
  icon: <IconProfile />,
}]

const otherLinks = [{
  name: 'Glossay',
  to: '/glossary',
}, {
  name: 'Contact',
  to: '/contact',
}, {
  name: 'FAQ',
  to: '/faq',
}, {
  name: 'Privacy Policy',
  to: '/privacy',
}, {
  name: 'Terms and Conditions',
  to: '/terms',
}]

export default (props) => {
  const { layout, toggleMenu, logout } = props
  const isOpen = layout.menuOpen && layout.header !== 'landing'
  return (
    <div className="layout-column">
      <AnimationAddRemove
        in={ isOpen }
        timeout={ 500 }
        classNames={ {
          enter: s.fadeEnter,
          enterActive: s.fadeEnterActive,
          exit: s.fadeExit,
          exitActive: s.fadeExitActive,
        } }
      >
        <div className={ cn(s.sidebar, 'flex layout-column') }>
          <div className={ cn('layout-column flex', s.inner) }>
            <div>
              { links.map(link => (
                <Link className={ cn(s.link, 'layout-row layout-align-start-center') } to={ link.to } activeClassName={ s.active }>
                  { link.icon }
                  { link.name }
                </Link>
              ))}
            </div>
            <div className={ s.divider } />
            <div>
              { otherLinks.map(link => (
                <Link className={ s.otherLink } to={ link.to } activeClassName={ s.active }>{ link.name }</Link>
              ))}
            </div>
            <div className="flex" />
            <div className={ cn(s.footer, 'layout-row layout-align-start-center') }>
              <div className={ s.copyright }>
                © Zuper 2017
              </div>
              <div className="flex" />
              <Button className={ s.logout } size="xs" color="tertiary" onClick={ logout }>Logout</Button>
            </div>
          </div>
        </div>
     </AnimationAddRemove>
      <AnimationFade in={ isOpen }>
        <div className={ s.overlay } onClick={ () => toggleMenu() } />
      </AnimationFade>
    </div>
  )
}
