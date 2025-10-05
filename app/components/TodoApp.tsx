import { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoStats } from './TodoStats';
import { TodoFilter, type FilterType } from './TodoFilter';
import type { Todo } from '../types/todo';

const STORAGE_KEY = 'labes-todos';

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Carregar todos do localStorage ao montar o componente
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTodos(JSON.parse(stored));
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    }
  }, []);

  // Salvar todos no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filtrar tarefas baseado no filtro atual
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>📋 LABES To-Do List</h1>
        <p className="subtitle">Organize suas tarefas de forma simples e eficiente</p>
      </header>

      <div className="todo-container">
        <TodoForm onAdd={addTodo} />
        
        <TodoStats todos={todos} />
        
        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        {todos.some(todo => todo.completed) && (
          <div className="clear-completed">
            <button onClick={clearCompleted} className="btn-clear">
              Limpar Concluídas
            </button>
          </div>
        )}
      </div>

      <footer className="todo-footer">
        <p>Desenvolvido com ❤️ para o LABES</p>
      </footer>
    </div>
  );
}
