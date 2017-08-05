import React, { Component } from 'react'

import cn from 'classnames'
import s from './PortfolioFooter.scss'
import { Container } from 'components/Layout'

export default class PortfolioFooter extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={ s.footer }>
        <Container>
          <div className={ cn(s.inner, 'layout-row') }>
            <div className={ s.title }>Your Portfolio</div>
            <div className="flex" />
            <div className="layout-row">
              <div className={ s.item }>Green</div>
              <div className={ s.item }>Health</div>
              <div className={ s.item }>Tech</div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
