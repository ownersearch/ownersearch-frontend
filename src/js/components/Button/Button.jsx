import React, { Component } from 'react';
import { Link } from 'react-router'

import LoadingDots from 'components/Loading/LoadingDots'
import IconChevronDown from 'components/Icons/ChevronDown'

import cn from 'classnames'
import s from './Button.scss'

export default class extends Component {
  state = {
    errorState: false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error && !this.props.error) {
      this.setState({
        errorState: true,
      })
      this.errorStateTimeout = setTimeout(() => {
        this.setState({
          errorState: false,
        })
      }, 1000)
    }
  }
  componentWillUnmount() {
    clearTimeout(this.errorStateTimeout)
  }
  render() {
    const { color, className, to, size, prev, next, error, href, ghost, stickyBottom, icon, plain, children, buttonRef, loading, ...otherProps } = this.props
    const { errorState } = this.state
    const classes = cn({
      [s.standard]: !ghost && !plain && !next && !prev,
      [s.ghost]: ghost,
      [s.plain]: plain,
      [s.next]: next,
      [s.prev]: prev,
      [s.icon]: icon,
      [s[color]]: color,
      [s.loading]: loading,
      [s.sm]: size === 'sm',
      [s.xs]: size === 'xs',
      [s.stickyBottom]: stickyBottom,
      [s.error]: errorState,
    }, className)

    if (to) {
      return (
        <Link className={ classes } to={ to } { ...otherProps }>
          { loading ? <LoadingDots shadow /> : children }
          { (next || prev) && <IconChevronDown size={ 12 } /> }
        </Link>
      )
    }
    else if (href) {
      return (
        <a className={ classes } href={ href } { ...otherProps }>
          { loading ? <LoadingDots shadow /> : children }
          { (next || prev) && <IconChevronDown size={ 12 } /> }
        </a>
      )
    } else {
      return (
        <button className={ classes } { ...otherProps }>
          { loading ? <LoadingDots shadow /> : children }
          { (next || prev) && <IconChevronDown size={ 12 } /> }
        </button>
      )
    }
  }
}
