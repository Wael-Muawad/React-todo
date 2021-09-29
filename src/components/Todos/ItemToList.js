import Item from './Item';

function ItemToList(props) {
  let newkey = 0;
  return (
    <ul>
      {props.DataObject.map((obj) => (
        <Item key={newkey++} todo={obj.todo} date={obj.date} />
      ))}
    </ul>
  );
}
export default ItemToList;
