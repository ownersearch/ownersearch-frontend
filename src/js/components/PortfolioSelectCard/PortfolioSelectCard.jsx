import React, { Component } from 'react'
import Button from 'components/Button'
import cn from 'classnames'
import s from './PortfolioSelectCard.scss'
import { CheckboxConnected } from 'components/Input/Checkbox'

import imgHealth from 'static/images/illustrations-color/health-circle.svg'
import imgBasic from 'static/images/illustrations-color/basic-circle.svg'
import imgWomen from 'static/images/illustrations-color/women-circle.svg'
import imgTech from 'static/images/illustrations-color/tech-circle.svg'
import imgGreen from 'static/images/illustrations-color/green-circle.svg'

const data = {
  health: {
    image: imgHealth,
    name: 'Health',
    descrip: 'Lorem ipsum dolor sit amet, consect adipiscing elit quisque nunc mi.',
  },
  basic: {
    image: imgBasic,
    name: 'Basic',
    descrip: 'Lorem ipsum dolor sit amet, consect adipiscing elit quisque nunc mi.',
  },
  women: {
    image: imgWomen,
    name: 'Women',
    descrip: 'Lorem ipsum dolor sit amet, consect adipiscing elit quisque nunc mi.',
  },
  tech: {
    image: imgTech,
    name: 'Tech',
    descrip: 'Lorem ipsum dolor sit amet, consect adipiscing elit quisque nunc mi.',
  },  
  green: {
    image: imgGreen,
    name: 'Green',
    descrip: 'Lorem ipsum dolor sit amet, consect adipiscing elit quisque nunc mi.',
  },
}

export default class PortfolioSelectCard extends Component {
  static defaultProps = {
    type: 'basic',
  }
  render() {
    const { className, type } = this.props
    return (
      <div className={ cn(s.card, 'layout-column layout-align-start-center', className) }>
        <CheckboxConnected className={ s.checkbox } model={ `investments.form.selected.${type}` } />
        <img className={ s.image } src={ data[type].image } />
        <div className={ s.title }>{ data[type].name }</div>
        <div className={ s.descrip }>{data[type].descrip }</div>
        <Button plain to={ `/investments/choose/${type}` }>More</Button>
      </div>
    )
  }
}
