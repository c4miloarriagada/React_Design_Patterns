import { useState } from "react";
import { AppContext } from "../AppContext/AppContext";

export const Store = ({ children }) => {
  const [counter, setCounter] = useState(0)
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Lavar Ropa",
      completed: false,
    },
    {
      id: 1,
      title: "Terminar Estudio",
      completed: false,
    },
    {
      id: 2,
      title: "Estudiar React",
      completed: false,
    },
    {
      id: 3,
      title: "Estudiar Clean code",
      completed: false,
    },
  ]);


  const onComplete = (id) => {
    const index = items.findIndex((item) => item.id === id);
    items[index].completed = !items[index].completed;
    items[index].completed 
    ? setCounter((prev) => prev + 1) 
    : setCounter((prev) => prev - 1) 
    setItems([...items]);
  };

  return (
    <AppContext.Provider value={{ items, onComplete, counter }}>
      {children}
    </AppContext.Provider>
  );
};
