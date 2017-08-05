import React from 'react'

import cn from 'classnames'
import s from './BarPage.scss'
import sText from 'components/Text/Text.scss'
import imgLogo from 'static/images/logo-white.svg'
import imgTriangle from 'static/images/patterns/triangle.svg'

export default (props) => {
  const { children, title } = props
  return (
    <div className={ cn('layout-xs-column layout-gt-xs-row flex', s.outer) }>
      <div className={ cn('layout-column layout-align-center-center', s.bar) }>
        <div className={ s.texture } style={ { backgroundImage: `url(${imgTriangle})` } } />
        <div className={ s.inner }>
          <img src={ imgLogo } />
          { title && <div className={ cn(sText.descrip2, s.title, 'hide-gt-xs') }>{ title }</div> }
        </div>
      </div>
      <div className={ cn(s.content, 'layout-column') }>
        <div className={ cn(s.contentInner, 'layout-column flex-gt-xs') }>
          { children }
        </div>
      </div>
    </div>
  )
}
