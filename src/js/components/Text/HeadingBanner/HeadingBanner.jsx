import React, { Component } from 'react'

import { Container } from 'components/Layout'

import cn from 'classnames'
import s from './HeadingBanner.scss'

import imgTriangle from 'static/images/patterns/triangle.svg'
        
export default (props) => {
  const { children, className, position, ...otherProps } = props
  return (
    <div className={ cn(s.root, className) } { ...otherProps }>
      <div className={ s.texture } style={ { backgroundImage: `url(${imgTriangle})`, opacity: `${1 - position / 200}` } } />
      <Container className={ s.inner } style={ { transform: `translateY(${position / 2}px)`, opacity: `${1 - position / 200}` } }>
        { children }
      </Container>
    </div>
  )
}
