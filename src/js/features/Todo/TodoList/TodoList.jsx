import React from 'react'

import TodoListItem from './TodoListItem'
import getTodoData from '../Todo.data'
import cn from 'classnames'
import s from './TodoList.scss'

export default (props) => {
  const { children, state, className, ...otherProps } = props
  const todoData = getTodoData(state)
  return (
    <div className={ cn(s.outer, className) } { ...otherProps }>
      <div className={ s.title }>
        To Do's
      </div>
      <div className={ s.list }>
        { todoData.map(item => (
          <TodoListItem complete={ item.complete }>{ item.title }</TodoListItem>
        )) }
      </div>
    </div>
  )
}
