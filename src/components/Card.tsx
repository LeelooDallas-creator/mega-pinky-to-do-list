import React from 'react';

interface Task {
  text: string;
  done: boolean;
}

interface CardProps {
  id: number;
  title: string;
  input: string;
  tasks: Task[];
  onTitleChange: (id: number, title: string) => void;
  onInputChange: (id: number, input: string) => void;
  onAddTask: (id: number) => void;
  onToggleDone: (listId: number, taskIndex: number) => void;
  onDeleteTask: (listId: number, taskIndex: number) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  input,
  tasks,
  onTitleChange,
  onInputChange,
  onAddTask,
  onToggleDone,
  onDeleteTask,
}) => {
  return (
    <div className="list-card">
      <input
        className="list-title"
        value={title}
        onChange={(e) => onTitleChange(id, e.target.value)}
        placeholder="Titre de la liste..."
      />
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => onInputChange(id, e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button onClick={() => onAddTask(id)}>Ajouter</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? "done" : ""}>
            <span onClick={() => onToggleDone(id, index)}>{task.text}</span>
            <button onClick={() => onDeleteTask(id, index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
