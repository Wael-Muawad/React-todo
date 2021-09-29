import classes from './TodoUI.module.css';

function TodoUI({ todosList, weekDays, setTodosList }) {
  const deleteHandler = (index) =>
    setTodosList(todosList.filter((a, idx) => idx !== index));

  return (
    <div className={classes.parent}>
      <div className={classes.row}>
        {weekDays.map((weekDaysValue, weekDaysIndex) => (
          <div className={classes.todos}>
            <h1 className={classes.days}>{weekDaysValue.text}</h1>

            {todosList.map((todoValue, todoIndex) =>
              todoValue.day == weekDaysValue.key ? (
                <div>
                  <p className={classes.todoParagraph}>
                    {todoValue.todo}{' '}
                    <div>
                      <button
                        className={classes.delete}
                        onClick={() => deleteHandler(todoIndex)}
                      >
                        Delete
                      </button>
                    </div>
                  </p>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoUI;
