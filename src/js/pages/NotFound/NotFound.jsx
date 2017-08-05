import React, { Component } from 'react'
import FullWidthSection from 'components/FullWidthSection'
import colors from 'styles/colors-export.css'
import sText from 'components/Text/Text.scss'
import Page from 'components/Page'

export default class NotFound extends Component {
  render() {
    return (
      <Page
        title="Zuper - Page not found"
        layout={ { header: 'landing' } }
        className="layout-column"
        style={ { marginTop: '0' } }
      >
        <div className="layout-column flex">
          <FullWidthSection style={ { color: 'white', backgroundColor: colors.primary } }>
          </FullWidthSection>
          <div className="layout-column layout-align-center-center flex">
            <h2 className={ sText.heading3 }>Aww Zhit!</h2>
            <div className={ sText.descrip3 }>This page is in the past. Look to the future!</div>
          </div>
        </div>
      </Page>
    )
  }
}
