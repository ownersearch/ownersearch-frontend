import React from 'react'

import Button from 'components/Button'

import s from './ConfirmModal.scss'
import cn from 'classnames'
import sText from 'components/Text/Text.scss'

export default (props) => {
  const { modalConfirm } = props
  return (
    <div className={ cn('layout-column layout-align-center-center flex', s.body) }>
      <div className={ sText.descrip1 }>Please answer our questions to sign up for this insurance option.</div>
      <br />
      <br />
      <br />
      <Button
        onClick={ modalConfirm }
        color="tertiary"  
      >
        Continue
      </Button>
    </div>
  )
}
