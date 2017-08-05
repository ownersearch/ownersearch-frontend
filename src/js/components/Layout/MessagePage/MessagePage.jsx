import React from 'react'

import cn from 'classnames'
import s from './MessagePage.scss'
import sText from 'components/Text/Text.scss'
import { Container } from 'components/Layout'

export default (props) => {
  const { title, body, subBody, image, buttonText, children } = props
  return (
    <div className={ cn('flex layout-column layout-align-center-center', s.page) }>
      { title && <div className={ sText.heading2 } style={ { marginBottom: '10px', fontWeight: 'normal' } }>{ title }</div> }
      { body && <div className={ sText.descrip1 }>{ body }</div> }
      <div className="flex layout-row layout-align-center-center" style={ { width: '100%' } }>
        <object data={ image } className={ s.image } type="image/svg+xml" />
      </div>
      <Container className="sm">
        { subBody && <div style={ { marginBottom: '50px' } } className={ sText.descrip2 }>{ subBody }</div> }
        <div>{ children }</div>
      </Container>
    </div>
  )
}
