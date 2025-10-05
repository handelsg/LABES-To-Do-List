import { useState } from 'react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <div className="edit-actions">
              <button type="submit" className="btn-save">
                Salvar
              </button>
              <button type="button" onClick={handleCancel} className="btn-cancel">
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <>
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
              <button
                onClick={() => setIsEditing(true)}
                className="btn-edit"
                disabled={todo.completed}
              >
                ✏️
              </button>
              <button onClick={() => onDelete(todo.id)} className="btn-delete">
                🗑️
              </button>
            </div>
          </>
        )}
      </div>
      {todo.createdAt && (
        <small className="todo-date">
          Criado em: {new Date(todo.createdAt).toLocaleString('pt-BR')}
        </small>
      )}
    </li>
  );
}
