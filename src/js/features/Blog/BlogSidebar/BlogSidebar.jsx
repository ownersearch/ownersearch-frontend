import React, { Component } from 'react'

import cn from 'classnames'
import s from './BlogSidebar.scss'
import sText from 'components/Text/Text.scss'
import Tag from 'components/Tag'

import SubscribeForm from 'features/Subscribe/SubscribeForm'

export default class BlogSidebar extends Component {
  render() {
    return (
      <div className={ s.sidebar }>
        <div className={ sText.heading4 }>Subscribe to Zuper News</div>
        <br />
        <SubscribeForm />
      </div>
    )
  }
}
//        <div className={ sText.heading5 }>Categories</div>
//        <div className={ s.tag }><Tag>Innovation</Tag><Tag>ETFs</Tag><Tag>Some other tag</Tag></div>
