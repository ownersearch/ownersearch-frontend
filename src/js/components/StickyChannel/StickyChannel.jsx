import React, { Component } from 'react'

const scrollContainerId = 'scrollContainer'

const offset = 60

export default class StickyChannel extends Component {
  scrollInterval = undefined
  scrollTimeout = undefined
  componentDidMount(){
    this.scrollTimeout = setTimeout(() => {
      this.scrollInterval = setInterval(() => {
        const { channelRef, contentRef } = this.refs
        const scrollContainer = document.getElementById(scrollContainerId)
        if (scrollContainer) {
          const distanceFromTop = scrollContainer.scrollTop - channelRef.offsetTop + offset
          if (distanceFromTop > 0) {
            const isAtEnd = channelRef.offsetTop + channelRef.offsetHeight < distanceFromTop + contentRef.offsetHeight + contentRef.offsetTop
            if (isAtEnd) {
               this.setState({
                position: channelRef.offsetHeight - contentRef.offsetHeight,
              }) 
            } else {
              this.setState({
                position: distanceFromTop,
              })
            }
          } else {
            this.setState({
              position: 0,
            })
          }
        }
      }, 100)
    }, 100)
  }
  componentWillUnmount() {
    clearTimeout(this.scrollTimeout)
    clearInterval(this.scrollInterval)
  }
  state = {
    position: 0,
  }
  render() {
    const { children } = this.props
    const { position } = this.state
    
    const style = {
      transform: `translateY(${position}px)`,
      transition: '0.2s ease all',
    }
    return (
      <div ref="channelRef" style={ { height: '100%' } }>
        <div style={ style } ref="contentRef">
          { children }
        </div>
      </div>
    )
  }
}

