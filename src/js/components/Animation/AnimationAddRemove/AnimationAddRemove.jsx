import React, { Component } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

export default class AnimationAddRemove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      added: props.show,
    }
  }
  onExited = () => {
    this.setState({
      added: false,
    })
  }  
  onEnter = () => {
    this.setState({
      added: true,
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.in && !this.props.show) {
      this.onEnter()
    }
  }
  render() {
    const { added, showState } = this.state
    const { children, ...otherProps } = this.props
    return (
      <CSSTransition
        onExited={ this.onExited }
        { ...otherProps }
      >
        { added ? children : <span /> }
      </CSSTransition>
    )
  }
}
