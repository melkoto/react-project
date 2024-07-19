import { memo, useMemo } from 'react'

import { useTodo } from '../hooks/useTodo'

import TodoItem from './TodoItem'

import styles from './TodoList.module.css'

const TodoList = () => {
  const { state } = useTodo()

  const todoItems = useMemo(() => {
    return state.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
  }, [state.todos])

  return <div className={styles.container}>{todoItems}</div>
}

export default memo(TodoList)
