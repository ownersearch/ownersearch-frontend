import React from 'react'

import { Row, Col } from 'components/Layout'
import sText from 'components/Text/Text.scss'

export default (props) => {
  return (
    <Row className="layout-xs-column layout-gt-xs-row layout-align-gt-xs-start-center lg">
      <Col className="flex-gt-xs lg">
        <br />
        <div className={ sText.descrip1 } style={ { marginBottom: '15px' } }>{ props.title }</div>
      </Col>
      <Col className="lg">
        { props.children }
      </Col>
    </Row>
  )
}
