import React, { Component } from 'react'
import cn from 'classnames'
import { Container } from 'components/Layout'
import { Helmet } from "react-helmet"
import ScrollToTop from 'components/Scroll/ScrollToTop'

const scrollContainerId = 'scrollContainer'

export default class Page extends Component {
  scrollContainerEl = undefined
  componentWillUnmount() {
    this.scrollContainerEl.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    const {  updatePosition } = this.props
    updatePosition(this.scrollContainerEl.scrollTop)
  }
  componentDidMount() {
    // Set the layout
    const { setLayout, layout } = this.props
    setLayout(layout)
    // Add the container listeners
    this.scrollContainerEl = document.getElementById(scrollContainerId)
    this.scrollContainerEl.addEventListener('scroll', this.handleScroll)
    setTimeout(this.handleScroll, 1)
  }
  render() {
    const { contained, layout, absChildren, title, description, image, setLayout, updatePosition, children, style, className, ...otherProps } = this.props
    
    const getInner = () => contained
      ? <Container>{ children }</Container>
      : children
    
    return (
      <div className="layout-column flex">
        <div
          id="scrollContainer"
          className={ cn('flex', className)}
          style={ { overflowY: 'auto', overflowX: 'hidden', position: 'relative', minHeight: '0px', background: 'white', ...style } }
          { ...otherProps }
        >
          <Helmet>
            <title>{ title }</title>
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description || 'Extremely Super, Super' } />
            <meta property="og:image" content={ image || 'http://devapp1.zuper.com.au/static/images/illustrations/zombies.jpg' } />
          </Helmet>
          <ScrollToTop />
          { getInner() }
        </div>
        { absChildren }
      </div>
    )
  }
}
