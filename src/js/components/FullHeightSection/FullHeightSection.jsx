import React from 'react';
import cn from 'classnames'
import s from './FullHeightSection.scss'
import { Container } from 'components/Layout'

export default (props) => {
  const { color, children, className, ...otherProps } = props
  return (
    <div className={ cn(s.section, 'layout-column layout-align-center', className) } { ...otherProps }>
      <Container>
        <div className="layout-xs-column layout-gt-xs-row layout-align-start-center">
          { children } 
        </div>
      </Container>
    </div>
  )
}