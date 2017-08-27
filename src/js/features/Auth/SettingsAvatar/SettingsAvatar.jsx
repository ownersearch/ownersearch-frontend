import React, { Component, PropTypes } from 'react'

import cn from 'classnames'
import s from './SettingsAvatar.scss'

export default class SettingsAvatar extends Component {
  render() {
    return (
      <div className={ cn(s.avatar, 'layout-column layout-align-center-center') }>
        DR
      </div>
    )
  }
}
