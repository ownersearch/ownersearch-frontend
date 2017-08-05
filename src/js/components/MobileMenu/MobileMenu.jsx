import React, { Component, PropTypes } from 'react'
import classes from './MobileMenu.scss'
import classNames from 'classnames'
import { Link } from 'react-router'

export default class MobileMenu extends Component {
  render() {
    const { items, isOpen, ...otherProps } = this.props
    const linkHeight = 33
    const mobileLinkStyle = {
      height: `${linkHeight}px`
    }
    const padding = 20;
    const mobileLinksStyle = isOpen
      ? {
        height: linkHeight * items.length + padding
      }
      : {}

    return (
      <div className={ classNames(classes.mobileLinks, 'hide-gt-sm') } style={ mobileLinksStyle }>
        <div className={ classes.inner }>
          { items.map(item => (
            <Link
              key={ item.name }
              activeClassName="active"
              className={ classNames(classes.mobileLink, 'layout-row layout-align-start-center') }
              style={ mobileLinkStyle }
              to={ item.to }
              { ...otherProps }
            >
              { item.name }
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
