import React from 'react'
import ChevronDown from 'components/Icons/ChevronDown'
import AnimationFade from 'components/Animation/AnimationFade'
import jump from 'components/Scroll/Jump'

import s from './ScrollDown.scss'

export default (props) => {
  const { atTop } = props
  return (
    <AnimationFade in={ atTop }>
      <a className={ s.root } onClick={ () => jump(document.body.clientHeight, { offset: 0 }) }>
        <ChevronDown size={ 24 } />
      </a>
    </AnimationFade>
  )
}
