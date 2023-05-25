import { Todo } from "../Todo/Todo";

export const TodoList = ({ items, counter }) => {
  return (
    <div>
    <p style={{marginBottom: '10px'}}><strong >{ counter } of {items.length} </strong> </p> 
      {items.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
};
