import React from 'react';
import cn from 'classnames'
import s from './FullWidthSection.scss'
import { Container } from 'components/Layout'

export default (props) => {
  const { color, children, className, style, fullHeight, ...otherProps } = props
  return (
    <div className={ cn(s.section, 'layout-column', { [s.fullHeight] : fullHeight}, className) } style={ style } { ...otherProps }>
      <Container className={ cn('layout-column layout-align-center flex', s.inner) }>
        { children } 
      </Container>
    </div>
  )
}
