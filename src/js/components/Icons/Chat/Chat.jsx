import React from 'react'
import IconBase from 'react-icon-base'

import cn from 'classnames'
import s from './Chat.scss'

export default (props) => {
  const { className, active, unread, close, ...otherProps } = props
  return (
    <div className={ cn(s.icon, {[s.active]: active, [s.close]: close}) }>
      <IconBase viewBox="0 0 24 24" size={ 36 }>
        <path d="M1.37,21.05V9.29A5.47,5.47,0,0,1,6.83,3.82H17.17a5.47,5.47,0,0,1,5.46,5.47v2.4a5.47,5.47,0,0,1-5.46,5.46H6ZM6.83,5.32a4,4,0,0,0-4,4v8.52l2.55-2.16H17.17a4,4,0,0,0,4-4V9.29a4,4,0,0,0-4-4Z"/>  
      </IconBase>
      <div className={ cn(s.dot, s.dot1) } />
      <div className={ cn(s.dot, s.dot2) } />
      <div className={ cn(s.dot, s.dot3) } />
      <div className={ s.unread }>{ unread }</div>
    </div>
  )
}
