import React from 'react'
import numberWithCommas from 'utils/numberWithCommas'
import { Field } from 'redux-form'


import cn from 'classnames'
import colors from 'styles/colors-export.css'
import s from './SelectRowCard.scss'

import { Checkbox } from 'components/Input/Checkbox'
import Button from 'components/Button'
import Chevron from 'components/Icons/Chevron'
import ColorCard from 'components/Cards/ColorCard'
import Range from 'components/Input/Range'
import AnimationVerticalHeight from 'components/Animation/AnimationVerticalHeight'

export default (props) => {
  const { title, number, name, sub, idx, buttonText, selectModel, selectValue, rangeModel, rangeValue, className } = props
  return (
    <div className={ className }>
      <ColorCard idx={ idx }>
        <div className={ cn(s.head, 'layout-row') }>
          <div className="flex">
            <div className={ s.name }>{ title }</div>
            <div className={ s.id } >{ sub }</div>
          </div>
          <Field
            name={ name }
            component={ Checkbox }
          />
        </div>
        <div className="flex" />
        <div className={ cn('layout-row layout-align-start-center', s.foot) }>
          <div className="flex layout-row layout-align-start-start">
            <div className={ s.currency }>$</div>
            <div className={ s.value }>{ numberWithCommas(number) }</div>
          </div>
          { buttonText && (
            <Button plain>
              { buttonText }
            </Button>
          ) }
        </div>
      </ColorCard>
      <AnimationVerticalHeight in={ selectValue } height={ 200 }>
        <div className={ s.rangeSelector }>
          <div className={ s.rangeDescrip }>
            How much of your Super would you like to transfer?
          </div>
          { rangeModel && (
            <Range
              model={ rangeModel }
              value={ rangeValue }
              tooltip={ rangeValue && `$${numberWithCommas(rangeValue / 100 * number)}` }
            />
          )}
        </div>
      </AnimationVerticalHeight>
    </div>
  )
}
