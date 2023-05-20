import {  useEffect, useState } from "react"
import { TodoList } from "./TodoList"
import { todos } from "../db/todos"


export const TodoContainer = () => {

    const { todosContainer } = todos
    const [items, setItems] = useState([])

    useEffect(()=>{
        //se emula llamada async
        setItems(todosContainer);
    },[])

    const handleComplete = (id) => {
        console.log(id)
        const index = items.findIndex((item) => item.id === id)
        const updatedItems = [...items]
        updatedItems[index] = {
            ...updatedItems[index],
            ['completed'] : !updatedItems[index].completed
        }
        setItems(updatedItems);
    }

    const itemsCompleted = () => {
        return items.filter((item) => item.completed).length;
    }


  return (
    <TodoList
        items={items}
        onComplete={handleComplete}
        itemsCompleted={itemsCompleted()}
        totalItems={items.length}
    />
  )
}
