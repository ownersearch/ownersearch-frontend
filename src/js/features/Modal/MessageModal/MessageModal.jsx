import React from 'react'

import Button from 'components/Button'

import s from './MessageModal.scss'
import cn from 'classnames'
import sText from 'components/Text/Text.scss'

export default (props) => {
  const { title, body } = props
  return (
    <div className={ cn('layout-column layout-align-center-center flex', s.body) }>
      <div className={ sText.descrip1 } style={ { marginBottom: '30px' } }>{ title }</div>
      <div className={ sText.descrip4 }>{ body }</div>
    </div>
  )
}
