import type { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="todo-stats">
      <div className="stat-item">
        <span className="stat-label">Total</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Pendentes</span>
        <span className="stat-value pending">{pending}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Concluídas</span>
        <span className="stat-value completed">{completed}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Progresso</span>
        <span className="stat-value">{completionRate}%</span>
      </div>
    </div>
  );
}
