import React from 'react'

import cn from 'classnames'
import s from './Tooltip.scss'
import sText from 'components/Text/Text.scss'

export default (props) => {
  return (
    <div className={ cn(s.tooltip, {[s.show]: props.show}, sText.noselect, props.className) } style={ props.style }>
      { props.children }
    </div>
  )
}
