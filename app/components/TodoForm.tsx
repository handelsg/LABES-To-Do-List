import { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite aqui sua nova tarefa e pressione Adicionar...✍️"
        className="todo-input"
      />
      <button type="submit" className="btn-add">
        Adicionar
      </button>
    </form>
  );
}
