import React, { Component } from 'react'
import qs from 'querystring'
import window from 'window'
import Helmet from 'react-helmet'

import Button from 'components/Button'
import IconFacebook from 'components/Icons/Facebook'
import IconLinkedin from 'components/Icons/Linkedin'
import IconSnapchat from 'components/Icons/Snapchat'
import IconInstagram from 'components/Icons/Instagram'
import IconYoutube from 'components/Icons/Youtube'
import IconTwitter from 'components/Icons/Twitter'
import ContactForm from 'features/Contact/ContactForm'

import cn from 'classnames'
import s from './SocialShares.scss'

export default class SocialShares extends Component {
  render() {
    const helmetData = Helmet.peek()
    const title = helmetData.metaTags.find(item => item.property === 'og:title').content
    const summary = helmetData.metaTags.find(item => item.property === 'og:description').content
    const url = window.location.href
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?${qs.stringify({
      u: url,
    })}`
    
    const twitterLink = `https://twitter.com/home?${qs.stringify({
      status: 'Check%20out%20%40zuperannuation%20-%20Invest%20in%20what%20matters%20to%20you%20most%3A%20http%3A//www.zuper.com.au/destination%20%23zuper'
    })}`
    
    const linkedInLink = `https://www.linkedin.com/shareArticle?${qs.stringify({
      mini: true,
      url,
      title,
      summary,
    })}`
  
    const share = (link) => {
      window.open(link, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0')
    }
    
    return (
      <div className={ cn(s.buttons, 'layout-row layout-wrap') }>
        <Button
          onClick={ () => share(facebookLink) }
          icon ghost color="white"
        >
          <IconFacebook size={ 24 } />
        </Button>
        <Button
          onClick={ () => share(twitterLink) }
          icon ghost color="white"
        >
          <IconTwitter size={ 24 } />
        </Button>
        <Button
          onClick={ () => share(linkedInLink) }
          icon ghost color="white"
        >
          <IconLinkedin size={ 24 } />
        </Button>
      </div>
    )
  }
}
