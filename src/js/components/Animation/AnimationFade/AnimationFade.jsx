import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 200

const defaultStyle = {
  transition: `opacity ${duration}ms ease`,
  opactity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exited: { opacity: 0, display: 'none' },
  exiting: { opacity: 0 },
}

export default (props) => (
  <Transition
    in={ props.in }
    timeout={ duration }
  >
    { (state) => {
      const style = {
        ...defaultStyle,
        ...transitionStyles[state],
      }
      return React.cloneElement(props.children, { style })
    } }
  </Transition>
)
