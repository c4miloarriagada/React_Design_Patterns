import { Todo } from "./Todo"


export const TodoList = ({
    items,
    onComplete,
    itemsCompleted,
    totalItems
}) => {

  return (
    <div>
        <h4>
            {itemsCompleted} of {totalItems}
        </h4>
        {items.map((item)=>(
            <Todo key={item.id} {...item} onCompleted={onComplete}/>
        ))}
    </div>
  )
}
