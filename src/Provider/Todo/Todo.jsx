import { useAppContext } from "../hooks/useAppContext";


export const Todo = ({ id, title, completed }) => {
  const store = useAppContext();

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={() => store.onComplete(id)}
        />
        {title}
      </div>
    </div>
  );
};
