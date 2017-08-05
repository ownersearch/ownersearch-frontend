import React, { Component } from 'react'
import cn from 'classnames'
import s from './PortfolioCard.scss'

import Button from 'components/Button'
import IconClose from 'components/Icons/Close'

import imgHealth from 'static/images/illustrations-color/health-circle.svg'
import imgBasic from 'static/images/illustrations-color/basic-circle.svg'
import imgWomen from 'static/images/illustrations-color/women-circle.svg'
import imgTech from 'static/images/illustrations-color/tech-circle.svg'
import imgGreen from 'static/images/illustrations-color/green-circle.svg'

const data = {
  health: {
    image: imgHealth,
    name: 'Health',
  },
  basic: {
    image: imgBasic,
    name: 'Basic',
  },
  women: {
    image: imgWomen,
    name: 'Women',
  },
  tech: {
    image: imgTech,
    name: 'Tech',
  },  
  green: {
    image: imgGreen,
    name: 'Green',
  },
}

export default class PortfolioCard extends Component {
  static defaultProps = {
    type: 'basic',
  }
  render() {
    const { className, empty, type } = this.props
    if (empty) {
      return (
        <div className={ cn(s.cardEmpty, 'layout-column layout-align-center-center', className) }>
          <Button icon color="primary" to="/investments/choose">
            <IconClose size={ 30 } style={ { transform: 'rotate(45deg)' } } />
          </Button>
        </div>
      )
    } else {
      return (
        <div className={ cn(s.card, 'layout-column', className) }>
          <div className={ s.title }>{ data[type].name }</div>
          <div className="layout-row layout-align-center">
            <img className={ s.image } src={ data[type].image } />
          </div>
          <div className={ cn(s.meta, 'layout-row') }>
            <div>
              <div>100%</div>
              <div>Fund</div>
            </div>
            <div>
              <div>$19,520</div>
              <div>Earned</div>
            </div> 
            <div>
              <div>+10%</div>
              <div>Growth</div>
            </div>
          </div>
        </div>
      )
    }
  }
}
