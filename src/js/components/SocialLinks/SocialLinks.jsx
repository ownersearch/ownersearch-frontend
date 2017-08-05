import React, { Component } from 'react'

import Button from 'components/Button'

import IconFacebook from 'components/Icons/Facebook'
import IconLinkedin from 'components/Icons/Linkedin'
import IconSnapchat from 'components/Icons/Snapchat'
import IconInstagram from 'components/Icons/Instagram'
import IconYoutube from 'components/Icons/Youtube'
import IconTwitter from 'components/Icons/Twitter'
import ContactForm from 'features/Contact/ContactForm'

import cn from 'classnames'
import s from './SocialLinks.scss'

export default class SocialLinks extends Component {
  render() {
    const { color, size } = this.props
    return (
      <div className={ cn(s.buttons, 'layout-row layout-wrap') }>
        <Button
          target="_blank"
          href="https://www.facebook.com/zuperannuation"
          icon ghost color={ color || 'primary' }
          size={ size }
        >
          <IconFacebook size={ 24 } />
        </Button>
        <Button
          target="_blank"
          href="https://www.twitter.com/zuperannuation"
          icon ghost color={ color || 'primary' }
          size={ size }
        >
          <IconTwitter size={ 24 } />
        </Button>
        <Button
          target="_blank"
          href="https://www.linkedin.com/company/zuperannuation"
          icon ghost color={ color || 'primary' }
          size={ size }
        >
          <IconLinkedin size={ 24 } />
        </Button>
        <Button
          target="_blank"
          href="https://www.snapchat.com/add/zuperannuation"
          icon ghost color={ color || 'primary' }
          size={ size }
        >
          <IconSnapchat size={ 24 } />
        </Button>
        <Button
          target="_blank"
          href="https://www.youtube.com/zuperannuation"
          icon ghost color={ color || 'primary' }
          size={ size }
        >
          <IconYoutube size={ 24 } />
        </Button>
        <Button
          target="_blank"
          href="https://www.instagram.com/zuperannuation"
          icon ghost color={ color || 'primary' }
          size={ size }
        >
          <IconInstagram size={ 24 } />
        </Button>
      </div>
    )
  }
}
