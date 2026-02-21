import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

test('renders initial todos', () => {
  render(<TodoList />)

  expect(screen.getByText('Learn Testing')).toBeInTheDocument()
  expect(screen.getByText('Write Todo App')).toBeInTheDocument()
})

test('adds a new todo', () => {
  render(<TodoList />)

  const input = screen.getByPlaceholderText('Add a todo')
  const button = screen.getByText('Add')

  fireEvent.change(input, { target: { value: 'New Task' } })
  fireEvent.click(button)

  expect(screen.getByText('New Task')).toBeInTheDocument()
})

test('toggles a todo', () => {
  render(<TodoList />)

  const todo = screen.getByText('Learn Testing')

  fireEvent.click(todo)
  expect(todo).toHaveStyle({ textDecoration: 'line-through' })

  fireEvent.click(todo)
  expect(todo).toHaveStyle({ textDecoration: 'none' })
})