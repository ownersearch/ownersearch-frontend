import React, { Component } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

const stateToProps = ({ auth }) => ({
  isLoggedIn: auth.token && auth.user && auth.user.id,
  isMember: auth.token && auth.user && auth.user.id && auth.member && auth.member.id,
})

const dispatchToProps = {
  goLanding: () => replace('/landing'),
  goToMemberJoin: () => replace('/join/details'),
}

@connect(stateToProps, dispatchToProps)
export default class AppAuthed extends Component {
  componentWillReceiveProps(nextProps) {
    this.onMount(nextProps)
  }
  componentDidMount() {
    this.onMount(this.props)
  }
  onMount = (props) => {
    const { location: { pathname }, isLoggedIn, isMember } = props
    if (!isLoggedIn && !pathname.includes('landing')) {
      props.goLanding()
    } else if (!isMember && !pathname.includes('join')) {
      props.goToMemberJoin()
    }
  }
  render() {
    return this.props.children
  }
}
 