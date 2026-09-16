import { TodoItem } from '../components/TodoItem'

export function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="my-4 rounded-lg border border-cyan-500/30 bg-slate-950/80 p-6 text-center font-['Poppins'] backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.15)]">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
          Nothing to add here yet. Fill up the to do above
        </p>
        <p className="mt-1 text-xs text-fuchsia-400/70">
          Initialize new task above to begin operation.
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-2 font-['Poppins']">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}