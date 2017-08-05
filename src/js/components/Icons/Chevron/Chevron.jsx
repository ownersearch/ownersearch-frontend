import React from 'react'

export default (props) => {
  const rotations = {
    down: 45,
    right: -45,
    left: 135,
    top: 225,
  }
  const rotationStyle = {
    transformOrigin: 'center',
    transform: `rotate(${rotations[props.direction || 'down']}deg)`,
    marginBottom: '5px',
  }
  const style = {
    width: `${props.size || 8}px`,
    height: `${props.size || 8}px`,
    borderBottom: '1px solid',
    borderRight: '1px solid',
    borderColor: 'inherit',
  }
  return (
    <div style={ rotationStyle }>
      <div style={ style } />
    </div>
  )
}
