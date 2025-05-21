import { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css'

interface Task {
  text: string;
  done: boolean;
}

interface List {
  id: number;
  title: string;
  tasks: Task[];
  input: string;
}

function App() {
  const [lists, setLists] = useState<List[]>([]);

  const createNewList = () => {
    const newList: List = {
      id: Date.now(),
      title: '',
      tasks: [],
      input: '',
    };
    setLists([...lists, newList]);
  };

  const updateListTitle = (id: number, title: string) => {
    setLists(lists.map(list => (list.id === id ? { ...list, title } : list)));
  };

  const updateListInput = (id: number, input: string) => {
    setLists(lists.map(list => (list.id === id ? { ...list, input } : list)));
  };

  const addTask = (id: number) => {
    setLists(lists.map(list => {
      if (list.id === id && list.input.trim()) {
        return {
          ...list,
          tasks: [...list.tasks, { text: list.input, done: false }],
          input: '',
        };
      }
      return list;
    }));
  };

  const toggleDone = (listId: number, taskIndex: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        const newTasks = [...list.tasks];
        newTasks[taskIndex].done = !newTasks[taskIndex].done;
        return { ...list, tasks: newTasks };
      }
      return list;
    }));
  };

  const deleteTask = (listId: number, taskIndex: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        const newTasks = list.tasks.filter((_, i) => i !== taskIndex);
        return { ...list, tasks: newTasks };
      }
      return list;
    }));
  };

  return (
    <div className="app">
      <Header onCreateList={createNewList} />
      <div className="lists">
        {lists.map(list => (
          <Card
            key={list.id}
            id={list.id}
            title={list.title}
            input={list.input}
            tasks={list.tasks}
            onTitleChange={updateListTitle}
            onInputChange={updateListInput}
            onAddTask={addTask}
            onToggleDone={toggleDone}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
