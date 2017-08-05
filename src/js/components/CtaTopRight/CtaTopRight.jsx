import React from 'react'

import cn from 'classnames'
import s from './CtaTopRight.scss'
import sText from 'components/Text/Text.scss'

export default (props) => {
  const { text, children } = props
  return (
    <div className={ cn(s.cta, 'layout-row layout-align-xs-center-center layout-align-gt-xs-end-center' ) }>
      <div className={ sText.descrip2 } style={ { marginRight: '15px' } }>{ text }</div>
      { children }
    </div>
  )
}
