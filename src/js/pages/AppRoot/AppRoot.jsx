import React, { Component } from 'react'
import LandingHeader from 'components/LandingHeader'
import Header from 'components/Header'
import MobileSidebar from 'components/MobileSidebar'
import ModalContainer from 'features/Modal/ModalContainer'
import ToastsContainer from 'features/Toasts'
import AnimationPageTransition from 'components/Animation/AnimationPageTransition'

export default class AppRoot extends Component {
//  componentWillReceiveProps(nextProps) {
//    this.onMount(nextProps)
//  }
//  componentDidMount() {
//    // this.parseGlobalQueryParams()
//    this.onMount(this.props)
//  }
//  onMount = (props) => {
//
//  }
  render() {
    const { layout, children, location, isLoggedIn } = this.props
    return (
      <div className="layout-column flex">
        <div className="layout-row flex">
          <MobileSidebar />
          <div className="layout-column flex" style={ { position: 'relative' } }>
            { layout.header === 'landing' && <LandingHeader /> }
            { layout.header === 'app' && <Header location={ location } /> }
            { layout.header === 'either' && (isLoggedIn ? <Header location={ location } /> : <LandingHeader />) }
            { children }
          </div>
          <ModalContainer />
          <ToastsContainer />
        </div>
      </div>
    )
  }
            // <AnimationPageTransition location={ location }>

            // </AnimationPageTransition>
//  parseGlobalQueryParams = () => {
//    const { location, isLoggedIn, getToken } = this.props
//    const { query } = location
//    // If we have query.id and we are not logged in, we use the id as an auth token
//    if (query.id) {
//      getToken(query.id)
//    }
//  }

}

