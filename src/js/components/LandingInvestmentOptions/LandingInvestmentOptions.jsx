import React from 'react'
import cn from 'classnames'
import s from './LandingInvestmentOptions.scss'
import sText from 'components/Text/Text.scss'
import { Row, Col } from 'components/Layout'

import imgTech from 'static/images/patterned-icons/tech-60x60.png'
import imgGrowth from 'static/images/patterned-icons/growth-60x60.png'
import imgGreen from 'static/images/patterned-icons/green-60x60.png'
import imgHealth from 'static/images/patterned-icons/health-60x60.png'

import IconGreen from 'components/Icons/Green'
import IconHealth from 'components/Icons/Health'
import IconTech from 'components/Icons/Tech'
import IconBasic from 'components/Icons/Basic'
import IconWomen from 'components/Icons/Women'
import Button from 'components/Button'

import { Link } from 'react-router'

export default (props) => {
  const { type } = props

  return (
    <Row className={ cn('layout-xs-column layout-gt-xs-row layout-wrap', s.portfolioTypes) }>
      { type !== 'tech' && (
        <Col className="flex-xs-100 flex-sm-50 flex-gt-sm-25">
          <IconTech size={ 80 } />
          <h3 className={ sText.heading3 }>Zuper Tech</h3>
          <div className={ sText.divider } />
          <p className={ sText.descrip2 }>Technology makes the world go round. Get in on the action now by investing your super in future focused companies like Apple, Facebook, Amazon, Tesla, and Google.</p>
          <br />
          <Button
            style={ { color: 'white' } }
            next
            to="/tech"
          >
            Learn More
          </Button>
        </Col>
      )}
      { type !== 'green' && (
        <Col className="flex-xs-100 flex-sm-50 flex-gt-sm-25">
          <IconGreen size={ 80 } />
          <h3 className={ sText.heading3 }>Zuper Green</h3>
          <div className={ sText.divider } />
          <p className={ sText.descrip2 }>If you believe in a future free from coal and other nasties, your super can help by supporting clean energy companies who focus on wind farms, solar, and more.</p>
          <br />
          <Button
            style={ { color: 'white' } }
            next
            to="/green"
          >
          Learn More
          </Button>
        </Col>
      )}
      { type !== 'health' && (
        <Col className="flex-xs-100 flex-sm-50 flex-gt-sm-25">
          <IconHealth size={ 80 } />
          <h3 className={ sText.heading3 }>Zuper Health</h3>
          <div className={ sText.divider } />
          <p className={ sText.descrip2 }>Preparing for the future means looking after your money - and your well-being. Do both by investing in global companies who provide health related products and services.</p>
          <br />
          <Button
            style={ { color: 'white' } }
            next
            to="/health"
          >
          Learn More
          </Button>
        </Col>
      )}
      { type !== 'basic' && (
        <Col className="flex-xs-100 flex-sm-50 flex-gt-sm-25">
          <IconBasic size={ 80 } />
          <h3 className={ sText.heading3 }>Zuper Basic</h3>
          <div className={ sText.divider } />
          <p className={ sText.descrip2 }>If you can’t decide what to invest in, or you just want the cheapest deal, park your money in our “no-frills” growth oriented option for now. You can always switch later.</p> 
          <br />
          <Button
            style={ { color: 'white' } }
            next
            to="/basic"
          >
          Learn More
          </Button>
        </Col>
      )}
      { type && type !== 'women' && (
        <Col className="flex-xs-100 flex-sm-50 flex-gt-sm-25">
          <IconWomen size={ 80 } />
          <h3 className={ sText.heading3 }>Zuper Women</h3>
          <div className={ sText.divider } />
          <p className={ sText.descrip2 }>Did you know companies with female CEOs perform better? Like 30% better. Make Mum proud and invest your super in companies dedicated to gender equality - and profits.</p>
          <br />
          <Button
            style={ { color: 'white' } }
            next
            to="/women"
          >
          Learn More (coming soon)
          </Button>
        </Col>
      )}
    </Row>
  )
}
