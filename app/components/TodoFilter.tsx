export type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  return (
    <div className="todo-filter">
      <button
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Todas
      </button>
      <button
        className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
        onClick={() => onFilterChange('active')}
      >
        Ativas
      </button>
      <button
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        Concluídas
      </button>
    </div>
  );
}
