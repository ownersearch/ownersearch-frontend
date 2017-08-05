import React, { Component } from 'react'

import Page from 'components/Page'
import FullWidthSection from 'components/FullWidthSection'
import { Row, Col, Container } from 'components/Layout'
import BlogPreview from 'features/Blog/BlogPreview'
import Footer from 'components/Footer'

import cn from 'classnames'
import s from './BlogIndex.scss'
import colors from 'styles/colors-export.css'
import sText from 'components/Text/Text.scss'
import sAnim from 'components/Animation/Animation.scss'

export default class BlogIndex extends Component {
  componentWillMount() {
    const { getArticles } = this.props
    getArticles()
  }
  render() {
    const { articles } = this.props
    const hasArticles = articles && articles.length > 0
    const articlesOrDummy = hasArticles ? articles : [1, 2, 3, 4]
    return (
      <Page
        layout={ { header: 'landing' } }
        title="Zuper Blog"
        style={ { background: 'rgba(0, 0, 0, 0.03)' } }
      >
        <FullWidthSection
          className={ s.heading }
          fullHeight
          style={ { color: 'white', background: colors.primaryBg } }
        >
          <h2 className={ cn(sText.heading5, sText.accent) }>The Zuper Blog</h2>
          <br />
          <div className={ sText.divider } />
          <h1 className={ sText.heading1 }>We almost called this our Zlog</h1>
        </FullWidthSection>
        <Container className={ cn(s.content, sAnim.comeUp) } paddingTop paddingBottom>
          <Row className="layout-row layout-wrap">
            { articlesOrDummy.map((article, idx) => (
              <Col
                key={ article.slug || idx }
                className={ cn(idx % 4 === 0 ? 'flex-100' : 'flex-gt-md-33 flex-md-50 flex-sm-100 flex-xs-100', s.item) }
              >
                <BlogPreview article={ article } horizontal={ idx % 4 === 0 } />
              </Col>
            )) }
          </Row>
        </Container>
        <Footer white />
      </Page>
    )
  }
}
