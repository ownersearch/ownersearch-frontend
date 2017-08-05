import React, { Component } from 'react'

import cn from 'classnames'
import s from './BlogAuthor.scss'
import sText from 'components/Text/Text.scss'

import imgJessica from './jessica.jpg'
import imgEran from './eran.jpg'
import imgJon from './jon.jpg'
import imgBot from './bot.png'

const userImages = {
  7: imgJessica,
  3: imgEran,
  2: imgJon,
}

export default class BlogAuthor extends Component {
  render() {
    const { vertical, article } = this.props
    const author = article._embedded.author[0]
    const userImage = userImages[author.id] || imgBot
    return (
      <div className={ cn(s.author, vertical ? 'layout-column' : 'layout-row hide-xs hide-sm') }>
        <img src={ userImage } alt="userimage" style={ vertical ? { marginBottom: '15px' } : {} } />
        <div className="flex layout-column">
          <div className="flex layout-row">
            <div className={ sText.descrip2 }>{ author.name }</div>
            <div className="flex" />
          </div>
          <p>{ author.description }</p>
        </div>
      </div>
    )
  }
}
