import React, { Component } from 'react'

const scrollContainerId = 'scrollContainer'

export default class ScrollToTop extends Component {
  componentDidMount() {
    const scrollContainer = document.getElementById(scrollContainerId)
    if (scrollContainer) {
      scrollContainer.scrollTop = 0
    }
  }
  render() {
    return null
  }
}