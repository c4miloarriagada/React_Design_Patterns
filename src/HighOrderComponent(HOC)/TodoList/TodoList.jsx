import { Todo } from "../Todo/Todo"
import { filterItems } from "../../utils/filterItems"



export const TodoList = ({ query, dataset }) => {

    const items = filterItems(query, dataset)
  return (
    <div>
        {items.map(({id, title, completed}) => (
         <Todo key={id} title={title} completed={completed}/>
        ))}
    </div>
  )
}
