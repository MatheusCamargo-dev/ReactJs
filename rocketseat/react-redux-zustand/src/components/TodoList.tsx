import { useStoreSelector } from '../hooks'

export function TodoList() {
  const todos = useStoreSelector((store) => {
    return store.todo
  })

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}
