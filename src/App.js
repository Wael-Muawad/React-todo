import { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoUI from './components/TodoUI';

function App() {
  const [todosList, setTodosList] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });
  const weekDays = [
    {
      key: 0,
      text: 'Sunday',
      value: 0,
    },
    {
      key: 1,
      text: 'Monday',
      value: 1,
    },
    {
      key: 2,
      text: 'Teusday',
      value: 2,
    },
    {
      key: 3,
      text: 'Wedensday',
      value: 3,
    },
    {
      key: 4,
      text: 'Thursday',
      value: 4,
    },
    {
      key: 5,
      text: 'Friday',
      value: 5,
    },
    {
      key: 6,
      text: 'Saturday',
      value: 6,
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <TodoForm
          todosList={todosList}
          setTodosList={setTodosList}
          weekDays={weekDays}
        />
        <TodoUI
          todosList={todosList}
          setTodosList={setTodosList}
          weekDays={weekDays}
        />
      </main>

      <footer>
        <h4></h4>
      </footer>
    </div>
  );
}

export default App;
