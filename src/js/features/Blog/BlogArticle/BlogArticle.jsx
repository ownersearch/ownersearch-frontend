import React, { Component } from 'react'
import { get } from 'lodash'

import imgLines from 'static/images/patterns/lines.png'

import Page from 'components/Page'
import FullWidthSection from 'components/FullWidthSection'
import { Row, Col, Container } from 'components/Layout'
import BlogSidebar from 'features/Blog/BlogSidebar'
import BlogAuthor from 'features/Blog/BlogAuthor'
import Footer from 'components/Footer'
import Button from 'components/Button'

import cn from 'classnames'
import s from './BlogArticle.scss'
import colors from 'styles/colors-export.css'
import sText from 'components/Text/Text.scss'
import sAnim from 'components/Animation/Animation.scss'

export default class BlogArticle extends Component {
  componentWillMount() {
    const { getArticle, routeParams } = this.props
    getArticle(routeParams.articleSlug)
  }
  render() {
    const { article } = this.props
            
    const getInnerContent = () => {
      if (article.content) {
        return (
          <div>
            <FullWidthSection
              className={ s.header }
              style={ {
                color: 'white',
                backgroundColor: colors.primary,
                backgroundImage: `url(${get(article, '_embedded.wp:featuredmedia.0.source_url') || imgLines})` 
              } }
            >
              <h1 className={ sText.heading1 }>{ article.title.rendered }</h1>
            </FullWidthSection>
            <Container className={ cn(s.content, sAnim.comeUp, 'lg') }>
              <Row className="md layout-xs-column layout-sm-column layout-gt-sm-row">
                <Col className={ cn('md flex') }>
                </Col>
                <Col className={ cn('md', s.contentCol) }>
                  <div className={ s.blogContent } dangerouslySetInnerHTML={ { __html: article.content.rendered } } />
                  <br />
                  <br />
                  <BlogAuthor article={ article } />
                </Col>
                <Col className={ cn('md flex layout-column layout-align-start-start') }>
                  <BlogAuthor vertical article={ article } />
                  <Button
                    style={ { marginTop: '30px' } }
                    to="/blog"
                    color="tertiary"
                  >
                    Back to blog
                  </Button>            
                  <div className="flex" />
                  <Button
                    className="hide-xs hide-sm"
                    to="/blog"
                    color="tertiary"
                  >
                    Back to blog
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        )
      } else {
        return (
          <div>
            <FullWidthSection style={ { color: 'white', background: colors.primary } }>
              <h1 className={ sText.heading1 }>&nbsp;</h1>
            </FullWidthSection>
          </div>
        )
      }
    }
    return (
      <Page
        layout={ { header: 'landing' } }
        title={ get(article, 'title.rendered', 'Blog') }
        image={ get(article, '_embedded.wp:featuredmedia.0.source_url') }
        description={ get(article, 'excerpt.rendered', '').replace(/<(?:.|\n)*?>/gm, '') }
      >
        { getInnerContent() }
        <Footer white />
      </Page>
    )
  }
}

