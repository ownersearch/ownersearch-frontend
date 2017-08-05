import React from 'react'

import { Container, Row, Col } from 'components/Layout'
import Button from 'components/Button'
import getTodoData from '../Todo.data'
import TodoBasic from './TodoBasic'

import cn from 'classnames'
import s from './TodoFooter.scss'
import sText from 'components/Text/Text.scss'

export default (props) => {
  const { className, state, ...otherProps } = props
  const todoData = getTodoData(state)
  const activeTodoIndex = todoData.findIndex(item => !item.complete)
  const activeTodo = todoData[activeTodoIndex]
  
  if (activeTodo) {
    return (
      <div className={ s.footer } { ...otherProps }>
        <Container className="md">
          <div className={ s.title }>
            { activeTodoIndex + 1 } / { activeTodo.title }
          </div>
          <TodoBasic title={ activeTodo.descrip }>
            <Button
              color="tertiary"
              to={ activeTodo.buttonTo }
            >
              { activeTodo.buttonText }
            </Button>
          </TodoBasic>
        </Container>
      </div>
    )
  } else {
    return null
  }
}
