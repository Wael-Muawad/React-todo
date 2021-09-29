import React, { useState, useEffect } from 'react';

function TodoTable({ todosList, setTodosList }) {
  const [maxRows, setMaxRows] = useState(0);
  let m;

  let sat = [],
    sun = [],
    mon = [],
    tues = [],
    wed = [],
    thur = [],
    fri = [];

  const DaysFilter = () => {
    sun = todosList.filter((todoObj) => todoObj.day == '0');
    mon = todosList.filter((todoObj) => todoObj.day == '1');
    tues = todosList.filter((todoObj) => todoObj.day == '2');
    wed = todosList.filter((todoObj) => todoObj.day == '3');
    thur = todosList.filter((todoObj) => todoObj.day == '4');
    fri = todosList.filter((todoObj) => todoObj.day == '5');
    sat = todosList.filter((todoObj) => todoObj.day == '6');
    m = Math.max(
      sat.length,
      sun.length,
      mon.length,
      tues.length,
      wed.length,
      thur.length,
      fri.length
    );
    /*  console.log('sun ' + sun.length);
    console.log('mon ' + mon.length);
    console.log('tues ' + tues.length);
    console.log('wed ' + wed.length);
    console.log('thur ' + thur.length);
    console.log('fri ' + fri.length);
    console.log('sat ' + sat.length); 
    console.log('MAX ' + maxRows);
    */
    return maxRows;
  };
  DaysFilter();

  useEffect(() => {
    setMaxRows(m);
  }, [m]);

  const DeleteHandler = (event) => {
    let todo = event.target.value;
    let tempTodo = todo.substr(0, todo.length - 1);
    let tempDay = todo.substr(todo.length - 1, todo.length);
    /*  console.log('tempTodo  ' + tempTodo);
    console.log('tempDay  ' + tempDay); */

    let testarr = [];

    testarr = todosList.filter(
      (v, i) => v.day != tempDay || v.todo != tempTodo
    );

    todosList.map((v, i) => console.log(v.todo + ' ' + v.day));
    setTodosList([...testarr]);
    /*  const myArray = Object.values(tempTodo);
    console.log('Event type after ' + typeof tempTodo);
    console.log('Event value after ' + tempTodo);
    myArray.map((v, i) => console.log('myArray ' + v)); */
    // setTodosList(...todosList)
  };

  return (
    <div>
      <table>
        <caption>Your ToDo</caption>

        <thead>
          <tr>
            <th colSpan="2">Sunday</th>
          </tr>
          {sun.map((value, index) => (
            <tr>
              <td>
                {value.todo}
                <button
                  className="add"
                  value={String(value.todo + value.day)}
                  onClick={DeleteHandler}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <th>Monday</th>
          </tr>
          {mon.map((value, index) => (
            <tr>
              <td>
                {value.todo}{' '}
                <button
                  className="add"
                  value={String(value.todo + value.day)}
                  onClick={DeleteHandler}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <th>Tuesday</th>
          </tr>
          {tues.map((value, index) => (
            <tr>
              <td>
                {value.todo}
                <button className="add">Delete</button>
              </td>
            </tr>
          ))}

          <tr>
            <th>Wednesday</th>
          </tr>
          {wed.map((value, index) => (
            <tr>
              <td>
                {value.todo} <button className="add">Delete</button>
              </td>
            </tr>
          ))}

          <tr>
            <th>Thursday</th>
          </tr>
          {thur.map((value, index) => (
            <tr>
              <td>
                {value.todo} <button className="add">Delete</button>
              </td>
            </tr>
          ))}

          <tr>
            <th>Friday</th>
          </tr>
          {fri.map((value, index) => (
            <tr>
              <td>
                {value.todo} <button className="add">Delete</button>
              </td>
            </tr>
          ))}

          <tr>
            <th>Saturday</th>
          </tr>
          {sat.map((value, index) => (
            <tr>
              <td>
                {value.todo} <button className="add">Delete</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default TodoTable;

/* {[...new Array(maxRows).fill(0)].map((v, i) => (
            <tr>
              <td></td>
            </tr>
          ))} */
