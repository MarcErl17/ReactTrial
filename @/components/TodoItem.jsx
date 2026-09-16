import { Trash2 } from 'lucide-react'
import { Button } from '../components/ui/button'

export function TodoItem({ todo, onDelete }) {
  return (
    <li className="flex items-center gap-3 rounded-md px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-sm text-white hover:bg-white/20 transition-all">
      <span className="flex-1 text-sm font-medium">{todo.title}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.title}`}
        className="text-white hover:bg-white/20 hover:text-white"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  )
}