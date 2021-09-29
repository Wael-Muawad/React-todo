import classes from './TodoForm.module.css';

import { useState, useEffect } from 'react';

function TodoForm({ todosList, setTodosList, weekDays }) {
  const [todoValue, setTodoValue] = useState('');
  const [selectedDay, setSelectedDay] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosList));
  }, [todosList]);

  const isEmpty = () => {
    let errors = {};
    if (!Boolean(todoValue)) errors.todoValue = true;

    if (errors.todoValue) return true;
    else return false;
  };

  const clearFields = () => {
    setTodoValue('');
    setSelectedDay(0);
    if (showErrorMessage) setShowErrorMessage(false);
  };

  const AddButtonHandler = () => {
    if (isEmpty()) setShowErrorMessage(true);
    else {
      setTodosList([
        ...todosList,
        {
          todo: todoValue,
          day: selectedDay,
        },
      ]);
      clearFields();
      console.log(todosList);
    }
  };

  return (
    <div>
      <div className={classes.newTodo}>
        <label>New Todo</label>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.charCode === 13) document.getElementById('addBtn').click();
          }}
        />

        <label>Day</label>
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {weekDays.map((day) => (
            <option key={day.key} value={day.value}>
              {day.text}
              {/* {console.log('slected ' + typeof day.key)} */}
            </option>
          ))}
        </select>

        <button className={classes.add} onClick={AddButtonHandler} id="addBtn">
          ADD
        </button>
        <div className={classes.errorLine}>
          {showErrorMessage && <label>You must enter all the fields</label>}
        </div>
      </div>
      <div className={classes.error}>
        {showErrorMessage && <label>You must enter all the fields</label>}
      </div>
    </div>
  );
}

export default TodoForm;
