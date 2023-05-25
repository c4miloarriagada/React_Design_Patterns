import { TodoList } from "../TodoList/TodoList";
import { useAppContext } from "../hooks/useAppContext";

export const TodosView = () => {
  const store = useAppContext();

  return (
    <div>
      <TodoList items={store.items} counter ={ store.counter } />
    </div>
  );
};
