import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 300

const defaultStyle = {
  transition: `all ${duration}ms ease`,
  overflow: 'hidden',
}


export default (props) => {
  
  const transitionStyles = {
    entering: {
      maxHeight: `${props.height}px`,
    },
    entered: {
      maxHeight: `${props.height}px`,
    },
    exited: {
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    exiting: {
      maxHeight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
  }
  
  return (
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
}
