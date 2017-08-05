
import React, { Component } from 'react'

import Button from 'components/Button'
import { Link } from 'react-router'
import { get } from 'lodash'
import Tag from 'components/Tag'

import cn from 'classnames'
import s from './BlogPreview.scss'
import sText from 'components/Text/Text.scss'

export default class BlogPreview extends Component {
  static defaultProps = {
    article: {},
  }
  render() {
    const { horizontal, article } = this.props
    const exerpt = `${get(article, 'excerpt.rendered', '').substring(0, 150)}...`
    const image = get(article, '_embedded.wp:featuredmedia.0.source_url')
    
    return (
      <div className={ cn(s.article, {[s.horizontal] : horizontal}) }>
        { image 
        ? <Link
            to={ `/blog/${article.slug}` }
            className={ s.image }
            style={ { backgroundImage: `url(${image})` } }
          />
        : <div className={ s.image } />
        }
        { article && article.title ?
          <div className={ cn(s.content, 'flex layout-column layout-align-start-start') }>
            <div className={ cn('layout-row', s.tags) }>
              { get(article, '_embedded.wp:term[0]', []).map(tag => (
                <Tag idx={ tag.id }>{ tag.name }</Tag>
              ))}
            </div>
            <Link
              to={ `/blog/${article.slug}` }
              className={ cn(s.title, sText.heading3) }
            >
              { get(article, 'title.rendered') }
            </Link>
            <div className={ cn(s.meta) }>
              By { get(article, '_embedded.author[0].name') }
            </div>
            <div className={ s.descrip } dangerouslySetInnerHTML={ { __html: exerpt } } />
            <div className="flex" />
            <Button plain to={ `/blog/${article.slug}` }>
              More
            </Button>
          </div> : 
          <div className={ cn(s.content, 'flex layout-column layout-align-start-start') } />
        }
      </div>
    )
  }
}
