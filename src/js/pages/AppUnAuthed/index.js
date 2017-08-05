import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

const stateToProps = ({ auth }) => ({
  token: auth.token,
  userId: auth.user.id
})

const dispatchToProps = {
  goHome: () => replace('/')
}

@connect(stateToProps, dispatchToProps)
export default class AppUnAuthed extends Component {
  componentWillReceiveProps(nextProps) {
    this.onMount(nextProps)
  }
  componentDidMount() {
    this.onMount(this.props)
  }
  onMount = (props) => {
    if (props.token && props.userId) {
      props.goHome()
    }
  }
  render() {
    return this.props.children
  }
}
