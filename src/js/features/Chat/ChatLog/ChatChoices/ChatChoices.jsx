import React, { Component, PropTypes } from 'react'

import Button from 'components/Button'

import cn from 'classnames'
import sText from 'components/Text/Text.scss'
import s from './ChatChoices.scss'

export default class ChatChoices extends Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    choices: PropTypes.array,
  }  
  static defaultProps = {
    choices: [],
  }
  render() {
    const { sendMessage, choices } = this.props
    return (
      <div className={ cn(s.row, 'layout-row layout-align-end layout-wrap') }>
        { choices.map(choice => (
          <Button
            className={ s.choice }
            size="xs"
            color="primary"
            ghost
            onClick={ () => sendMessage({ body: choice }) }
          >
            { choice }
          </Button>
        ))}
      </div>
    )
  }
}

