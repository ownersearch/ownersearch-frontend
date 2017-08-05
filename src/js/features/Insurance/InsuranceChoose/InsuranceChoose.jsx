import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import SelectRowCard from 'components/SelectRowCard'
import CheckboxCard from 'components/Input/CheckboxCard'
import { Row, Col } from 'components/Layout'
import Button from 'components/Button'
import { vRequired } from 'components/Input/Input.validations'
import { insuranceOptions } from 'features/Insurance/Insurance.data'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './InsuranceChoose.scss'



//        <div className="layout-row layout-align-center">
//          <Button color="tertiary" to="/insurance/choose/questions">Confirm</Button>
//        </div>

class InsuranceOptions extends Component {
  render() {
    const { handleSubmit, formData } = this.props

    return (
      <form
        noValidate
        onSubmit={ handleSubmit }
      >
        <Row className="layout-row layout-wrap">
          { insuranceOptions.map((item, idx) => (
            <Col
              className="flex-xs-100 flex-sm-100 flex-gt-sm-50"
              key={ item.id }
            >
              <SelectRowCard
                name={ item.id }
                className={ s.item }
                idx={ idx }
                title={ item.name }
                selectModel={ `insurance.form.selected.${item.id}` }
                sub="Cost P/W"
                number={ item.cost }
                buttonText="More"
              />
            </Col>
          ))}
        </Row>
        <div
          className="layout-row layout-align-center-center"
          style={ { marginTop: '30px' } }
        >
          <Button
            type="submit"
            color="tertiary"
          >
            Next
          </Button>
        </div>
      </form>
    )
    
  }
}

export default reduxForm({
  form: 'insuranceChoose',
})(InsuranceOptions)

